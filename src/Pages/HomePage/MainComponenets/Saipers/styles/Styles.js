import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import { createMuiTheme } from "@mui/material";
import { PrimaryColor } from "../../../../../assets/Colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#234948",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#387573",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "#387573",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(MuiListItem);
