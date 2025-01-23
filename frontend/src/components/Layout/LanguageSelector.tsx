import { useTranslation } from "react-i18next";
import { Menu, MenuItem, IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="select language"
        aria-controls="menu-language"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        sx={{ ml: "auto" }}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="menu-language"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("ar")}>العربية</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector;
