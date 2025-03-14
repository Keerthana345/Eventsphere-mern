# EventSphere

## Overview
EventSphere is a full-stack event management application built using the MERN stack. It allows users to discover, organize, and manage events efficiently. Event managers can create and manage events, while users can register for events seamlessly.

## Features
- User authentication (Registration & Login)
- Event creation, editing, and deletion
- Event listing and detailed view
- User event registration
- Dashboard for event managers
- Responsive UI for a seamless experience across devices

## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Hosting:** Render (Frontend & Backend)

## Deployment
🔗 **Live Application:** [EventSphere](https://eventsphere-frontend.onrender.com/)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Keerthana345/Eventsphere-mern.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Eventsphere-mern
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
4. Set up environment variables for the backend (MongoDB URI, JWT Secret, etc.).
5. Run the development server:
   ```sh
   cd backend
   nodemon server.js
   ```
6. Start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```

## Usage
- Register/Login as an Event Manager or User.
- Browse available events.
- Register for an event as a user.
- Create and manage events as an event manager.
- Access event details and manage participation.
