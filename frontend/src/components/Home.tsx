import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
import { RootState } from "../store/store";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleAuth = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(login());
      navigate("/dashboard");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Learning Management System
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        {isAuthenticated
          ? "You are currently logged in"
          : "Please log in to access the dashboard"}
      </Typography>
      <Button
        variant="contained"
        color={isAuthenticated ? "error" : "primary"}
        size="large"
        onClick={handleAuth}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </Button>
    </Box>
  );
};

export default Home;
