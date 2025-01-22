import mongoose, { Schema, Document } from "mongoose";

export interface IQuiz extends Document {
  title: string;
  course: string;
  topic: string;
  dueDate: Date;
  link: string;
}

// Schema definition for the Quiz model
const QuizSchema: Schema = new Schema({
  title: { type: String, required: true },
  course: { type: String, required: true },
  topic: { type: String, required: true },
  dueDate: { type: Date, required: true },
  link: { type: String, required: true },
});

// Export the model
export default mongoose.model<IQuiz>("Quiz", QuizSchema);
