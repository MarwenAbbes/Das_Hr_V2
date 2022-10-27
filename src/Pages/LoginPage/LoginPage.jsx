import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LeftImageComponent from "./SubComponents/LeftImageComponent";
import RightPartPageComponenet from "./SubComponents/RightPartPageComponenet";

const theme = createTheme();
function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <LeftImageComponent />
        <RightPartPageComponenet />
      </Grid>
    </ThemeProvider>
  );
}

export default LoginPage;
