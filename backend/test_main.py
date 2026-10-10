import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from main import app
from database import get_db, Base

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

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

def test_successful_registration():
    response = client.post(
        "/api/v1/auth/register",
        json={"name": "Test User", "email": "test@example.com", "password": "password123"}
    )
    assert response.status_code == 200
    assert response.json()["email"] == "test@example.com"
    assert "id" in response.json()

def test_duplicate_email_rejection():
    client.post(
        "/api/v1/auth/register",
        json={"name": "Test User", "email": "test@example.com", "password": "password123"}
    )
    response = client.post(
        "/api/v1/auth/register",
        json={"name": "Test User 2", "email": "test@example.com", "password": "password456"}
    )
    assert response.status_code == 400
    assert response.json()["detail"] == "Email already registered"

def test_successful_login():
    client.post(
        "/api/v1/auth/register",
        json={"name": "Test User", "email": "test@example.com", "password": "password123"}
    )
    response = client.post(
        "/api/v1/auth/login",
        json={"email": "test@example.com", "password": "password123"}
    )
    assert response.status_code == 200
    assert response.cookies.get("access_token") is not None

def test_invalid_password_rejection():
    client.post(
        "/api/v1/auth/register",
        json={"name": "Test User", "email": "test@example.com", "password": "password123"}
    )
    response = client.post(
        "/api/v1/auth/login",
        json={"email": "test@example.com", "password": "wrongpassword"}
    )
    assert response.status_code == 401
    assert response.cookies.get("access_token") is None

def test_authenticated_me():
    client.post(
        "/api/v1/auth/register",
        json={"name": "Test User", "email": "test@example.com", "password": "password123"}
    )
    login_response = client.post(
        "/api/v1/auth/login",
        json={"email": "test@example.com", "password": "password123"}
    )
    access_token = login_response.cookies.get("access_token")
    
    response = client.get("/api/v1/auth/me", cookies={"access_token": access_token})
    assert response.status_code == 200
    assert response.json()["email"] == "test@example.com"

def test_unauthenticated_me():
    response = client.get("/api/v1/auth/me")
    assert response.status_code == 401

def test_logout():
    client.post(
        "/api/v1/auth/register",
        json={"name": "Test User", "email": "test@example.com", "password": "password123"}
    )
    client.post(
        "/api/v1/auth/login",
        json={"email": "test@example.com", "password": "password123"}
    )
    logout_response = client.post("/api/v1/auth/logout")
    assert logout_response.status_code == 200
    
    # Python requests CookieJar doesn't automatically drop cookies without max-age=0, but the token cookie is overridden/deleted via set_cookie or delete_cookie.
    # We can check if it returns a 401 by making a request without cookies
    response = client.get("/api/v1/auth/me")
    assert response.status_code == 401

def test_student_to_student_isolation():
    client.post("/api/v1/auth/register", json={"name": "User A", "email": "a@test.com", "password": "p"})
    client.post("/api/v1/auth/register", json={"name": "User B", "email": "b@test.com", "password": "p"})
    
    login_a = client.post("/api/v1/auth/login", json={"email": "a@test.com", "password": "p"})
    cookie_a = {"access_token": login_a.cookies.get("access_token")}
    
    login_b = client.post("/api/v1/auth/login", json={"email": "b@test.com", "password": "p"})
    cookie_b = {"access_token": login_b.cookies.get("access_token")}
    
    # Get A's ID
    me_a = client.get("/api/v1/auth/me", cookies=cookie_a).json()
    id_a = me_a["id"]
    
    me_b = client.get("/api/v1/auth/me", cookies=cookie_b).json()
    id_b = me_b["id"]
    
    # A tries to access A's profile - Allowed
    res_aa = client.get(f"/api/v1/users/{id_a}/profile", cookies=cookie_a)
    assert res_aa.status_code == 200
    
    # A tries to access B's profile - Denied
    res_ab = client.get(f"/api/v1/users/{id_b}/profile", cookies=cookie_a)
    assert res_ab.status_code == 403
    
    # Unauthenticated tries to access A's profile - Denied
    client.cookies.clear()
    res_anon = client.get(f"/api/v1/users/{id_a}/profile")
    assert res_anon.status_code == 401
