import { Request, Response } from "express";
import mongoose from "mongoose";
import Announcement from "../models/Announcement";
import * as announcementsController from "../controllers/announcementsController";

jest.mock("../models/Announcement");

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

  test("getAnnouncements returns all announcements", async () => {
    const mockAnnouncements = [{ _id: "id1", content: "Test Announcement" }];

    (Announcement.find as jest.Mock).mockResolvedValue(mockAnnouncements);

    await announcementsController.getAnnouncements(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(mockResponse.json).toHaveBeenCalledWith(mockAnnouncements);
  });

  // More test cases for other methods...
});
