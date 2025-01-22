import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { Announcement } from "../../types/types";
import { format } from "date-fns";

interface Props {
  announcement: Announcement;
}

const AnnouncementCard = ({ announcement }: Props) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={announcement.user.image}
            alt={announcement.user.name}
            sx={{ mr: 2 }}
          >
            {announcement.user.name[0]}
          </Avatar>
          <Box>
            <Typography variant="h6">{announcement.user.name}</Typography>
            <Typography color="text.secondary" variant="body2">
              {format(new Date(announcement.date), "PPP")}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {announcement.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Course: {announcement.course}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
