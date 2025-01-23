import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
} from "@mui/material";
import { Announcement } from "../../types/types";
import { format } from "date-fns";

interface Props {
  announcement: Announcement;
}

const AnnouncementCard = ({ announcement }: Props) => {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
          <Avatar
            src={announcement.user.image}
            alt={announcement.user.name}
            sx={{
              width: 40,
              height: 40,
              bgcolor: "primary.light",
            }}
          >
            {announcement.user.name[0]}
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                {announcement.user.name}
              </Typography>
              <Chip
                label={announcement.course}
                size="small"
                sx={{
                  height: 20,
                  fontSize: "0.75rem",
                  bgcolor: "grey.100",
                }}
              />
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                fontSize: "0.9rem",
                lineHeight: 1.5,
                mb: 1,
              }}
            >
              {announcement.content}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontSize: "0.75rem",
              }}
            >
              {format(new Date(announcement.date), "MMM d, yyyy")}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
