import { useEffect } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { getAnnouncements } from "../../store/slices/announcementSlice";
import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
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
        <CircularProgress />
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
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Announcements
      </Typography>
      {announcements.map((announcement) => (
        <AnnouncementCard key={announcement._id} announcement={announcement} />
      ))}
    </Box>
  );
};

export default Announcements;
