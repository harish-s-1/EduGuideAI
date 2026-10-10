from fastapi import FastAPI, Depends, HTTPException, status, Response, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import timedelta
from contextlib import asynccontextmanager

import models
import schemas
from auth import get_password_hash, verify_password, create_access_token, get_current_user, ACCESS_TOKEN_EXPIRE_MINUTES
from database import engine, get_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create DB tables
    models.Base.metadata.create_all(bind=engine)
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
    response.set_cookie(
        key="access_token",
        value=f"Bearer {access_token}",
        httponly=True,
        secure=False, # Set to True in production with HTTPS
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

@app.get("/api/v1/users/{user_id}/profile")
def get_user_profile(user_id: int, current_user: models.User = Depends(get_current_user)):
    if current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Not authorized to access this profile")
    return {"message": "Success", "user_id": user_id}

