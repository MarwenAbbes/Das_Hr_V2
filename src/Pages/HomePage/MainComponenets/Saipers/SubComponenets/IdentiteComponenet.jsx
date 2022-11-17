import { Box, Input, TextField } from "@mui/material";
import React from "react";

function IdentiteComponenet({HoldMatricule,
        SetHoldMatricule,
        HoldNom,
        SetHoldNom,
        HoldPrenom,
        SetHoldPrenom,
        HoldDateDeRecrutement,
        SetHoldDateDeRecrutement,}) {

  const HandleChange = (event) => {
    if (event.target.name === "Matricule") SetHoldMatricule(event.target.value);
    else if (event.target.name === "Nom") SetHoldNom(event.target.value);
    else if (event.target.name === "Prénom") SetHoldPrenom(event.target.value);
    else if (event.target.name === "date") SetHoldDateDeRecrutement(event.target.value);
  };

  return (
    <Box sx={{ padding: "1em", display: "flex" }}>
      <TextField
        name="Matricule"
        variant="outlined"
        id="outlined-required"
        size="small"
        label="Matricule"
        type={"number"}
        sx={{ width: "25%", margin: "0.7em" }}
        value={HoldMatricule}
        onChange={HandleChange}
      />
      <TextField
        name="Nom"
        variant="outlined"
        id="outlined-required"
        size="small"
        label="Nom"
        type={"text"}
        sx={{ width: "25%", margin: "0.7em" }}
        value={HoldNom}
        onChange={HandleChange}
      />
      <TextField
        name="Prénom"
        variant="outlined"
        id="outlined-required"
        size="small"
        label="Prénom"
        type={"text"}
        sx={{ width: "25%", margin: "0.7em" }}
        value={HoldPrenom}
        onChange={HandleChange}
      />
      <TextField
        name="date"
        label="Date de recrutement"
        type="date"
        sx={{ width: "25%", margin: "0.7em" }}
        InputLabelProps={{
          shrink: true,
        }}
        size="small"
        value={HoldDateDeRecrutement}
        onChange={HandleChange}
      />
    </Box>
  );
}

export default IdentiteComponenet;
