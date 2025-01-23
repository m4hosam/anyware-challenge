import { useEffect } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { getAnnouncements } from "../../store/slices/announcementSlice";
import AnnouncementCard from "./AnnouncementCard";
import { useTranslation } from "react-i18next";

const Announcements = () => {
  const { t } = useTranslation(["common", "home"]);
  const dispatch = useDispatch<AppDispatch>();
  const { announcements, loading, error } = useSelector(
    (state: RootState) => state.announcements
  );

  useEffect(() => {
    dispatch(getAnnouncements());
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          {t("announcements")}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement._id}
            announcement={announcement}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Announcements;
