import { Add, Print } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { GetBultinPaie } from "../DataController";

function UserControlHeaderComponenet({
  HandelFunction,
  SetBultinResponse,
  SetBultinResponseLoading,
  BultinResponse,
  SelectedPersonMatricule,
  Client,
}) {
  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ float: "right" }}>
        <Button onClick={() => HandelFunction("Add")}>
          Ajouter un employee
        </Button>
        <Button onClick={() => HandelFunction("Edit")}>
          Modifier l'employee
        </Button>
        <Button
          variant="outlined"
          startIcon={<Print />}
          onClick={() => {
            HandelFunction("Bultin");
            GetBultinPaie(Client, SelectedPersonMatricule).then(
              (respo) => (
                SetBultinResponse(respo),
                console.log(respo),
                SetBultinResponseLoading(BultinResponse !== undefined)
              )
            );
          }}
        >
          Bultin de paie
        </Button>
      </Stack>
    </Box>
  );
}

export default UserControlHeaderComponenet;
