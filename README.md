# Anyware Learning Management System

## Overview

A full-stack Learning Management System (LMS) with a React frontend, Express.js backend, and MongoDB database. The application provides features for managing educational content, announcements, and quizzes.

## Features

- 🔐 Authentication system with protected routes
- 📱 Responsive design
- 📢 Announcements dashboard
- 📝 Quiz management system
- 🚀 TypeScript throughout the stack
- 🔄 State management
- 🐳 Docker support for easy deployment

## Demo

You can access the demo for the project from:

- frontend: https://anyware-test.vercel.app/
- backend: https://anyware-challenge-2.onrender.com/api/announcements
- Video Demo: https://www.youtube.com/watch?v=m_jo6sbhfEQ

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB
- Docker (optional)

## Project Structure

```
anyware-challenge/
├── frontend/     # React TypeScript frontend
├── backend/      # Express.js TypeScript backend
└── docker-compose.yml
```

## Local Development Setup

### Backend Service

#### Prerequisites

- Node.js (18 or later)
- MongoDB

#### Installation Steps

1. Navigate to backend directory
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file and make sure you have MongoDB running on your OS:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/anyware
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

#### Backend API Endpoints

**Announcements**:

- `GET /api/announcements` - Fetch all announcements
- `GET /api/announcements/:id` - Fetch specific announcement
- `POST /api/announcements` - Create announcement
- `PUT /api/announcements/:id` - Update announcement
- `DELETE /api/announcements/:id` - Delete announcement

**Quizzes**:

- `GET /api/quizzes` - Fetch all quizzes
- `GET /api/quizzes/:id` - Fetch specific quiz
- `POST /api/quizzes` - Create quiz
- `PUT /api/quizzes/:id` - Update quiz
- `DELETE /api/quizzes/:id` - Delete quiz

#### Backend Testing

- Run unit tests with Jest:
  ```bash
  npm run test
  ```

### Frontend Application

#### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

#### Installation Steps

1. Navigate to frontend directory
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file, The API Port should match the one in the backend:

   ```env
   VITE_API_URL=http://localhost:5050/api
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

#### Frontend Testing

Before running the cypress test, make sure that your frontend server is running.

- Run E2E tests with Cypress:

  ```bash
  npx cypress open
  ```

- Select e2e test, then the app test file

### Run it with Docker

#### Prerequisites

- Docker
- Docker Compose

#### Deployment Steps

1. Ensure Docker and Docker Compose are installed
2. Make sure port 7070 and 5050 are not used from other apps.
3. In project root directory, run:

   ```bash
   docker-compose up --build
   ```

4. Access the application:
   - Frontend: `http://localhost:7070`
   - Backend API: `http://localhost:5050`

#### Docker Compose Configuration

The `docker-compose.yml` orchestrates:

- Backend service
- MongoDB database
- Frontend service

### Technologies

**Frontend**:

- React 18
- TypeScript
- Material-UI
- Redux Toolkit
- Vite

**Backend**:

- Express.js
- TypeScript
- MongoDB
- Mongoose

**Testing**:

- Jest (Backend)
- Cypress (Frontend)
