import { Typography, Box, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography>Welcome to your learning dashboard!</Typography>
      </Paper>
    </Box>
  );
};

export default Dashboard;
