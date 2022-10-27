import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyrights(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://www.logidas.com/">
        LOGIDAS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyrights;
