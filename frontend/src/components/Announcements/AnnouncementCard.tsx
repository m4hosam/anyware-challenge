import { Card, CardContent, Typography } from "@mui/material";
import { Announcement } from "../../types/types";

interface Props {
  announcement: Announcement;
}

const AnnouncementCard = ({ announcement }: Props) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{announcement.title}</Typography>
        <Typography color="text.secondary" gutterBottom>
          {announcement.date}
        </Typography>
        <Typography variant="body2">{announcement.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
