import { Request, Response } from "express";
import Quiz from "../models/Quiz";

// Fetch all quizzes
export async function getQuizzes(req: Request, res: Response) {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quizzes" });
  }
}

// Add a new quiz
export async function addQuiz(req: Request, res: Response): Promise<void> {
  try {
    const { title, course, topic, dueDate } = req.body;

    // Validate input
    if (!title || !course || !topic || !dueDate) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const newQuiz = new Quiz({
      title: title,
      course: course,
      topic: topic,
      dueDate: dueDate,
    });

    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: "Failed to add quiz", error });
  }
}
