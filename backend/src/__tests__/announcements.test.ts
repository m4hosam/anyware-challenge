import { Request, Response } from "express";
import mongoose from "mongoose";
import Announcement from "../models/Announcement";
import Quiz from "../models/Quiz";
import * as announcementsController from "../controllers/announcementsController";
import * as quizzesController from "../controllers/quizzesController";

const VALID_MONGODB_ID = "679402786deb60e838517b8f";

// Mock Mongoose models
jest.mock("../models/Announcement");
jest.mock("../models/Quiz");

describe("Announcements Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  // GET All Announcements
  describe("getAnnouncements", () => {
    test("successfully retrieves all announcements", async () => {
      const mockAnnouncements = [
        {
          _id: "id1",
          user: { name: "John" },
          content: "Test 1",
          course: "Math",
        },
      ];

      (Announcement.find as jest.Mock).mockResolvedValue(mockAnnouncements);

      await announcementsController.getAnnouncements(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.json).toHaveBeenCalledWith(mockAnnouncements);
    });

    test("handles error when fetching announcements fails", async () => {
      (Announcement.find as jest.Mock).mockRejectedValue(
        new Error("Database error")
      );

      await announcementsController.getAnnouncements(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: "Error fetching announcements" })
      );
    });
  });

  // GET Announcement by ID
  describe("getAnnouncementById", () => {
    test("successfully retrieves announcement by valid ID", async () => {
      const mockAnnouncement = {
        _id: VALID_MONGODB_ID,
        user: { name: "John" },
        content: "Test",
      };
      mockRequest.params = { id: VALID_MONGODB_ID };

      (Announcement.findById as jest.Mock).mockResolvedValue(mockAnnouncement);

      await announcementsController.getAnnouncementById(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.json).toHaveBeenCalledWith(mockAnnouncement);
    });

    test("returns 400 for invalid ID format", async () => {
      mockRequest.params = { id: "invalidId" };

      await announcementsController.getAnnouncementById(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: "Invalid announcement ID format" })
      );
    });

    test("returns 404 when announcement not found", async () => {
      mockRequest.params = { id: "123456789012345678901234" };

      (Announcement.findById as jest.Mock).mockResolvedValue(null);

      await announcementsController.getAnnouncementById(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: "Announcement not found" })
      );
    });
  });

  // Add Announcement
  describe("addAnnouncement", () => {
    test("returns 400 when required fields are missing", async () => {
      mockRequest.body = {};

      await announcementsController.addAnnouncement(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "All required fields must be provided (user.name, content)",
        })
      );
    });

    test("validates date format", async () => {
      mockRequest.body = {
        user: { name: "John" },
        content: "Test",
        course: "Math",
        date: "invalid-date",
      };

      await announcementsController.addAnnouncement(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: "Invalid date format" })
      );
    });
  });

  // Update Announcement (PUT)
  describe("updateAnnouncementPut", () => {
    test("successfully updates entire announcement", async () => {
      mockRequest.params = { id: VALID_MONGODB_ID };
      mockRequest.body = {
        user: { name: "Updated John" },
        content: "Updated Content",
        date: "2023-12-31",
      };

      (Announcement.findById as jest.Mock).mockResolvedValue({});
      (Announcement.findByIdAndUpdate as jest.Mock).mockResolvedValue(
        mockRequest.body
      );

      await announcementsController.updateAnnouncementPut(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          user: { name: "Updated John" },
          content: "Updated Content",
        })
      );
    });
  });

  // Delete Announcement
  describe("deleteAnnouncement", () => {
    test("successfully deletes announcement", async () => {
      mockRequest.params = { id: VALID_MONGODB_ID };

      (Announcement.findById as jest.Mock).mockResolvedValue({});
      (Announcement.findByIdAndDelete as jest.Mock).mockResolvedValue({});

      await announcementsController.deleteAnnouncement(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "Announcement deleted successfully",
        })
      );
    });

    test("returns 404 for non-existent announcement", async () => {
      mockRequest.params = { id: "invalidId" };

      (Announcement.findById as jest.Mock).mockResolvedValue(null);

      await announcementsController.deleteAnnouncement(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(404);
    });
  });
});

// Similar comprehensive test suite for Quizzes Controller
describe("Quizzes Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  // Specific Quiz-related tests
  describe("addQuiz", () => {
    test("returns 400 for missing required fields", async () => {
      mockRequest.body = {};

      await quizzesController.addQuiz(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: expect.stringContaining("All fields are required"),
        })
      );
    });

    test("validates due date format", async () => {
      mockRequest.body = {
        title: "Math Quiz",
        course: "Algebra",
        topic: "Equations",
        dueDate: "invalid-date",
        link: "http://quiz.com",
      };

      await quizzesController.addQuiz(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({ message: "Invalid date format" })
      );
    });
  });
});
