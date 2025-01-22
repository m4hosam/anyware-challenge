import { Announcement, Quiz } from "../types/types";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const response = await fetch(`${API_BASE_URL}/announcements`);
  if (!response.ok) {
    throw new Error("Failed to fetch announcements");
  }
  return response.json();
};

export const fetchQuizzes = async (): Promise<Quiz[]> => {
  const response = await fetch(`${API_BASE_URL}/quizzes`);
  if (!response.ok) {
    throw new Error("Failed to fetch quizzes");
  }
  return response.json();
};
