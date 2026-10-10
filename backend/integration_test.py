import os
from fastapi.testclient import TestClient
from main import app

# Verify env loading without exposing the key
key_loaded = bool(os.environ.get("GEMINI_API_KEY"))
print(f"GEMINI_API_KEY loaded: {key_loaded}")

if not key_loaded:
    print("API Key is missing. Exiting.")
    exit(1)

model = os.environ.get("GEMINI_MODEL")
print(f"Configured Model: {model}")

client = TestClient(app)

print("\n--- Running Integration Test ---")

# Create a test user and login
email = "live_test@example.com"
pwd = "password123"

# Register (ignore if already exists)
res_reg = client.post("/api/v1/auth/register", json={"name": "Live Test", "email": email, "password": pwd})
print("Register status:", res_reg.status_code)

res_login = client.post("/api/v1/auth/login", json={"email": email, "password": pwd})
print("Login status:", res_login.status_code)
if res_login.status_code != 200:
    print("Login failed")
    exit(1)

token = res_login.cookies.get("access_token")

# Add a basic profile for the user
client.cookies.set("access_token", token)
res_profile = client.put("/api/v1/profile", json={"degree_course": "B.Tech", "academic_marks_percentage": 85})
print("Profile setup status:", res_profile.status_code)

print("\nSending chat request to LLM...")
res_chat = client.post("/api/v1/agent/chat", json={"message": "Can you search for engineering scholarships?"})

print(f"Chat Response Status: {res_chat.status_code}")
if res_chat.status_code == 200:
    data = res_chat.json()
    import json
    with open('output.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("Output saved to output.json")
else:
    print("Error:", res_chat.text)
