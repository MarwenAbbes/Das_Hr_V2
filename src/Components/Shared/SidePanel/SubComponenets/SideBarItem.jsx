import { React, useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { SidePanelContext } from "../../../../Contexts/UserContext";

function SideBarItem({ itemkey, icon, text }) {
  const { SidePanelContextState, SetSidePanelContextState } =
    useContext(SidePanelContext);

  return (
    <ListItem key={itemkey} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: SidePanelContextState.SidePanelOpen
            ? "initial"
            : "center",
          px: 2.5,
        }}
        onClick={() => {
          SetSidePanelContextState({
            ...SidePanelContextState,
            SelectedItemName: text,
          });
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: SidePanelContextState.SidePanelOpen ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{ opacity: SidePanelContextState.SidePanelOpen ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default SideBarItem;
