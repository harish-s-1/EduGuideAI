import pytest
import json
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from main import app
from database import get_db, Base
import models
import tools
import schemas

SQLALCHEMY_DATABASE_URL = "sqlite:///./test_phase5a.db"
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

def get_auth_client(name="testuser", email="test@example.com"):
    client.post("/api/v1/auth/register", json={"name": name, "email": email, "password": "password123"})
    response = client.post("/api/v1/auth/login", json={"email": email, "password": "password123"})
    token = response.cookies.get("access_token")
    auth_client = TestClient(app)
    auth_client.cookies.set("access_token", token)
    return auth_client

def test_profile_creation_and_update():
    auth_client = get_auth_client()
    # Initial get should be 404
    resp = auth_client.get("/api/v1/profile")
    assert resp.status_code == 404
    
    # Update profile
    profile_data = {
        "degree_course": "B.Tech",
        "study_level_year": "1st Year",
        "academic_marks_percentage": 85.5,
        "family_income_lpa": 5.0,
        "domicile_state": "Maharashtra",
        "category_quota": "general"
    }
    resp = auth_client.put("/api/v1/profile", json=profile_data)
    assert resp.status_code == 200
    assert resp.json()["degree_course"] == "B.Tech"
    
    # Get profile
    resp = auth_client.get("/api/v1/profile")
    assert resp.status_code == 200
    assert resp.json()["family_income_lpa"] == 5.0

def test_unauthorized_profile_access():
    resp = client.get("/api/v1/profile")
    assert resp.status_code == 401

def test_student_to_student_isolation():
    client1 = get_auth_client("user1", "user1@example.com")
    client2 = get_auth_client("user2", "user2@example.com")
    
    client1.put("/api/v1/profile", json={"degree_course": "B.Tech"})
    client2.put("/api/v1/profile", json={"degree_course": "B.A."})
    
    resp1 = client1.get("/api/v1/profile")
    assert resp1.json()["degree_course"] == "B.Tech"
    
    resp2 = client2.get("/api/v1/profile")
    assert resp2.json()["degree_course"] == "B.A."

def test_scholarship_provenance_and_validation():
    db = TestingSessionLocal()
    s = models.Scholarship(
        slug="test-provenance",
        title="Test Prov",
        provider="Provider",
        amount="1000",
        deadline="tomorrow",
        verification_status="verified_official",
        source_url="http://example.com/scholarship",
        is_demo=0
    )
    db.add(s)
    db.commit()
    
    s_db = db.query(models.Scholarship).filter_by(slug="test-provenance").first()
    assert s_db.verification_status == "verified_official"
    assert s_db.source_url == "http://example.com/scholarship"

def test_tools_search():
    db = TestingSessionLocal()
    db.add(models.Scholarship(slug="s1", title="Alpha Scholarship", provider="A", amount="1", deadline="1"))
    db.add(models.Scholarship(slug="s2", title="Beta Grant", provider="B", amount="1", deadline="1", category="corporate"))
    db.commit()
    
    res = tools.search_scholarships(db, query="Alpha")
    assert res["total"] == 1
    assert res["items"][0]["title"] == "Alpha Scholarship"
    
    res = tools.search_scholarships(db, category="corporate")
    assert res["total"] == 1
    assert res["items"][0]["title"] == "Beta Grant"

def test_tools_details():
    db = TestingSessionLocal()
    db.add(models.Scholarship(slug="detail-slug", title="Detail Test", provider="A", amount="1", deadline="1"))
    db.commit()
    
    s = db.query(models.Scholarship).first()
    
    res_by_slug = tools.get_scholarship_details(db, "detail-slug")
    assert res_by_slug is not None
    assert res_by_slug["title"] == "Detail Test"
    
    res_by_id = tools.get_scholarship_details(db, str(s.id))
    assert res_by_id is not None
    assert res_by_id["title"] == "Detail Test"
    
    res_missing = tools.get_scholarship_details(db, "nonexistent")
    assert res_missing is None

def test_tools_eligibility_eligible():
    profile = schemas.StudentProfileResponse(
        id=1, user_id=1, created_at="2020-01-01T00:00:00Z",
        degree_course="B.Tech",
        family_income_lpa=5.0,
        academic_marks_percentage=85.0,
        category_quota="general"
    )
    criteria = {
        "degree_course": ["B.Tech", "B.E."],
        "max_family_income_lpa": 8.0,
        "min_academic_marks_percentage": 60.0,
        "category_quotas": ["general", "obc"]
    }
    scholarship_dict = {
        "structured_criteria": json.dumps(criteria),
        "verification_status": "verified_official",
        "is_demo": 0
    }
    
    res = tools.evaluate_eligibility(profile, scholarship_dict)
    assert res["status"] == "eligible"
    assert res["verification_status"] == "verified_official"
    assert not res["is_demo"]
    assert res["warning"] is None

def test_tools_eligibility_not_eligible():
    profile = schemas.StudentProfileResponse(
        id=1, user_id=1, created_at="2020-01-01T00:00:00Z",
        degree_course="B.A.",
        family_income_lpa=10.0,
        academic_marks_percentage=50.0,
        category_quota="general"
    )
    criteria = {
        "degree_course": ["B.Tech"],
        "max_family_income_lpa": 8.0,
        "min_academic_marks_percentage": 60.0
    }
    scholarship_dict = {
        "structured_criteria": json.dumps(criteria),
        "verification_status": "unverified",
        "is_demo": 1
    }
    
    res = tools.evaluate_eligibility(profile, scholarship_dict)
    assert res["status"] == "not_eligible"
    assert len(res["reasons"]) > 0
    assert res["is_demo"]
    assert res["warning"] is not None

def test_tools_eligibility_missing_info():
    profile = schemas.StudentProfileResponse(
        id=1, user_id=1, created_at="2020-01-01T00:00:00Z",
        degree_course="B.Tech"
    )
    criteria = {
        "max_family_income_lpa": 8.0
    }
    scholarship_dict = {
        "structured_criteria": json.dumps(criteria)
    }
    
    res = tools.evaluate_eligibility(profile, scholarship_dict)
    assert res["status"] == "insufficient_information"
    assert "family_income_lpa" in res["missing_info"]

def test_tools_eligibility_malformed_criteria():
    profile = schemas.StudentProfileResponse(id=1, user_id=1, created_at="2020-01-01T00:00:00Z")
    scholarship_dict = {
        "structured_criteria": "not-valid-json"
    }
    res = tools.evaluate_eligibility(profile, scholarship_dict)
    assert res["status"] == "insufficient_information"
    assert "invalid" in res["reasons"][0]
