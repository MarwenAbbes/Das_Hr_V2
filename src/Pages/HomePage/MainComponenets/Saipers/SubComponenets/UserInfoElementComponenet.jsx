import { Box, Typography } from "@mui/material";
import React from "react";

function UserInfoElementComponenet({ title, PersonSite }) {
  return (
    <Box
      component="span"
      m="{1}"
      sx={{ marginRight: "3em", marginBottom: "1em", display: "flex" }}
    >
      <Typography sx={{ fontWeight: "800", float: "left" }}>
        {`${title} :`}&nbsp;
      </Typography>
      <Typography sx={{ float: "right" }}>{PersonSite}</Typography>
    </Box>
  );
}

export default UserInfoElementComponenet;
