import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Announcement } from "../../types/types";

interface AnnouncementState {
  announcements: Announcement[];
}

const initialState: AnnouncementState = {
  announcements: [
    {
      id: 1,
      title: "New Course Available",
      content: "Introduction to TypeScript course is now available",
      date: "2025-01-20",
    },
    {
      id: 2,
      title: "System Maintenance",
      content: "Scheduled maintenance this weekend",
      date: "2025-01-21",
    },
    {
      id: 3,
      title: "Holiday Schedule",
      content: "Office will be closed for upcoming holidays",
      date: "2025-01-22",
    },
  ],
};

const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    addAnnouncement: (state, action: PayloadAction<Announcement>) => {
      state.announcements.push(action.payload);
    },
  },
});

export const { addAnnouncement } = announcementSlice.actions;
export default announcementSlice.reducer;
