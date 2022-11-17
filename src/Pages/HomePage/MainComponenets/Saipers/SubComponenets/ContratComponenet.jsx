import { MenuItem } from "@material-ui/core";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  ListItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Component } from "react";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function Contrat({
  TypeContrat,
  TypeFonction,
  TypeCalender,
  TypeRémunération,
  HoldTypeContrat,
  SetHoldTypeContrat,
  HoldDateDebut,
  SetHoldDateDebut,
  HoldDateFin,
  SetHoldDateFin,
  HoldFunction,
  SetHoldFunction,
  HoldTypeCalander,
  SetHoldTypeCalander,
  HoldRémunéation,
  SetHoldRémunéation,
}) {
  let TempTypeContratList = [];
  let TempTypeFonctionList = [];
  let TempTypeCalenderList = [];
  let TempTypeRémunérationList = [];

  const [SelectedTypeContrat, SetSelectedTypeContrat] = useState("");
  const [SelectedTypeFonction, SetSelectedTypeFonction] = useState("");
  const [SelectedTypeRémunération, SetSelectedTypeRémunération] = useState("");
  const [SelectedTypeCalender, SetSelectedTypeCalender] = useState("");
  const [TypeContratList, SetTypeContratList] = useState([]);
  const [TypeFonctionList, SetTypeFonctionList] = useState([]);
  const [TypeCalenderList, SetTypeCalenderList] = useState([]);
  const [TypeRémunérationList, SetTypeRémunérationList] = useState([]);

  const handleChangeAge = (event) => {
    if (event.target.name === "TypeDeContrat")
      SetHoldTypeContrat(event.target.value);
    else if (event.target.name === "TypeFonction")
      SetHoldFunction(event.target.value);
    else if (event.target.name === "TypeCalender")
      SetHoldTypeCalander(event.target.value);
    else if (event.target.name === "TypeRémunération")
      SetHoldRémunéation(event.target.value);
  };

  const HandleChange = (event) => {
    if (event.target.name === "DateDebut") SetHoldDateDebut(event.target.value);
    else if (event.target.name === "DateFin")
      SetHoldDateFin(event.target.value);
    else if (event.target.name === "DateFin")
      SetHoldDateFin(event.target.value);
  };

  useEffect(() => {
    TypeContrat.forEach((element) => {
      if (!TempTypeContratList.includes(element)) {
        TempTypeContratList.push(element);
      }
    });
    TypeFonction.forEach((element) => {
      if (!TempTypeFonctionList.includes(element))
        TempTypeFonctionList.push(element);
    });

    TypeCalender.forEach((element) => {
      if (!TempTypeCalenderList.includes(element))
        TempTypeCalenderList.push(element);
    });

    TypeRémunération.forEach((element) => {
      if (!TempTypeRémunérationList.includes(element))
        TempTypeRémunérationList.push(element);
    });

    SetTypeContratList(TempTypeContratList);
    SetTypeFonctionList(TempTypeFonctionList);
    SetTypeCalenderList(TempTypeCalenderList);
    SetTypeRémunérationList(TempTypeRémunérationList);
  }, []);

  return (
    <Box sx={{ padding: "1em", display: "flex", flexWrap: "wrap" }}>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: "30%" }}
        size="small"
      >
        <InputLabel id="TypeDeContrat">Type de contrat</InputLabel>
        <Select
          labelId="TypeDeContrat"
          id="TypeDeContrat"
          value={HoldTypeContrat}
          label="TypeDeContrat"
          onChange={handleChangeAge}
          name="TypeDeContrat"
        >
          {TypeContratList.map((contrat, index) => (
            <MenuItem key={index} value={contrat.CODE}>
              {contrat.LABEL}
            </MenuItem>
          ))}
        </Select>
        {/* <Typography sx={{ color: "red" }}>{erros.Company}</Typography> */}
      </FormControl>

      <TextField
        name="DateDebut"
        label="Date début"
        type="date"
        value={HoldDateDebut}
        sx={{ width: "30%", margin: "0.7em" }}
        InputLabelProps={{
          shrink: true,
        }}
        size="small"
        onChange={HandleChange}
      />

      <TextField
        name="DateFin"
        label="Date fin"
        type="date"
        sx={{ width: "30%", margin: "0.7em" }}
        InputLabelProps={{
          shrink: true,
        }}
        size="small"
        value={HoldDateFin}
        onChange={HandleChange}
      />
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: "30%" }}
        size="small"
      >
        <InputLabel id="TypeFonction">Fontion</InputLabel>
        <Select
          labelId="TypeFonction"
          id="TypeFonction"
          value={HoldFunction}
          label="TypeFonction"
          onChange={handleChangeAge}
          name="TypeFonction"
        >
          {TypeFonctionList.map((contrat, index) => (
            <MenuItem key={index} value={contrat.CODE}>
              {contrat.LABEL}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: "30%" }}
        size="small"
      >
        <InputLabel id="TypeCalender">Type de calendrier</InputLabel>
        <Select
          labelId="TypeCalender"
          id="TypeCalender"
          value={HoldTypeCalander}
          label="TypeCalender"
          onChange={handleChangeAge}
          name="TypeCalender"
        >
          {TypeCalenderList.map((contrat, index) => (
            <MenuItem key={index} value={contrat.CODE}>
              {contrat.LABEL}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: "30%" }}
        size="small"
      >
        <InputLabel id="TypeRémunération">Rémunération</InputLabel>
        <Select
          labelId="TypeRémunération"
          id="TypeRémunération"
          value={HoldRémunéation}
          label="TypeRémunération"
          onChange={handleChangeAge}
          name="TypeRémunération"
        >
          {TypeRémunérationList.map((contrat, index) => (
            <MenuItem key={index} value={contrat.CODE}>
              {contrat.LABEL}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormGroup sx={{ marginTop: 2, marginLeft: 2 }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Avantage employeur CNSS"
        />
      </FormGroup>
    </Box>
  );
}

export default Contrat;
