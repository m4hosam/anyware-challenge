import { Request, Response } from "express";
import Quiz from "../models/Quiz";

// Helper function to check if quiz exists
async function checkQuizExists(id: string): Promise<boolean> {
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return false;
  }
  const quiz = await Quiz.findById(id);
  return !!quiz;
}

// Fetch all quizzes
export async function getQuizzes(req: Request, res: Response) {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quizzes", error });
  }
}

// Get quiz by ID
export async function getQuizById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ message: "Invalid quiz ID format" });
      return;
    }

    const quiz = await Quiz.findById(id);

    if (!quiz) {
      res.status(404).json({ message: "Quiz not found" });
      return;
    }

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz", error });
  }
}

// Add a new quiz
export async function addQuiz(req: Request, res: Response): Promise<void> {
  try {
    const { title, course, topic, dueDate, link } = req.body;

    if (!title || !course || !topic || !dueDate || !link) {
      res.status(400).json({
        message:
          "All fields are required (title, course, topic, dueDate, link)",
      });
      return;
    }

    // Check if dueDate is a valid date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dueDate)) {
      res.status(400).json({
        message: "Invalid date format",
        example: "Please use YYYY-MM-DD format (e.g., 2023-12-31)",
      });
      return;
    }

    const newQuiz = new Quiz({
      title,
      course,
      topic,
      dueDate,
      link,
    });

    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: "Failed to add quiz", error });
  }
}

// Delete quiz by ID
export async function deleteQuiz(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!(await checkQuizExists(id))) {
      res.status(404).json({ message: "Quiz not found" });
      return;
    }

    const deletedQuiz = await Quiz.findByIdAndDelete(id);

    if (!deletedQuiz) {
      res.status(404).json({ message: "Quiz not found" });
      return;
    }

    res.json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete quiz", error });
  }
}

// Update quiz by ID (PUT request - full update)
export async function updateQuizPut(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, course, topic, dueDate, link } = req.body;

    if (!(await checkQuizExists(id))) {
      res.status(404).json({ message: "Quiz not found" });
      return;
    }

    if (!title || !course || !topic || !dueDate || !link) {
      res.status(400).json({
        message:
          "All fields are required for PUT request (title, course, topic, dueDate, link)",
      });
      return;
    }

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      id,
      { title, course, topic, dueDate, link },
      { new: true, runValidators: true }
    );

    res.json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ message: "Failed to update quiz", error });
  }
}

// Update quiz by ID (PATCH request - partial update)
export async function updateQuizPatch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!(await checkQuizExists(id))) {
      res.status(404).json({ message: "Quiz not found" });
      return;
    }

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    res.json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ message: "Failed to update quiz", error });
  }
}
