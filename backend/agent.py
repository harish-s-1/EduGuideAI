import os
import json
from typing import Dict, Any, List, Optional
import time
import random
from google import genai
from google.genai import types
from sqlalchemy.orm import Session
import tools
import schemas
import models
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
GEMINI_MODEL = os.environ.get("GEMINI_MODEL", "gemini-3.8-flash")

# System Instructions to guide the LLM
SYSTEM_INSTRUCTION = """You are EduGuide AI, a helpful and trustworthy scholarship assistant for students.
You have access to tools to search scholarships, retrieve details, and evaluate a student's eligibility based on their profile.
Follow these strict rules:
- The deterministic Python eligibility engine is authoritative for the criteria it evaluates.
- You may explain the engine's results but you CANNOT override them.
- If information is missing, report `insufficient_information` and ask a relevant follow-up question.
- Do NOT invent scholarship deadlines, financial awards, application links, or eligibility criteria.
- Keep synthetic or unverified scholarships clearly identified as DEMO DATA or unverified. Do not describe an unverified record as a confirmed real-world opportunity.
- Do NOT invent a match percentage or AI confidence score.
- Always distinguish a real tool result from a general explanation.
- Do NOT claim you have submitted an application, contacted a provider, synchronized a calendar, or completed an external action when you have not.
- Never expose another student's profile or application information.
"""

def search_scholarships_tool(db: Session, args: Dict[str, Any]) -> Dict[str, Any]:
    return tools.search_scholarships(
        db=db,
        query=args.get("query"),
        category=args.get("category"),
        field_of_study=args.get("field_of_study"),
        page=1,
        size=10
    )

def get_scholarship_details_tool(db: Session, args: Dict[str, Any]) -> Dict[str, Any]:
    identifier = args.get("identifier")
    if not identifier:
        return {"error": "Missing identifier"}
    result = tools.get_scholarship_details(db, identifier)
    if not result:
        return {"error": "Scholarship not found"}
    return result

def evaluate_eligibility_tool(db: Session, current_user_id: int, args: Dict[str, Any]) -> Dict[str, Any]:
    scholarship_id = args.get("scholarship_id")
    if not scholarship_id:
        return {"error": "Missing scholarship_id"}
    
    scholarship_dict = tools.get_scholarship_details(db, scholarship_id)
    if not scholarship_dict:
        return {"error": "Scholarship not found"}
        
    profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == current_user_id).first()
    if not profile:
        return {"error": "Student profile not found. Please create one first."}
        
    profile_response = schemas.StudentProfileResponse.model_validate(profile)
    return tools.evaluate_eligibility(profile_response, scholarship_dict)

TOOL_DEFINITIONS = [
    {
        "name": "search_scholarships",
        "description": "Search for scholarships by keyword, category, or field of study.",
        "parameters": {
            "type": "OBJECT",
            "properties": {
                "query": {"type": "STRING", "description": "Search keyword (e.g. 'engineering')"},
                "category": {"type": "STRING", "description": "Category (e.g. 'central', 'corporate')"},
                "field_of_study": {"type": "STRING", "description": "Field of study (e.g. 'engineering', 'general')"}
            }
        }
    },
    {
        "name": "get_scholarship_details",
        "description": "Get full details of a specific scholarship by its ID or slug.",
        "parameters": {
            "type": "OBJECT",
            "properties": {
                "identifier": {"type": "STRING", "description": "The scholarship ID or slug"}
            },
            "required": ["identifier"]
        }
    },
    {
        "name": "evaluate_eligibility",
        "description": "Evaluate if the current student is eligible for a specific scholarship.",
        "parameters": {
            "type": "OBJECT",
            "properties": {
                "scholarship_id": {"type": "STRING", "description": "The scholarship ID or slug to evaluate"}
            },
            "required": ["scholarship_id"]
        }
    }
]

def retry_with_backoff(func, *args, **kwargs):
    max_retries = 3
    base_delay = 1.0
    for attempt in range(max_retries + 1):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            err_str = str(e)
            if "503" in err_str or "429" in err_str:
                if attempt < max_retries:
                    delay = base_delay * (2 ** attempt) + random.uniform(0, 1)
                    print(f"Transient provider error ({err_str[:50]}...). Retrying in {delay:.2f}s...")
                    time.sleep(delay)
                    continue
            raise e

def process_chat(db: Session, current_user: models.User, user_message: str) -> Dict[str, Any]:
    if not GEMINI_API_KEY:
        return {
            "answer": "AI capabilities are currently unavailable because the API key is not configured. (A real model call remains unverified).",
            "tools_used": [],
            "needs_more_information": False
        }
        
    client = genai.Client(api_key=GEMINI_API_KEY)
    
    # Initialize chat session
    chat = client.chats.create(
        model=GEMINI_MODEL,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_INSTRUCTION,
            tools=[types.Tool(function_declarations=TOOL_DEFINITIONS)],
            temperature=0.2
        )
    )
    
    tools_used = []
    needs_more_information = False
    
    try:
        response = retry_with_backoff(chat.send_message, user_message)
    except Exception as e:
        print(f"Error calling provider (first call): {e}")
        return {
            "answer": "I'm sorry, I encountered an error connecting to the AI provider. Please try again later.",
            "tools_used": [],
            "needs_more_information": False
        }

    MAX_STEPS = 5
    steps = 0
    
    while steps < MAX_STEPS:
        steps += 1
        
        if not response.function_calls:
            break
            
        function_responses = []
        
        for function_call in response.function_calls:
            name = function_call.name
            args = function_call.args
            
            tools_used.append(name)
            
            result = None
            if name == "search_scholarships":
                result = search_scholarships_tool(db, args)
            elif name == "get_scholarship_details":
                result = get_scholarship_details_tool(db, args)
            elif name == "evaluate_eligibility":
                result = evaluate_eligibility_tool(db, current_user.id, args)
                if result.get("status") == "insufficient_information":
                    needs_more_information = True
            else:
                result = {"error": f"Unknown tool: {name}"}
                
            function_responses.append(
                types.Part.from_function_response(
                    name=name,
                    response=result
                )
            )
            
        try:
            response = retry_with_backoff(chat.send_message, function_responses)
        except Exception as e:
            print(f"Error calling provider (second call): {e}")
            return {
                "answer": "I'm sorry, I encountered an error while processing the tool results. Please try again later.",
                "tools_used": tools_used,
                "needs_more_information": needs_more_information
            }

    if steps >= MAX_STEPS:
        return {
            "answer": "I've reached the maximum number of steps for this request. Here is what I know so far: " + (response.text if response.text else ""),
            "tools_used": tools_used,
            "needs_more_information": needs_more_information
        }
        
    return {
        "answer": response.text,
        "tools_used": list(set(tools_used)), # Deduplicate tools
        "needs_more_information": needs_more_information
    }
