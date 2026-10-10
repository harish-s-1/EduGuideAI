import json
from sqlalchemy.orm import Session
from sqlalchemy import or_
import models
import schemas
from typing import Dict, Any, Optional

def search_scholarships(db: Session, query: Optional[str] = None, category: Optional[str] = None, 
                       field_of_study: Optional[str] = None, page: int = 1, size: int = 10) -> Dict[str, Any]:
    db_query = db.query(models.Scholarship)
    
    if query:
        search_filter = or_(
            models.Scholarship.title.ilike(f"%{query}%"),
            models.Scholarship.description.ilike(f"%{query}%"),
            models.Scholarship.provider.ilike(f"%{query}%")
        )
        db_query = db_query.filter(search_filter)
        
    if category:
        db_query = db_query.filter(models.Scholarship.category == category)
        
    if field_of_study:
        db_query = db_query.filter(models.Scholarship.field_of_study == field_of_study)
        
    total = db_query.count()
    items = db_query.offset((page - 1) * size).limit(size).all()
    
    return {
        "items": [schemas.ScholarshipResponse.model_validate(item).model_dump() for item in items],
        "total": total,
        "page": page,
        "size": size
    }

def get_scholarship_details(db: Session, identifier: str) -> Optional[Dict[str, Any]]:
    # Try by ID first if it's a digit
    scholarship = None
    if identifier.isdigit():
        scholarship = db.query(models.Scholarship).filter(models.Scholarship.id == int(identifier)).first()
    
    if not scholarship:
        scholarship = db.query(models.Scholarship).filter(models.Scholarship.slug == identifier).first()
        
    if scholarship:
        return schemas.ScholarshipResponse.model_validate(scholarship).model_dump()
    return None

def evaluate_eligibility(profile: schemas.StudentProfileResponse, scholarship_dict: Dict[str, Any]) -> Dict[str, Any]:
    # Returns eligible, not_eligible, or insufficient_information
    
    if not scholarship_dict.get('structured_criteria'):
        return {
            "status": "insufficient_information",
            "reasons": ["Scholarship lacks structured eligibility criteria for automated evaluation."],
            "missing_info": [],
            "verification_status": scholarship_dict.get("verification_status", "unverified"),
            "is_demo": scholarship_dict.get("is_demo") == 1
        }
        
    try:
        criteria = json.loads(scholarship_dict["structured_criteria"])
    except:
        return {
            "status": "insufficient_information",
            "reasons": ["Scholarship criteria format is invalid."],
            "missing_info": [],
            "verification_status": scholarship_dict.get("verification_status", "unverified"),
            "is_demo": scholarship_dict.get("is_demo") == 1
        }
    
    reasons = []
    missing_info = []
    is_eligible = True
    has_missing = False
    
    # Check degree course
    if criteria.get("degree_course"):
        if not profile.degree_course:
            missing_info.append("degree_course")
            has_missing = True
        elif profile.degree_course not in criteria["degree_course"] and "any" not in [c.lower() for c in criteria["degree_course"]]:
            is_eligible = False
            reasons.append(f"Degree '{profile.degree_course}' does not match required: {', '.join(criteria['degree_course'])}")
        else:
            reasons.append(f"Degree '{profile.degree_course}' matches requirements.")
            
    # Check family income
    if criteria.get("max_family_income_lpa") is not None:
        if profile.family_income_lpa is None:
            missing_info.append("family_income_lpa")
            has_missing = True
        elif profile.family_income_lpa > criteria["max_family_income_lpa"]:
            is_eligible = False
            reasons.append(f"Family income {profile.family_income_lpa} LPA exceeds maximum allowed {criteria['max_family_income_lpa']} LPA.")
        else:
            reasons.append(f"Family income {profile.family_income_lpa} LPA is within limit of {criteria['max_family_income_lpa']} LPA.")
            
    # Check academic marks
    if criteria.get("min_academic_marks_percentage") is not None:
        if profile.academic_marks_percentage is None:
            missing_info.append("academic_marks_percentage")
            has_missing = True
        elif profile.academic_marks_percentage < criteria["min_academic_marks_percentage"]:
            is_eligible = False
            reasons.append(f"Academic marks {profile.academic_marks_percentage}% are below minimum {criteria['min_academic_marks_percentage']}%.")
        else:
            reasons.append(f"Academic marks {profile.academic_marks_percentage}% meet minimum requirement.")
            
    # Check category quota
    if criteria.get("category_quotas"):
        if not profile.category_quota:
            missing_info.append("category_quota")
            has_missing = True
        elif profile.category_quota not in criteria["category_quotas"] and "general" not in [c.lower() for c in criteria["category_quotas"]]:
            is_eligible = False
            reasons.append(f"Category '{profile.category_quota}' does not match required: {', '.join(criteria['category_quotas'])}")
        else:
            reasons.append(f"Category '{profile.category_quota}' is eligible.")

    if not is_eligible:
        status = "not_eligible"
    elif has_missing:
        status = "insufficient_information"
    else:
        status = "eligible"

    return {
        "status": status,
        "reasons": reasons,
        "missing_info": missing_info,
        "verification_status": scholarship_dict.get("verification_status", "unverified"),
        "is_demo": scholarship_dict.get("is_demo") == 1,
        "warning": "This is a demo or unverified record; eligibility decision is not official." if scholarship_dict.get("verification_status") != "verified_official" else None
    }
