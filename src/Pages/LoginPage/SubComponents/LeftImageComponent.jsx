import React from 'react'
import Grid from "@mui/material/Grid";
import loginVertor from "../../../assets/images/loginVertor.svg";

function LeftImageComponent() {
  return (
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginVertor})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
  )
}

export default LeftImageComponent