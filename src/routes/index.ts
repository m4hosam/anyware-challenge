import express from "express";
import {
  getAnnouncements,
  addAnnouncement,
} from "../controllers/announcementsController";
import { getQuizzes, addQuiz } from "../controllers/quizzesController";

const router = express.Router();

router.get("/announcements", getAnnouncements);
router.post("/announcements", addAnnouncement);

router.get("/quizzes", getQuizzes);
router.post("/quizzes", addQuiz);

export default router;
