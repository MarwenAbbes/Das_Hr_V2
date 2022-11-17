import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { ListItem } from "../styles/Styles";

function UserCard({ name, title, index, selectedIndexI }) {
  return (
    <ListItem
      sx={{
        background: "yellow",
      }}
      button
      selected={selectedIndexI === index}
    >
      <ListItemAvatar>
        <Avatar>{name[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="h9" display="block" gutterBottom>
            {name}
          </Typography>
        }
        secondary={
          <Typography variant="caption" display="block" gutterBottom>
            {title}
          </Typography>
        }
        style={{ lineHeight: 1, margin: 0 }}
      />
    </ListItem>
  );
}

export default UserCard;
