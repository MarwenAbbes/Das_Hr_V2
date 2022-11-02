import { React, useEffect } from "react";
import Box from "@mui/material/Box";
import NavbarComponent from "../../Components/Shared/Navbar/NavbarComponent";
import SidePanel from "../../Components/Shared/SidePanel/SidePanel";
import { useState } from "react";
import { SidePanelContext } from "../../Contexts/UserContext";

function HomePage() {
  //##############################################################################
  const [SidePanelContextState, SetSidePanelContextState] = useState({
    SidePanelOpen: false,
    SelectedItemName: "",
  });

  //##############################################################################

  useEffect(() => {}, [SidePanelContextState.SelectedItemName]);

  return (
    <SidePanelContext.Provider
      value={{
        SidePanelContextState,
        SetSidePanelContextState,
      }}
    >
      <Box>
        <NavbarComponent />
        <SidePanel />
        
      </Box>
    </SidePanelContext.Provider>
  );
}

export default HomePage;
