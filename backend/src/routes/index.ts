import { Router } from "express";
import {
  getAnnouncements,
  addAnnouncement,
  getAnnouncementById,
  updateAnnouncementPatch,
  updateAnnouncementPut,
  deleteAnnouncement,
} from "../controllers/announcementsController";
import {
  getQuizzes,
  addQuiz,
  getQuizById,
  updateQuizPut,
  updateQuizPatch,
  deleteQuiz,
} from "../controllers/quizzesController";

const router = Router();

// Announcement routes
router.get("/announcements", getAnnouncements);
router.get("/announcements/:id", getAnnouncementById);
router.post("/announcements", addAnnouncement);
router.patch("/announcements/:id", updateAnnouncementPatch);
router.put("/announcements/:id", updateAnnouncementPut);
router.delete("/announcements/:id", deleteAnnouncement);

// Quiz routes
router.get("/quizzes", getQuizzes);
router.get("/quizzes/:id", getQuizById);
router.post("/quizzes", addQuiz);
router.put("/quizzes/:id", updateQuizPut);
router.patch("/quizzes/:id", updateQuizPatch);
router.delete("/quizzes/:id", deleteQuiz);

export default router;
