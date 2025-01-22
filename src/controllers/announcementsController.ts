import { Request, Response } from "express";
import Announcement from "../models/Announcement";

// Fetch all announcements
export async function getAnnouncements(req: Request, res: Response) {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: "Error fetching announcements" });
  }
}

// Add a new announcement
export async function addAnnouncement(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { user, date, content } = req.body;

    // Validate input
    if (!user?.name || !content) {
      res.status(400).json({ message: "User name and content are required" });
      return;
    }

    const newAnnouncement = new Announcement({
      user,
      date: date || new Date(),
      content,
    });

    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ message: "Failed to add announcement", error });
  }
}
