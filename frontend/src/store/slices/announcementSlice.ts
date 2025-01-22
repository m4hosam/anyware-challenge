import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Announcement } from "../../types/types";
import { fetchAnnouncements } from "../../services/api";

interface AnnouncementState {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

const initialState: AnnouncementState = {
  announcements: [],
  loading: false,
  error: null,
};

export const getAnnouncements = createAsyncThunk(
  "announcements/getAnnouncements",
  async () => {
    return await fetchAnnouncements();
  }
);

const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(getAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch announcements";
      });
  },
});

export default announcementSlice.reducer;
