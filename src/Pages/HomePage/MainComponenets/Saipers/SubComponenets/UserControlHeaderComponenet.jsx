import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";




function UserControlHeaderComponenet({ HandelFunction }) {
  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ float: "right" }}>
        <Button onClick={() => HandelFunction("Add")}>
          Ajouter un employee
        </Button>
        <Button onClick={() => HandelFunction("Edit")}>
          Modifier l'employee
        </Button>
      </Stack>
    </Box>
  );
}

export default UserControlHeaderComponenet;
