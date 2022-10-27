import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function EmailHolderComponenet() {
  return (
    <TextField
      variant="standard"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MailOutlineIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default EmailHolderComponenet;
