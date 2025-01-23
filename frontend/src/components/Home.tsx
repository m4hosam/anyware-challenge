import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
import { RootState } from "../store/store";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation(["common", "home"]);

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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: "#287271", mb: 2 }}>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button color="inherit" onClick={() => changeLanguage("en")}>
            English
          </Button>
          <Button color="inherit" onClick={() => changeLanguage("ar")}>
            العربية
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 150px)", // Adjusted for header height
          textAlign: "center",
          p: 3,
        }}
      >
        <Typography variant="h3" gutterBottom>
          {t("welcome")}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          {isAuthenticated ? "You are currently logged in" : t("login note")}
        </Typography>
        <Button
          variant="contained"
          color={isAuthenticated ? "error" : "primary"}
          size="large"
          onClick={handleAuth}
        >
          {isAuthenticated ? t("logout") : t("login")}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
