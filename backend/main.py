from fastapi import FastAPI, Depends, HTTPException, status, Response, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from dotenv import load_dotenv
load_dotenv()
import os
from datetime import timedelta
from contextlib import asynccontextmanager

import models
import schemas
from auth import get_password_hash, verify_password, create_access_token, get_current_user, ACCESS_TOKEN_EXPIRE_MINUTES
from database import engine, get_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Database migrations and seeding should be executed explicitly
    # via Alembic and run_seed.py, not on serverless cold starts.
    yield

app = FastAPI(title="EduGuide AI API", lifespan=lifespan)

# Allow requests from the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/v1/auth/register", response_model=schemas.UserResponse)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    normalized_email = user.email.lower()
    db_user = db.query(models.User).filter(models.User.email == normalized_email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = get_password_hash(user.password)
    new_user = models.User(
        name=user.name,
        email=normalized_email,
        hashed_password=hashed_password
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.post("/api/v1/auth/login")
def login(user_credentials: schemas.UserLogin, response: Response, db: Session = Depends(get_db)):
    normalized_email = user_credentials.email.lower()
    user = db.query(models.User).filter(models.User.email == normalized_email).first()
    if not user or not verify_password(user_credentials.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": str(user.id)}, expires_delta=access_token_expires
    )
    
    # Secure cookie settings
    is_production = os.environ.get("ENVIRONMENT") == "production"
    response.set_cookie(
        key="access_token",
        value=f"Bearer {access_token}",
        httponly=True,
        secure=is_production,
        samesite="lax",
        max_age=ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        path="/"
    )
    return {"message": "Successfully logged in"}

@app.post("/api/v1/auth/logout")
def logout(response: Response):
    response.delete_cookie(key="access_token", path="/")
    return {"message": "Successfully logged out"}

@app.get("/api/v1/auth/me", response_model=schemas.UserResponse)
def read_users_me(current_user: models.User = Depends(get_current_user)):
    return current_user

@app.get("/api/v1/profile", response_model=schemas.StudentProfileResponse)
def get_profile(current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@app.put("/api/v1/profile", response_model=schemas.StudentProfileResponse)
def update_profile(profile_data: schemas.StudentProfileUpdate, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == current_user.id).first()
    if not profile:
        profile = models.StudentProfile(user_id=current_user.id, **profile_data.model_dump(exclude_unset=True))
        db.add(profile)
    else:
        for key, value in profile_data.model_dump(exclude_unset=True).items():
            setattr(profile, key, value)
    db.commit()
    db.refresh(profile)
    return profile

@app.get("/api/v1/scholarships/filters")
def get_scholarship_filters(db: Session = Depends(get_db)):
    categories = [cat[0] for cat in db.query(models.Scholarship.category).distinct() if cat[0]]
    fields = [f[0] for f in db.query(models.Scholarship.field_of_study).distinct() if f[0]]
    domiciles = [d[0] for d in db.query(models.Scholarship.domicile).distinct() if d[0]]
    quotas = [q[0] for q in db.query(models.Scholarship.quota).distinct() if q[0]]
    return {
        "categories": categories,
        "fields_of_study": fields,
        "domiciles": domiciles,
        "quotas": quotas
    }

@app.get("/api/v1/scholarships", response_model=schemas.PaginatedScholarships)
def list_scholarships(
    query: str = None,
    category: str = None,
    field_of_study: str = None,
    domicile: str = None,
    quota: str = None,
    page: int = 1,
    size: int = 20,
    db: Session = Depends(get_db)
):
    query_obj = db.query(models.Scholarship)
    
    if query:
        query_obj = query_obj.filter(
            models.Scholarship.title.ilike(f"%{query}%") | 
            models.Scholarship.provider.ilike(f"%{query}%")
        )
    if category:
        query_obj = query_obj.filter(models.Scholarship.category == category)
    if field_of_study:
        query_obj = query_obj.filter(models.Scholarship.field_of_study == field_of_study)
    if domicile:
        query_obj = query_obj.filter(models.Scholarship.domicile == domicile)
    if quota:
        query_obj = query_obj.filter(models.Scholarship.quota == quota)

    total = query_obj.count()
    items = query_obj.order_by(models.Scholarship.id).offset((page - 1) * size).limit(size).all()

    return {
        "items": items,
        "total": total,
        "page": page,
        "size": size
    }

@app.get("/api/v1/scholarships/{scholarship_id}", response_model=schemas.ScholarshipResponse)
def get_scholarship(scholarship_id: str, db: Session = Depends(get_db)):
    if scholarship_id.isdigit():
        item = db.query(models.Scholarship).filter(models.Scholarship.id == int(scholarship_id)).first()
    else:
        item = db.query(models.Scholarship).filter(models.Scholarship.slug == scholarship_id).first()
        
    if not item:
        raise HTTPException(status_code=404, detail="Scholarship not found")
    return item

import tools
@app.get("/api/v1/tools/eligibility/{scholarship_id}")
def test_eligibility(scholarship_id: str, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    scholarship_dict = tools.get_scholarship_details(db, scholarship_id)
    if not scholarship_dict:
        raise HTTPException(status_code=404, detail="Scholarship not found")
    profile = db.query(models.StudentProfile).filter(models.StudentProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=400, detail="Student profile required")
    profile_response = schemas.StudentProfileResponse.model_validate(profile)
    return tools.evaluate_eligibility(profile_response, scholarship_dict)

import agent
@app.post("/api/v1/agent/chat", response_model=schemas.AgentChatResponse)
def chat_with_agent(request: schemas.AgentChatRequest, current_user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if not request.message or len(request.message.strip()) == 0:
        raise HTTPException(status_code=400, detail="Message cannot be empty")
        
    try:
        result = agent.process_chat(db, current_user, request.message)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail="An error occurred while processing the chat.")
