import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
  const announcements = useSelector(
    (state: RootState) => state.announcements.announcements
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Announcements
      </Typography>
      {announcements.map((announcement) => (
        <AnnouncementCard key={announcement.id} announcement={announcement} />
      ))}
    </Box>
  );
};

export default Announcements;
