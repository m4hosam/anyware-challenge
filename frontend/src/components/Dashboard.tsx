// Dashboard.tsx
import { useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Paper,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { getAnnouncements } from "../store/slices/announcementSlice";
import { getQuizzes } from "../store/slices/quizSlice";
import AnnouncementCard from "./Announcements/AnnouncementCard";
import QuizCard from "./Quizzes/QuizCard";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation(["common", "home"]);
  const dispatch = useDispatch<AppDispatch>();

  const {
    announcements,
    loading: announcementsLoading,
    error: announcementsError,
  } = useSelector((state: RootState) => state.announcements);

  const {
    quizzes,
    loading: quizzesLoading,
    error: quizzesError,
  } = useSelector((state: RootState) => state.quizzes);

  useEffect(() => {
    dispatch(getAnnouncements());
    dispatch(getQuizzes());
  }, [dispatch]);

  const renderAnnouncementsSection = () => {
    if (announcementsLoading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
          <CircularProgress size={24} />
        </Box>
      );
    }

    if (announcementsError) {
      return <Alert severity="error">{announcementsError}</Alert>;
    }

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement._id}
            announcement={announcement}
          />
        ))}
      </Box>
    );
  };

  const renderQuizzesSection = () => {
    if (quizzesLoading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
          <CircularProgress size={24} />
        </Box>
      );
    }

    if (quizzesError) {
      return <Alert severity="error">{quizzesError}</Alert>;
    }

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {quizzes.map((quiz) => (
          <QuizCard key={quiz._id} quiz={quiz} />
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1440, mx: "auto" }}>
      <Grid container spacing={3}>
        {/* Announcements Section - 2/3 width */}
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                color: "text.secondary",
                mb: 2,
              }}
            >
              {t("announcements")}
            </Typography>
            {renderAnnouncementsSection()}
          </Box>
        </Grid>

        {/* Quizzes Section - 1/3 width */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                color: "text.secondary",
                mb: 2,
              }}
            >
              {t("upcoming quizzes")}
            </Typography>
            {renderQuizzesSection()}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
