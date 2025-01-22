import { Request, Response } from "express";
import Announcement from "../models/Announcement";

// Helper function to check if announcement exists
async function checkAnnouncementExists(id: string): Promise<boolean> {
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return false;
  }
  const announcement = await Announcement.findById(id);
  return !!announcement;
}

// Fetch all announcements
export async function getAnnouncements(req: Request, res: Response) {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: "Error fetching announcements", error });
  }
}

// Get announcement by ID
export async function getAnnouncementById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ message: "Invalid announcement ID format" });
      return;
    }

    const announcement = await Announcement.findById(id);

    if (!announcement) {
      res.status(404).json({ message: "Announcement not found" });
      return;
    }

    res.json(announcement);
  } catch (error) {
    res.status(500).json({ message: "Error fetching announcement", error });
  }
}

// Add a new announcement
export async function addAnnouncement(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { user, content, date } = req.body;

    if (!user?.name || !content) {
      res.status(400).json({
        message: "All required fields must be provided (user.name, content)",
      });
      return;
    }

    // If date is provided, validate the format (YYYY-MM-DD)
    if (date) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(date)) {
        res.status(400).json({
          message: "Invalid date format",
          example: "Please use YYYY-MM-DD format (e.g., 2023-12-31)",
        });
        return;
      }
    }

    const newAnnouncement = new Announcement({
      user,
      content,
      date: date || new Date(),
    });

    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ message: "Failed to add announcement", error });
  }
}

// Delete announcement by ID
export async function deleteAnnouncement(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!(await checkAnnouncementExists(id))) {
      res.status(404).json({ message: "Announcement not found" });
      return;
    }

    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

    if (!deletedAnnouncement) {
      res.status(404).json({ message: "Announcement not found" });
      return;
    }

    res.json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete announcement", error });
  }
}

// Update announcement by ID (PUT request - full update)
export async function updateAnnouncementPut(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { user, content, date } = req.body;

    if (!(await checkAnnouncementExists(id))) {
      res.status(404).json({ message: "Announcement not found" });
      return;
    }

    if (!user?.name || !content) {
      res.status(400).json({
        message: "All fields are required for PUT request (user.name, content)",
      });
      return;
    }

    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      id,
      { user, content, date: date || new Date() },
      { new: true, runValidators: true }
    );

    res.json(updatedAnnouncement);
  } catch (error) {
    res.status(500).json({ message: "Failed to update announcement", error });
  }
}

// Update announcement by ID (PATCH request - partial update)
export async function updateAnnouncementPatch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!(await checkAnnouncementExists(id))) {
      res.status(404).json({ message: "Announcement not found" });
      return;
    }

    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    res.json(updatedAnnouncement);
  } catch (error) {
    res.status(500).json({ message: "Failed to update announcement", error });
  }
}
