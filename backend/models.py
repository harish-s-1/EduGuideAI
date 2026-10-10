from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    profile = relationship("StudentProfile", back_populates="user", uselist=False)

class StudentProfile(Base):
    __tablename__ = "student_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    
    # Eligibility criteria fields
    degree_course = Column(String, nullable=True)
    study_level_year = Column(String, nullable=True)
    academic_marks_percentage = Column(Float, nullable=True)
    family_income_lpa = Column(Float, nullable=True)
    domicile_state = Column(String, nullable=True)
    category_quota = Column(String, nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    user = relationship("User", back_populates="profile")

class Scholarship(Base):
    __tablename__ = "scholarships"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True, nullable=False)
    title = Column(String, index=True, nullable=False)
    provider = Column(String, nullable=False)
    amount = Column(String, nullable=False)
    deadline = Column(String, nullable=False)
    description = Column(String, nullable=True)
    is_demo = Column(Integer, default=1)
    
    category = Column(String, index=True)
    field_of_study = Column(String, index=True)
    domicile = Column(String, index=True)
    quota = Column(String, index=True)

    provider_code = Column(String, nullable=True)
    match_percentage = Column(Integer, nullable=True)
    requirements = Column(String, nullable=True) 
    apply_url = Column(String, nullable=True)

    # Provenance fields
    verification_status = Column(String, default="unverified")
    source_url = Column(String, nullable=True)
    last_verified_at = Column(DateTime, nullable=True)
    
    # Structured criteria
    structured_criteria = Column(String, nullable=True)

