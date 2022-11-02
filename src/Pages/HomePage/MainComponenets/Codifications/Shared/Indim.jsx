import { React, useEffect, useState } from "react";
import { Edit, Save } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  TextField,
} from "@mui/material";

function Indim({
  counter,
  LabelsArray,
  vlauesIndiNom,
  valuesIndiVal,
  indexNbJours,
  indexPlafondSocial,
  indexPlafondFiscal,
  indexUnitaire,
  Key,
}) {
  const [Loi2014, setLoi2014] = useState(false);
  const [Men, setMen] = useState(false);
  const [Uni, SetUni] = useState(false);
  const [Libellé, setLibellé] = useState("");
  const [Abréviation, setAbréviation] = useState("");
  const [PlafondSociale, setPlafondSociale] = useState(0);
  const [PlafondFiscale, setPlafondFiscale] = useState(0);
  const [NbJour, setNbJour] = useState(0);

  useEffect(() => {
    if (
      vlauesIndiNom !== undefined &&
      valuesIndiVal !== undefined &&
      indexUnitaire >= 0
    ) {
      setLibellé(vlauesIndiNom[1][`Indi${counter}`]);
      setAbréviation(vlauesIndiNom[2][`Indi${counter}`]);
      setPlafondSociale(
        parseFloat(valuesIndiVal[indexPlafondSocial][`Indi${counter}`])
      );
      setPlafondFiscale(
        parseFloat(valuesIndiVal[indexPlafondFiscal][`Indi${counter}`])
      );
      setNbJour(parseFloat(valuesIndiVal[indexNbJours][`Indi${counter}`]));
      setLoi2014(vlauesIndiNom[0][`Indi${counter}`] === "V");
      setMen(parseInt(valuesIndiVal[indexUnitaire][`Indi${counter}`]) === 0);
      SetUni(parseInt(valuesIndiVal[indexUnitaire][`Indi${counter}`]) === 1);
    }
  });

  const saveIndim = () => {};

  return (
    <Box sx={{ marginBottom: "0.7em", display: "flex" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <TextField
          variant="outlined"
          id="outlined-required"
          size="small"
          label="Libellé"
          type="text"
          sx={{
            width: 400,
            marginRight: "0.5em",
            marginTop: "0.5em",
          }}
          value={Libellé}
        />
        <TextField
          variant="outlined"
          id="outlined-required"
          size="small"
          label="Abréviation"
          type="text"
          sx={{
            width: 130,
            marginRight: "0.5em",
            marginTop: "0.5em",
          }}
          value={Abréviation}
        />
        <TextField
          variant="outlined"
          id="outlined-required"
          size="small"
          label="Plafond d'éxo.sociale"
          type="number"
          sx={{
            width: 250,
            marginRight: "0.5em",
            marginTop: "0.5em",
          }}
          value={PlafondSociale}
        />

        <TextField
          variant="outlined"
          id="outlined-required"
          size="small"
          label="Plafond d'éxo.fiscale"
          type="number"
          sx={{
            width: 200,
            marginRight: "0.5em",
            marginTop: "0.5em",
          }}
          value={PlafondFiscale}
        />
        <TextField
          variant="outlined"
          id="outlined-required"
          size="small"
          label="Nb Jours"
          type="number"
          sx={{
            width: 200,
            marginRight: "0.5em",
            marginTop: "0.5em",
          }}
          value={NbJour}
        />

        <FormGroup row sx={{ marginLeft: "0.5em" }}>
          <FormControlLabel
            control={<Checkbox checked={Loi2014} />}
            label="Loi 2014"
          />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={"M"}
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              value="M"
              control={<Checkbox checked={Men} />}
              label="Mensuelle"
              sx={{ marginLeft: "1.5em" }}
            />
            <FormControlLabel
              value="U"
              control={<Checkbox checked={Uni} />}
              label="Unitaire"
            />
          </RadioGroup>
        </FormGroup>
      </Box>
      <Box sx={{ marginBottom: "0.3em", float: "right" }}>
        <Save
          onClick={() => {
            console.log(Key);
          }}
        />
        <Edit />
      </Box>
    </Box>
  );
}

export default Indim;
