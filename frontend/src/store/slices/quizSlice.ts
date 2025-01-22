import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Quiz } from "../../types/types";
import { fetchQuizzes } from "../../services/api";

interface QuizState {
  quizzes: Quiz[];
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  quizzes: [],
  loading: false,
  error: null,
};

export const getQuizzes = createAsyncThunk("quizzes/getQuizzes", async () => {
  return await fetchQuizzes();
});

const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload;
      })
      .addCase(getQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch quizzes";
      });
  },
});

export default quizSlice.reducer;
