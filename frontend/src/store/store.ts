import { configureStore } from "@reduxjs/toolkit";
import announcementReducer from "./slices/announcementSlice";
import quizReducer from "./slices/quizSlice";

import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    announcements: announcementReducer,
    quizzes: quizReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
