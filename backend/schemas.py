from pydantic import BaseModel, EmailStr, ConfigDict
from datetime import datetime
from typing import Optional, List

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class StudentProfileBase(BaseModel):
    degree_course: Optional[str] = None
    study_level_year: Optional[str] = None
    academic_marks_percentage: Optional[float] = None
    family_income_lpa: Optional[float] = None
    domicile_state: Optional[str] = None
    category_quota: Optional[str] = None

class StudentProfileCreate(StudentProfileBase):
    pass

class StudentProfileUpdate(StudentProfileBase):
    pass

class StudentProfileResponse(StudentProfileBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    
    model_config = ConfigDict(from_attributes=True)

class EligibilityCriteria(BaseModel):
    degree_course: Optional[List[str]] = None
    study_level_year: Optional[List[str]] = None
    min_academic_marks_percentage: Optional[float] = None
    max_family_income_lpa: Optional[float] = None
    domicile_states: Optional[List[str]] = None
    category_quotas: Optional[List[str]] = None

class ScholarshipBase(BaseModel):
    slug: str
    title: str
    provider: str
    amount: str
    deadline: str
    description: Optional[str] = None
    is_demo: int = 1
    category: Optional[str] = None
    field_of_study: Optional[str] = None
    domicile: Optional[str] = None
    quota: Optional[str] = None
    provider_code: Optional[str] = None
    match_percentage: Optional[int] = None
    requirements: Optional[str] = None
    apply_url: Optional[str] = None
    verification_status: Optional[str] = "unverified"
    source_url: Optional[str] = None
    last_verified_at: Optional[datetime] = None
    structured_criteria: Optional[str] = None

class ScholarshipCreate(ScholarshipBase):
    pass

class ScholarshipResponse(ScholarshipBase):
    id: int
    
    model_config = ConfigDict(from_attributes=True)

class PaginatedScholarships(BaseModel):
    items: List[ScholarshipResponse]
    total: int
    page: int
    size: int

class AgentChatRequest(BaseModel):
    message: str

class AgentChatResponse(BaseModel):
    answer: str
    tools_used: List[str]
    needs_more_information: bool
