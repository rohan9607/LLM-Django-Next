1) Authbackend (Nest JS for Authentication APIs)
- Make sure you have a MySQL installed (try Wampserver for phpmyadmin) -> Create database named llm_users_db
- you can edit .env file as per your DB credentials
- goto authBackend -> npm install -> npm run start:dev
2) Backend (Django for APIs of LLM)
- goto backend/backend -> pip install -r requirements.txt -> python manage.py runserver
3) Frontend (Next JS 13)
  - goto frontend -> npm install -> npm run dev
 
## Note
For AuthBackend and frontend node 20 is must be installed 
For backend which is Django project only python 3.11.X should be there (if version missmatch then there would errors of dependancies)
