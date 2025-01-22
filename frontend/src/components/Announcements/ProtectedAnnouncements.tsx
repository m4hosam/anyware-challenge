import Announcements from "./Announcements";
import { requireAuth } from "../Auth/requireAuth";

export default requireAuth(Announcements);
