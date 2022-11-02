import { React, useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TuneIcon from "@mui/icons-material/Tune";

import { SidePanelContext } from "../../../Contexts/UserContext";
import { PrimaryColor } from "../../../assets/Colors";
import SideBarItem from "./SubComponenets/SideBarItem";
import { Drawer, DrawerHeader } from "./Style";
import CodificationMainComponenet from "../../../Pages/HomePage/MainComponenets/Codifications/CodificationMainComponenet";
import { Home, People } from "@mui/icons-material";
import SaipersMainComponenet from "../../../Pages/HomePage/MainComponenets/Saipers/SaipersMainComponenet";

function SidePanel() {
  const { SidePanelContextState, SetSidePanelContextState } =
    useContext(SidePanelContext);

  const handleDrawerClose = () => {
    SetSidePanelContextState({
      ...SidePanelContextState,
      SidePanelOpen: !SidePanelContextState.SidePanelOpen,
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={SidePanelContextState.SidePanelOpen}>
        <Box sx={{ bgcolor: PrimaryColor, height: "55px" }}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
              {SidePanelContextState.SidePanelOpen ? (
                <ChevronLeftIcon />
              ) : (
                <MenuIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </Box>

        <Divider />
        <List>
          <SideBarItem itemkey={0} icon={<Home />} text={"Home"} />
          <SideBarItem itemkey={1} icon={<TuneIcon />} text={"Codification"} />
          <SideBarItem itemkey={2} icon={<People />} text={"Employés"} />
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {SidePanelContextState.SelectedItemName === "Codification" && (
          <CodificationMainComponenet />
        )}
        {SidePanelContextState.SelectedItemName === "Employés" && (
          <SaipersMainComponenet />
        )}
      </Box>
    </Box>
  );
}

export default SidePanel;
