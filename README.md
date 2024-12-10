# LSPT-Team-U Search Engine Project
## UI/UX
This repository contains the frontend and backend components of the LSPT-Team-U Search Engine. Follow the instructions below to set up the project locally for development and testing.

###Project Structure
├── backend/               # Backend codebase
│   ├── api/               # API endpoints
│   ├── routes/            # API routes
│   ├── server.js          # Main backend server
│   ├── .env               # Environment variables file
│   ├── package.json       # Backend dependencies
│   ├── package-lock.json  # Backend dependency lock file
├── frontend/              # Frontend codebase
│   ├── src/               # React source code
│   ├── public/            # Public assets
│   ├── package.json       # Frontend dependencies
│   ├── package-lock.json  # Frontend dependency lock file
│   ├── tailwind.config.js # Tailwind CSS configuration

###Prerequisites
Node.js and npm:

  - Install Node.js (LTS version recommended).
  - npm is included with Node.js.
Git:

  - Ensure Git is installed on your system.

Clone the Repository:

Clone this repository using:
```shell
# Clone the repository to your local machine
git clone https://github.com/<your-repo-url>
```

Installation
Backend Setup
Navigate to the backend folder:
bash
Copy code
cd backend
Install backend dependencies:
bash
Copy code
npm install
Create a .env file in the backend/ directory and set up environment variables. For example:
plaintext
Copy code
PORT=5000
EVAL_API_URL=http://localhost:8080
Frontend Setup
Navigate to the frontend folder:
bash
Copy code
cd frontend
Install frontend dependencies:
bash
Copy code
npm install
Running the Project
Start the Backend
Navigate to the backend directory:
bash
Copy code
cd backend
Start the backend server:
bash
Copy code
npm start
The backend will run on http://localhost:5000 (or the port specified in .env).
Start the Frontend
Navigate to the frontend directory:
bash
Copy code
cd frontend
Start the frontend development server:
bash
Copy code
npm start
The frontend will run on http://localhost:3000.
Using Tailwind CSS
To Build Tailwind CSS Styles:
Make sure tailwind.config.js is correctly set up in the frontend folder.
You can run the Tailwind build process during development by running:
bash
Copy code
npm run watch
Tailwind will watch your CSS files and generate styles as you work.
Folder Structure
Frontend:

src/pages/: Contains React components for specific pages (e.g., General.js, Home.js, Results.js).
src/components/: Contains reusable UI components (e.g., SearchBar.js, ResultsList.js).
src/utils/api.js: Contains helper functions to call the backend API.
Backend:

api/: Contains individual API handlers (e.g., autocomplete.js, search.js).
routes/: Contains route definitions.
server.js: The main backend entry point.
Troubleshooting
Issue: Blank page when opening http://localhost:3000.

Fix: Check for React component errors in the browser console.
Ensure npm start is running for both frontend and backend.
Issue: Module not found errors.

Fix: Ensure node_modules are installed by running npm install in both frontend and backend.
Issue: Backend or API not responding.

Fix: Ensure your .env file has the correct settings (e.g., EVAL_API_URL).
Contributing
Create a feature branch:
bash
Copy code
git checkout -b feature-name
Commit changes:
bash
Copy code
git commit -m "Add feature description"
Push the branch and create a pull request.
License

This project is licensed under the MIT License.
