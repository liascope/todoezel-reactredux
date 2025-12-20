ToDoeZel – React.js

A responsive task management application built with React.js. It extends the original Vanilla JS version with new features, reusable components, global state management, and a clean, motivating design.
The app helps users organize their tasks, notes, and shopping items with features like progress tracking, date-based reminders, and persistent storage.

🚀 Key Features

- Tasks & Notes (General List)
   - Add notes/todos via the ➕ button
   - Mark items as complete (✔) to update a percentage tracker
   - Delete all completed tasks in one click (appears after 3+ done items)
     
- Date-Based Tasks (Header & Do Later Section)
   - Upcoming or due tasks appear in the header with their own progress tracker
   - Clicking the header reveals the full date-specific task list
   - Save future tasks in Do Later section → stored in localStorage
   - View past 3 completed tasks + all future ones via Show Saved Tasks

- Shopping List
   - Simple, clean list for shopping items
   - Mark items as checked when done

- Motivational Design
   - Dynamic progress trackers that change colors as completion percentage changes
   - Minimal, friendly, and motivating UI with custom SVG icons

- Fully responsive layout for desktop and mobile
- Modal Window, provides additional information in a focused view

🧩 Tech Stack & Libraries

- React.js – main framework for building UI
- React Router (imperative way) – handles routing and navigation between pages
- Redux Toolkit – global state management for date-based tasks
-  React Hooks – local state handling for Todos and Shop items
- Custom Hook – reusable localStorage persistence logic
- Reusable Components – modular and maintainable design
- Vite – fast build tool and development server
- Tailwind CSS – utility-first styling for responsive design
- SVG – custom icons handcrafted for the UI

🧠 What I’ve Learned & Demonstrated

- Refactored and expanded my Vanilla JS project into a modern React.js app
- Implemented global and local state handling (Redux Toolkit + Hooks)
- Built a reusable custom hook for persistent localStorage logic
- Developed reusable components for better maintainability and scalability
- Designed a responsive, minimal, and motivating UI with Tailwind CSS
- Coded custom SVG icons and integrated dynamic progress trackers with color changes
- Practiced React Router conventions (routing, layout, navigation)

🔧 Running the Project

Clone the repo: git clone https://github.com/liascope/todoezel-react.git

Install dependencies: npm install

Run locally: npm run dev

Open http://localhost:5173 in your browser.

📂 Project Structure
/src
├─ /app
│  ├─ store.js       → Redux Toolkit store
│  ├─ router.js      → React Router configuration
│
├─ /components
│  ├─ /layout        → AppLayout, Header, HeaderToday, Navigation, ModalContent, ErrorBoundary
│  ├─ /pages         → DoLater.jsx, SavedTasks.jsx, TodaysTasks.jsx, TodoAndShop/TodoShop.jsx
│  ├─ /ui            → Button, ButtonQuery, ToggleList, Confirm, Spinner, Percent, NotFound, NavIcons
│
├─ /lib
│  ├─ config.js      → App configuration
│  └─ useStorage.js  → Custom hook for localStorage persistence

📜 License

Developed by Zeliha A. (liascope). This project is open for personal use. Redistribution or modification requires explicit permission.

✨ ToDoeZel – React.js demonstrates the step from fundamental Vanilla JS skills to a scalable, modern React application with reusable components, state management via Redux Toolkit, React Router navigation, and a polished UI.
