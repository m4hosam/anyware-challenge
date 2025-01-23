import { useEffect } from "react";
import { Box, Typography, CircularProgress, Alert, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { getQuizzes } from "../../store/slices/quizSlice";
import QuizCard from "./QuizCard";
import { useTranslation } from "react-i18next";

const Quizzes = () => {
  const { t } = useTranslation(["common", "home"]);

  const dispatch = useDispatch<AppDispatch>();
  const { quizzes, loading, error } = useSelector(
    (state: RootState) => state.quizzes
  );

  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
        }}
      >
        <CircularProgress size={28} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, maxWidth: 800, mx: "auto" }}>
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          {t("quizzes")}
        </Typography>
        <Typography color="text.secondary">
          {quizzes.length} {quizzes.length === 1 ? "quiz" : "quizzes"} available
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {quizzes.map((quiz) => (
          <Grid item xs={12} md={6} key={quiz._id}>
            <QuizCard quiz={quiz} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Quizzes;
