Masetto-0da1f2
This project is a web application for note management, implemented with a full stack architecture using React on the frontend and Node.js/Express with Sequelize and PostgreSQL on the backend.

Description
The application allows users to register, log in, create, edit, categorize, and delete notes. Notes are associated with predefined categories and can be filtered by these categories. User authentication is managed using JWT (JSON Web Tokens), ensuring that only registered users can access and modify their notes. The backend handles data persistence using Sequelize as an ORM to interact with a PostgreSQL database.

Tecnologías Utilizadas
Backend
Node.js
Express
Sequelize
PostgreSQL
JWT (JSON Web Tokens)  for authentication
bcrypt.js for password hashing

Frontend
React
React Router DOM
Axios for HTTP requests
Vite as the build tool and development server

Installation
Clone the repository:
git clone https://github.com/ensolvers-github-challenges/Masetto-0da1f2.git


Create a .env file in the backend directory based on the .env.example file, with your database configuration and other necessary secrets.

To start the development environment:
./start-env.sh
This script will use tmux to launch both servers (backend and frontend) in separate windows.

Usage
After following the installation steps:

The frontend will be available at http://localhost:5173/.
The backend will be running at http://localhost:3100/.
You can interact with the API through the routes defined in the routes folder of the backend.

Available Scripts
Backend
npm run start: Starts the backend server with nodemon.
npm run migrate: Runs the database migrations.
npm run down: Reverts the last executed migration.
npm run seed: Populates the database with initial seed data.
Frontend
npm run dev: Starts the Vite development server.
npm run build: Builds the application for production.
npm run preview: Previews the built application for production.
