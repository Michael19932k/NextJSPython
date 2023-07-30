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
   - http://localhost:3000/pageIndex  //couldn't make the home page at "/index" as index name is reserved by the system.
   - http://localhost:3000/postsList
   - http://localhost:3000/postsList/1  //custom route omitted in favor of static pages build, id directly comes after slash.
   
6. Static export build:
    npm run build
   - generates static pages for each of the existing routes in build instead of on-demand at request time.
   - my-app/app/out  //direction of the build.
