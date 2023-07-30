# NextJSPython

## Prerequisites

- Node.js
- Python

## Setup Instructions

1. Clone the repository.

2. Install frontend dependencies:
   cd my-app
   npm install

2. Install backend dependencies:
   cd api
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt

3. Start the development servers:
   Frontend (inside the frontend directory):
   npm run dev
   Backend (inside the backend directory):
   uvicorn index:app --reload

4. Access the app:
   Frontend: http://localhost:3000
   Backend API: http://localhost:8000

5. Usage:
   Make sure the server is running in order to get the data.
   Working directories:
   - http://localhost:3000/pageIndex // couldn't make the home page at "/index" as index name is reserved by the system.
   - http://localhost:3000/postsList
   - http://localhost:3000/postsList/post?id=1 // id is simmilar to what is contained in the dataset, uses dynamic server functions which are not supported with a static export.
   
Need to implement changes to make the project able to generate a static website.
