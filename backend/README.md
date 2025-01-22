# Backend Service for Anyware Dashboard

This is the backend service for the Anyware Dashboard, a CRUD API built using **Express.js** and **TypeScript**, with **MongoDB** as the database.

## Features

- CRUD operations for **Announcements** and **Quizzes**
- Connection to MongoDB
- Secure and efficient API endpoints
- Dockerized for easy deployment

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (18 or later)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (optional)

---

### Running Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/backend-service.git
   cd backend-service
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/anyware
   ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

5. **Access the API**
   The API runs on `http://localhost:5000`.

---

### API Endpoints

#### Announcements

- `GET /api/announcements` - Fetch all announcements
- `GET /api/announcements/:id` - Fetch a specific announcement
- `POST /api/announcements` - Create a new announcement
- `PUT /api/announcements/:id` - Update an announcement
- `DELETE /api/announcements/:id` - Delete an announcement

#### Quizzes

- `GET /api/quizzes` - Fetch all quizzes
- `GET /api/quizzes/:id` - Fetch a specific quiz
- `POST /api/quizzes` - Create a new quiz
- `PUT /api/quizzes/:id` - Update a quiz
- `DELETE /api/quizzes/:id` - Delete a quiz

---

### Running with Docker

1. **Build the Docker Image**

   ```bash
   docker build -t backend-service .
   ```

2. **Run the Docker Container**

   ```bash
   docker run -p 5000:5000 --env-file .env backend-service
   ```

3. **Access the API**
   The API runs on `http://localhost:5000`.

---

### Using Docker Compose

1. **Start the Services**

   ```bash
   docker-compose up --build
   ```

2. **Stop the Services**

   ```bash
   docker-compose down
   ```

---

### Project Structure

```
backend-service/
├── src/
│   ├── config/
│   │   └── database.ts  # Database connection
│   ├── controllers/
│   │   ├── announcementsController.ts  # CRUD for Announcements
│   │   └── quizzesController.ts  # CRUD for Quizzes
│   ├── models/
│   │   ├── Announcement.ts  # Announcement Schema
│   │   └── Quiz.ts  # Quiz Schema
│   ├── routes/
│   │   └── index.ts  # API routes
│   ├── app.ts  # Express app setup
│   └── server.ts  # Entry point
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

---

### Testing the API

You can test the endpoints using tools like **Postman**, **Insomnia**, or **curl**.
