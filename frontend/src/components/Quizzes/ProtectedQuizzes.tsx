import Quizzes from "./Quizzes";
import { requireAuth } from "../Auth/requireAuth";

export default requireAuth(Quizzes);
