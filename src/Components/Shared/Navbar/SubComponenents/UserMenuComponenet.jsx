import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import{userContext} from "../../../../Contexts/UserContext"

function UserMenuComponenet({ open, anchorEl, setAnchorEl, menuId }) {
  const navigate = useNavigate();

  const { userContextState, SetuserContextState } = useContext(userContext);

  const handleMenuClose = (operation) => {
    if (operation === "Logout") {
      localStorage.setItem("user", "");
      SetuserContextState({
        username: "",
        company: "",
      });
      navigate("/login");
    }
    setAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose("Logout");
        }}
      >
        Se déconnecter
      </MenuItem>
    </Menu>
  );
}

export default UserMenuComponenet;
