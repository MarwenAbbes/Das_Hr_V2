import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";

import { PrimaryColor } from "../../../assets/Colors";
import LargeMenuComponenent from "./SubComponenents/LargeMenuComponenent";
import MobileMenuComponenet from "./SubComponenents/MobileMenuComponenet";
import { SidePanelContext } from "../../../Contexts/UserContext";

const mobileMenuId = "primary-search-account-menu-mobile";
function NavbarComponent() {
   const { SidePanelContextState, SetSidePanelContextState } =
     useContext(SidePanelContext);


  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

 
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: PrimaryColor, height: "55px", paddingBottom: "1em" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>{
              SetSidePanelContextState(!SidePanelContextState);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
          >
            DASHR
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <LargeMenuComponenent />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <MobileMenuComponenet
              mobileMoreAnchorEl={mobileMoreAnchorEl}
              setMobileMoreAnchorEl={setMobileMoreAnchorEl}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavbarComponent;
