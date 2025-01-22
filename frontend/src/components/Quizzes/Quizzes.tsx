import { Typography, Box, Paper } from "@mui/material";

const Quizzes = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Quizzes
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography>No quizzes available at the moment.</Typography>
      </Paper>
    </Box>
  );
};

export default Quizzes;
