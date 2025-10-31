# hello-flask-react

Fullstack demo: Flask backend + React frontend, ready for Render deployment.
- Backend root: /backend
- Frontend root: /frontend

## Quick start (local)
Backend:
```
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

Frontend:
```
cd frontend
npm install
npm start
```

## Deployment
- Create two Render services: backend (root backend) and frontend (root frontend).
- Add deploy hook URLs to GitHub Secrets:
  - RENDER_BACKEND_HOOK_URL
  - RENDER_FRONTEND_HOOK_URL
"# hello-flask-react" 
