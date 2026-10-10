import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock

from main import app
from database import Base, get_db
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import models

SQLALCHEMY_DATABASE_URL = "sqlite:///./test_agent.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)

@pytest.fixture(autouse=True)
def setup_and_teardown():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    yield

def get_auth_client(name="agentuser", email="agent@example.com"):
    client.post("/api/v1/auth/register", json={"name": name, "email": email, "password": "password123"})
    response = client.post("/api/v1/auth/login", json={"email": email, "password": "password123"})
    token = response.cookies.get("access_token")
    auth_client = TestClient(app)
    auth_client.cookies.set("access_token", token)
    return auth_client

def test_unauthenticated_agent_request_rejected():
    response = client.post("/api/v1/agent/chat", json={"message": "hello"})
    assert response.status_code == 401

@patch("agent.GEMINI_API_KEY", "test_key")
@patch("agent.genai.Client")
def test_valid_tool_call(mock_client_class):
    auth_client = get_auth_client()
    
    # Mocking the genai responses
    mock_chat = MagicMock()
    mock_client = MagicMock()
    mock_client_class.return_value = mock_client
    mock_client.chats.create.return_value = mock_chat
    
    # First response: tool call
    mock_response_1 = MagicMock()
    mock_func_call = MagicMock()
    mock_func_call.name = "search_scholarships"
    mock_func_call.args = {"query": "engineering"}
    mock_response_1.function_calls = [mock_func_call]
    mock_response_1.text = ""
    
    # Second response: text
    mock_response_2 = MagicMock()
    mock_response_2.function_calls = []
    mock_response_2.text = "I found some engineering scholarships."
    
    mock_chat.send_message.side_effect = [mock_response_1, mock_response_2]
    
    response = auth_client.post("/api/v1/agent/chat", json={"message": "find engineering scholarships"})
    assert response.status_code == 200
    data = response.json()
    assert data["answer"] == "I found some engineering scholarships."
    assert "search_scholarships" in data["tools_used"]

@patch("agent.GEMINI_API_KEY", "test_key")
@patch("agent.genai.Client")
def test_invalid_tool_name_rejected(mock_client_class):
    auth_client = get_auth_client()
    mock_chat = MagicMock()
    mock_client = MagicMock()
    mock_client_class.return_value = mock_client
    mock_client.chats.create.return_value = mock_chat
    
    mock_response_1 = MagicMock()
    mock_func_call = MagicMock()
    mock_func_call.name = "hack_database"
    mock_func_call.args = {}
    mock_response_1.function_calls = [mock_func_call]
    mock_response_1.text = ""
    
    mock_response_2 = MagicMock()
    mock_response_2.function_calls = []
    mock_response_2.text = "Error received from tools."
    
    mock_chat.send_message.side_effect = [mock_response_1, mock_response_2]
    
    response = auth_client.post("/api/v1/agent/chat", json={"message": "do bad things"})
    assert response.status_code == 200
    # In agent.py, an unknown tool returns {"error": f"Unknown tool: {name}"}
    assert "hack_database" in response.json()["tools_used"]
    # The actual function executed on the backend was not a real function

@patch("agent.GEMINI_API_KEY", "test_key")
@patch("agent.genai.Client")
def test_provider_failure_returns_safe_error(mock_client_class):
    auth_client = get_auth_client()
    mock_chat = MagicMock()
    mock_client = MagicMock()
    mock_client_class.return_value = mock_client
    mock_client.chats.create.return_value = mock_chat
    
    mock_chat.send_message.side_effect = Exception("API Down")
    
    response = auth_client.post("/api/v1/agent/chat", json={"message": "hello"})
    assert response.status_code == 200
    assert "error" in response.json()["answer"].lower()

@patch("agent.time.sleep")
@patch("agent.GEMINI_API_KEY", "test_key")
@patch("agent.genai.Client")
def test_retry_transient_503_success(mock_client_class, mock_sleep):
    auth_client = get_auth_client()
    mock_chat = MagicMock()
    mock_client_class.return_value.chats.create.return_value = mock_chat
    
    mock_response = MagicMock()
    mock_response.function_calls = []
    mock_response.text = "Success after 503"
    
    mock_chat.send_message.side_effect = [Exception("503 UNAVAILABLE"), mock_response]
    
    response = auth_client.post("/api/v1/agent/chat", json={"message": "hello"})
    assert response.status_code == 200
    assert response.json()["answer"] == "Success after 503"
    mock_sleep.assert_called_once()

@patch("agent.time.sleep")
@patch("agent.GEMINI_API_KEY", "test_key")
@patch("agent.genai.Client")
def test_retry_transient_429_success(mock_client_class, mock_sleep):
    auth_client = get_auth_client()
    mock_chat = MagicMock()
    mock_client_class.return_value.chats.create.return_value = mock_chat
    
    mock_response = MagicMock()
    mock_response.function_calls = []
    mock_response.text = "Success after 429"
    
    mock_chat.send_message.side_effect = [Exception("429 Too Many Requests"), mock_response]
    
    response = auth_client.post("/api/v1/agent/chat", json={"message": "hello"})
    assert response.status_code == 200
    assert response.json()["answer"] == "Success after 429"
    mock_sleep.assert_called_once()

@patch("agent.time.sleep")
@patch("agent.GEMINI_API_KEY", "test_key")
@patch("agent.genai.Client")
def test_retry_exhausted(mock_client_class, mock_sleep):
    auth_client = get_auth_client()
    mock_chat = MagicMock()
    mock_client_class.return_value.chats.create.return_value = mock_chat
    
    mock_chat.send_message.side_effect = [
        Exception("503 UNAVAILABLE"), 
        Exception("503 UNAVAILABLE"), 
        Exception("503 UNAVAILABLE"), 
        Exception("503 UNAVAILABLE")
    ]
    
    response = auth_client.post("/api/v1/agent/chat", json={"message": "hello"})
    assert response.status_code == 200
    assert "error" in response.json()["answer"].lower()
    assert mock_sleep.call_count == 3

@patch("agent.time.sleep")
@patch("agent.GEMINI_API_KEY", "test_key")
@patch("agent.genai.Client")
def test_no_retry_on_permanent_error(mock_client_class, mock_sleep):
    auth_client = get_auth_client()
    mock_chat = MagicMock()
    mock_client_class.return_value.chats.create.return_value = mock_chat
    
    mock_chat.send_message.side_effect = Exception("401 Unauthorized")
    
    response = auth_client.post("/api/v1/agent/chat", json={"message": "hello"})
    assert response.status_code == 200
    assert "error" in response.json()["answer"].lower()
    mock_sleep.assert_not_called()
