
# PERN ToDo App

This project implements a simple ToDo application using the PERN stack: PostgreSQL, Express.js, React, and Node.js. This app allows you to manage your tasks, mark them as complete,search and remove them from your list.

## Features
```
    **CRUD Operations Implementation:**
    1. **Create To-Do:** Users should be able to generate new To-Dos.
    2. **Edit To-Do:** Provide the functionality to modify existing To-Dos.
    3. **Remove To-Do:** Users should be able to delete or remove a To-Do from the list.
    4. **Search Specific To-Do:** Incorporate a feature to search for a specific To-Do within the list.
```
## Technologies

- Front-End: React.js
- Back-End: Express.js, Node.js
- Database: PostgreSQL

## Live Link 
``` https://todo-app-brown-seven.vercel.app/
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/meghdewangan/Todo-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd PERN-ToDo-App
   ```

3. Install dependencies for both the server and client:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Set up your PostgreSQL database and update the database connection details in `server/db.js`.

5. Run the server and client concurrently:

   ```bash
   npm run dev
   ```

6. The app will be accessible at `http://localhost:3000`.

## Usage

- Create tasks/ todos.
- Get all details of todos and search according to you.
- Delete and Update todos.