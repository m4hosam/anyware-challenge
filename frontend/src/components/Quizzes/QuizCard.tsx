import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { Quiz } from "../../types/types";
import { format } from "date-fns";

interface Props {
  quiz: Quiz;
}

const QuizCard = ({ quiz }: Props) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {quiz.title}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Course: {quiz.course}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Topic: {quiz.topic}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Due Date: {format(new Date(quiz.dueDate), "PPP")}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary" href={quiz.link}>
            Take Quiz
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
