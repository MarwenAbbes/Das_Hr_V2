import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function EmailHolderComponenet({erros}) {
  return (
    <Box>
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
      <Typography sx={{color:"red"}}>{erros.email}</Typography>
    </Box>
  );
}

export default EmailHolderComponenet;
