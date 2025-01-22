import {
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import QuizIcon from "@mui/icons-material/Quiz";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", path: "/", icon: <DashboardIcon /> },
    {
      text: "Announcements",
      path: "/announcements",
      icon: <AnnouncementIcon />,
    },
    { text: "Quizzes", path: "/quizzes", icon: <QuizIcon /> },
  ];

  return (
    <div>
      <Toolbar /> {/* This creates space for the AppBar */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                "&.active": {
                  backgroundColor: "white",
                  "& .MuiListItemText-primary": {
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
