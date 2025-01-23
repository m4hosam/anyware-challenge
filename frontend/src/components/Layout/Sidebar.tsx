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
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation(["common", "home"]);
  const menuItems = [
    {
      text: t("common:dashboard"),
      path: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: t("common:announcements"),
      path: "/announcements",
      icon: <AnnouncementIcon />,
    },
    {
      text: t("common:quizzes"),
      path: "/quizzes",
      icon: <QuizIcon />,
    },
  ];

  return (
    <div style={{ backgroundColor: "#2a9d8f", height: "100vh" }}>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                ":hover": { color: "#99d98c" },
                color: "white",
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
                "&.active": {
                  backgroundColor: "white",
                  color: "#0f3040",
                  "& .MuiListItemIcon-root": {
                    color: "#0f3040",
                  },
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
