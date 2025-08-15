React To-Do List Application
A simple and interactive to-do list application built with React and Tailwind CSS as part of my web development assignment. This project demonstrates core React concepts including components, state management, and event handling.

🎯 What This Project Does
This is a fully functional to-do list where users can:

✅ Add new tasks

✅ Mark tasks as complete/incomplete

✅ Edit existing tasks

✅ Delete tasks

✅ Filter tasks (All, Active, Completed)

✅ View task statistics

🛠️ Technologies Used
React 18 - Frontend framework with hooks

Vite - Fast development build tool

Tailwind CSS - Utility-first styling

JavaScript (ES6+) - Modern JavaScript features

📦 Installation & Setup
Prerequisites
Make sure you have Node.js installed on your computer.

Steps to Run
Clone or download this repository

Open terminal in the project folder

Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser and go to: http://localhost:5173

That's it! The application should now be running.

📁 Project Structure
text
src/
├── App.jsx           # Main app component
├── main.jsx          # Entry point
├── index.css         # Tailwind styles
└── components/
    ├── Header.jsx    # Add new todo form
    ├── TodoList.jsx  # Todo list container
    └── TodoItem.jsx  # Individual todo item
✨ Key Features Implemented
Component Architecture: 4 separate React components

State Management: Using React useState hook

Props: Data passing between components

Event Handling: Add, edit, delete, and toggle functionality

Dynamic Lists: Using map() function with proper keys

Responsive Design: Works on mobile and desktop
