# Learning Management System Frontend

A modern learning management system built with React, TypeScript, and Material-UI. This application provides features for managing educational content, announcements, and quizzes.

## Features

- 🔐 Authentication system with protected routes
- 📱 Responsive design with Material-UI
- 📢 Announcements dashboard with real-time updates
- 📝 Quiz management system
- 🎯 Course-specific content organization
- 🔄 Redux state management
- 🚀 TypeScript for type safety

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker (optional, for containerization)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/m4hosam/anyware-challenge/
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the API endpoint to the backend:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

4. Start the development server:

```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

## Docker Deployment

1. Build the Docker image:

```bash
docker build -t lms-frontend .
```

2. Run the container:

```bash
docker run -p 80:80 lms-frontend
```

## Project Structure

```
src/
├── services/api  # API integration
├── components/   # React components
│   ├── Auth/     # Authentication components
│   ├── Layout/   # Layout components like Header
│   ├── Announcements/
│   └── Quizzes/
├── store/        # Redux store
│   └── slices/   # Redux slices
├── types/        # TypeScript types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Technologies Used

- React 18
- TypeScript
- Material-UI
- Redux Toolkit
- React Router v6
- Vite
- date-fns
- Axios

## API Integration

The application connects to a backend API with the following endpoints:

- `GET /api/announcements` - Fetch announcements
- `GET /api/quizzes` - Fetch quizzes

## Authentication

The application uses a simple authentication system for demonstration purposes. In a production environment, you should implement proper authentication with JWT tokens or similar.

## Component Documentation

### Protected Routes

```typescript
// Usage example
import { requireAuth } from "../Auth/requireAuth";

const ProtectedComponent = requireAuth(YourComponent);
```

### Layout Components

The application uses a responsive drawer layout from Material-UI with:

- Collapsible sidebar
- Responsive design
- Protected routes
- Authentication state management
