import sqlite3
import os

db_path = "eduguide.db"
if not os.path.exists(db_path):
    print("DB not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

try:
    cursor.execute("ALTER TABLE scholarships ADD COLUMN verification_status VARCHAR DEFAULT 'unverified'")
    cursor.execute("ALTER TABLE scholarships ADD COLUMN source_url VARCHAR")
    cursor.execute("ALTER TABLE scholarships ADD COLUMN last_verified_at DATETIME")
    cursor.execute("ALTER TABLE scholarships ADD COLUMN structured_criteria VARCHAR")
    print("Migration successful")
except Exception as e:
    print(f"Migration error (might already exist): {e}")

conn.commit()
conn.close()
