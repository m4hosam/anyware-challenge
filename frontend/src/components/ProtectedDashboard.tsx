import Dashboard from "./Dashboard";
import { requireAuth } from "./Auth/requireAuth";

export default requireAuth(Dashboard);
