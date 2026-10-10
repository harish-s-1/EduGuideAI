import json
import os
import sys
from sqlalchemy.orm import Session
import models
from database import SessionLocal

def seed_scholarships(db: Session):
    scholarships_data = [
        {
            "slug": "nsp-central-sector",
            "title": "Central Sector Scheme for College & University",
            "provider": "Dept of Higher Education (MHRD), New Delhi",
            "amount": "₹20,000 / year",
            "deadline": "Closing Oct 31",
            "description": "Financial assistance to meritorious students from low income families to meet a part of their day-to-day expenses while pursuing higher studies.",
            "is_demo": 1,
            "category": "central",
            "field_of_study": "general",
            "domicile": "all-india",
            "quota": "general",
            "provider_code": "NSP",
            "match_percentage": 98,
            "requirements": json.dumps([
                "Above 80th percentile in relevant stream in Class XII",
                "Gross family income ceiling ≤ ₹4.50 Lakh per annum",
                "Enrolled in regular graduation/post-graduation course"
            ]),
            "apply_url": "https://scholarships.gov.in/"
        },
        {
            "slug": "reliance-foundation-ug",
            "title": "Reliance Foundation Undergraduate Scholarship",
            "provider": "Reliance Foundation CSR Initiative",
            "amount": "Up to ₹2,00,000 Grant",
            "deadline": "Nov 15, 2025",
            "description": "Supporting meritorious students to pursue undergraduate college education in any stream.",
            "is_demo": 1,
            "category": "corporate",
            "field_of_study": "general",
            "domicile": "all-india",
            "quota": "general",
            "provider_code": "RF",
            "match_percentage": 100,
            "requirements": json.dumps([
                "First-year full-time undergraduate students in any stream",
                "Minimum 60% aggregate in Class XII exams",
                "Household income < ₹15 Lakhs (preference < ₹2.5L)"
            ]),
            "apply_url": "https://scholarships.reliancefoundation.org/"
        },
        {
            "slug": "ongc-foundation",
            "title": "ONGC Foundation Meritorious Scholarship",
            "provider": "Oil and Natural Gas Corporation Ltd.",
            "amount": "₹48,000 / year",
            "deadline": "Closing Nov 30",
            "description": "Scholarships to meritorious SC/ST/OBC and General EWS students pursuing professional courses.",
            "is_demo": 1,
            "category": "corporate",
            "field_of_study": "engineering",
            "domicile": "all-india",
            "quota": "ews",
            "provider_code": "ONGC",
            "match_percentage": 85,
            "requirements": json.dumps([
                "Engineering, MBBS, MBA, or Master in Geophysics/Geology",
                "SC/ST/OBC/General EWS category candidates",
                "Gross family annual income under ₹2 Lakhs per annum"
            ]),
            "apply_url": "https://ongcscholar.org/"
        },
        {
            "slug": "aicte-pragati",
            "title": "Pragati Scholarship for Girls (Technical Degree)",
            "provider": "All India Council for Technical Education",
            "amount": "₹50,000 / year",
            "deadline": "Dec 31, 2025",
            "description": "Empowering young women through technical education by providing financial assistance.",
            "is_demo": 1,
            "category": "central",
            "field_of_study": "engineering",
            "domicile": "all-india",
            "quota": "single_girl_child",
            "provider_code": "AICTE",
            "match_percentage": 92,
            "requirements": json.dumps([
                "Admitted to AICTE approved Degree or Diploma institution",
                "Max 2 girl children per family eligible",
                "Family income not exceeding ₹8 Lakh per annum"
            ]),
            "apply_url": "https://scholarships.gov.in/"
        },
        {
            "slug": "loreal-india-women-in-science",
            "title": "L'Oréal India For Young Women In Science",
            "provider": "L'Oréal India",
            "amount": "₹2,50,000 total",
            "deadline": "Oct 15, 2025",
            "description": "Scholarship for young women to pursue higher education in science.",
            "is_demo": 1,
            "category": "corporate",
            "field_of_study": "engineering",
            "domicile": "all-india",
            "quota": "female",
            "provider_code": "LOREAL",
            "match_percentage": 0,
            "requirements": json.dumps([
                "Female applicants only",
                "Passed Class 12 in Science stream with minimum 85% marks",
                "Annual family income less than ₹6,00,000"
            ]),
            "apply_url": "https://www.loreal.com/en/india/"
        }
    ]
    
    for s_data in scholarships_data:
        existing = db.query(models.Scholarship).filter(models.Scholarship.slug == s_data["slug"]).first()
        if not existing:
            scholarship = models.Scholarship(**s_data)
            db.add(scholarship)
    
    db.commit()
    print("Seed operations completed.")

if __name__ == "__main__":
    db = SessionLocal()
    try:
        seed_scholarships(db)
    finally:
        db.close()
