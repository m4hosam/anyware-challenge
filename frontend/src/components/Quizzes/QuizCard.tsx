import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import { Quiz } from "../../types/types";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
interface Props {
  quiz: Quiz;
}

const QuizCard = ({ quiz }: Props) => {
  const { t } = useTranslation(["common", "home"]);
  // Calculate days remaining
  const daysRemaining = Math.ceil(
    (new Date(quiz.dueDate).getTime() - new Date().getTime()) /
      (1000 * 3600 * 24)
  );

  const getDueDateColor = () => {
    if (daysRemaining <= 1) return "error";
    if (daysRemaining <= 3) return "warning";
    return "success";
  };

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                mb: 1,
                textAlign: "left",
              }}
            >
              {quiz.title}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Chip
                label={quiz.course}
                size="small"
                sx={{
                  // bgcolor: "success.light",
                  // color: "success.dark",
                  fontWeight: 500,
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            color: "text.secondary",
          }}
        >
          <Typography variant="body2">Topic: {quiz.topic}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            color: "text.secondary",
          }}
        >
          <Typography variant="body2">
            Due: {format(new Date(quiz.dueDate), "MMM d, yyyy 'at' h:mm a")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            href={quiz.link}
            fullWidth
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 3,
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {t("start quiz")}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
