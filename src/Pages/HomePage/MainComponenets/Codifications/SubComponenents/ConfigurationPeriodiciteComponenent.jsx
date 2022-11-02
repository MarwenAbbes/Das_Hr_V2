import { ArrowDropDown, Edit, Save } from "@mui/icons-material";
import {
  Box,
  CardContent,
  CardHeader,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomAlert from "../../../../../Components/Shared/CustomAlert";
import { EditTable, GetTable } from "../DataController";
import { useContext } from "react";
import { userContext } from "../../../../../Contexts/UserContext";
import { convertDate } from "../Utils/Utils";

export default function ConfigurationPeriodiciteComponenent() {
  const { userContextState, SetuserContextState } = useContext(userContext);
  const ClientDB = userContextState.company;
  let selectedFields = "";

  const [alertMessageClose, setAlertMessageClose] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    msg: "",
    type: "",
  });
  const [collapsed, setCollepsed] = useState(false);
  const [EditMode, setEditMode] = useState(false);
  const [
    Périodicité_du_calcul_des_salaires,
    SetPériodicité_du_calcul_des_salaires,
  ] = useState({
    ParMoisSimple: true,
    ParMois: false,
    ParPeriode: false,
  });
  const [JourMois, setJourMois] = useState(0);

  const [selectedDate, setSelectedDate] = useState(dayjs().toISOString());

  const handleChangeParMoisSimple = (event) => {
    if (
      Périodicité_du_calcul_des_salaires.ParMoisSimple == false &&
      ((Périodicité_du_calcul_des_salaires.ParMois === true &&
        Périodicité_du_calcul_des_salaires.ParPeriode === false) ||
        (Périodicité_du_calcul_des_salaires.ParMois === false &&
          Périodicité_du_calcul_des_salaires.ParPeriode === true))
    ) {
      SetPériodicité_du_calcul_des_salaires({
        ParMoisSimple: true,
        ParMois: false,
        ParPeriode: false,
      });
    }
  };

  const handleChangeParMois = (event) => {
    if (
      Périodicité_du_calcul_des_salaires.ParMois == false &&
      ((Périodicité_du_calcul_des_salaires.ParMoisSimple === true &&
        Périodicité_du_calcul_des_salaires.ParPeriode === false) ||
        (Périodicité_du_calcul_des_salaires.ParMoisSimple === false &&
          Périodicité_du_calcul_des_salaires.ParPeriode === true))
    ) {
      SetPériodicité_du_calcul_des_salaires({
        ParMoisSimple: false,
        ParMois: true,
        ParPeriode: false,
      });
    }
  };

  const handleChangeParPeriode = (event) => {
    if (
      Périodicité_du_calcul_des_salaires.ParPeriode == false &&
      ((Périodicité_du_calcul_des_salaires.ParMois === true &&
        Périodicité_du_calcul_des_salaires.ParMoisSimple === false) ||
        (Périodicité_du_calcul_des_salaires.ParMois === false &&
          Périodicité_du_calcul_des_salaires.ParMoisSimple === true))
    ) {
      SetPériodicité_du_calcul_des_salaires({
        ParMoisSimple: false,
        ParMois: false,
        ParPeriode: true,
      });
    }
  };

 

  const handleChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const ChangeMode = (setMode, mode) => {
    setMode(mode);
  };

  const saveData = async () => {
    if (Périodicité_du_calcul_des_salaires.ParMoisSimple) {
      selectedFields = `TypeSalaire = "C" `;
    } else if (Périodicité_du_calcul_des_salaires.ParMois) {
      selectedFields = `TypeSalaire = "J",JourMois=${JourMois}`;
    } else if (Périodicité_du_calcul_des_salaires.ParPeriode) {
      selectedFields = `TypeSalaire ="F",DateFinPaie="${convertDate(
        new Date(selectedDate)
      )}" `;
    }

    EditTable(ClientDB, "ComPaie", selectedFields, `Code = "A"`)
      .then(
        setAlertMessage({
          msg: "L'enregistrement a été mis à jour avec succès",
          type: "success",
        }),
        setAlertMessageClose(true)
      )
      .catch((err) => {
        setAlertMessage({
          msg: "Échec de la mis à jour de l'enregistrement",
          type: "error",
        });

        setAlertMessageClose(true);
      });
  };

  const [
    Périodicité_du_calcul_des_primes_de_rendement_EditMode,
    SetPériodicité_du_calcul_des_primes_de_rendement_EditMode,
  ] = useState(false);

  const [
    Périodicité_du_calcul_des_primes_de_rendement,
    SetPériodicité_du_calcul_des_primes_de_rendement,
  ] = useState({
    parAnnee: false,
    parPeriode: false,
  });

  const [
    Périodicité_du_calcul_des_primes_de_rendementNombreMois,
    setPériodicité_du_calcul_des_primes_de_rendementNombreMois,
  ] = useState();

  const handleChangePériodicité_du_calcul_des_primes_de_rendement_parAnnee =
    () => {
      if (!Périodicité_du_calcul_des_primes_de_rendement.parAnnee) {
        SetPériodicité_du_calcul_des_primes_de_rendement({
          parAnnee: true,
          parPeriode: false,
        });
      }
    };

  const handleChangePériodicité_du_calcul_des_primes_de_rendement_parPeriode =
    () => {
      if (!Périodicité_du_calcul_des_primes_de_rendement.parPeriode) {
        SetPériodicité_du_calcul_des_primes_de_rendement({
          parAnnee: false,
          parPeriode: true,
        });
      }
    };

  const setNombreMois = (value) => {
    setPériodicité_du_calcul_des_primes_de_rendementNombreMois(value);
  };

  const getData = async () => {
    GetTable(ClientDB, "ComPaie").then((responde) => {
      if (responde[0]["TypeSalaire"] === "J") {
        SetPériodicité_du_calcul_des_salaires({
          ParMoisSimple: false,
          ParMois: true,
          ParPeriode: false,
        });
        setJourMois(responde[0].JourMois);
        setSelectedDate(
          new Date(
            responde[0]["DateFinPaie"][3] +
              responde[0]["DateFinPaie"][4] +
              "-" +
              responde[0]["DateFinPaie"][0] +
              responde[0]["DateFinPaie"][1] +
              "-" +
              responde[0]["DateFinPaie"][6] +
              responde[0]["DateFinPaie"][7] +
              responde[0]["DateFinPaie"][8] +
              responde[0]["DateFinPaie"][9]
          ).toISOString()
        );
      } else if (responde[0]["TypeSalaire"] === "C") {
        SetPériodicité_du_calcul_des_salaires({
          ParMoisSimple: true,
          ParMois: false,
          ParPeriode: false,
        });
      } else if (responde[0]["TypeSalaire"] === "F") {
        SetPériodicité_du_calcul_des_salaires({
          ParMoisSimple: false,
          ParMois: false,
          ParPeriode: true,
        });
        setSelectedDate(responde[0]["DateFinPaie"]);
      }

      if (responde[0]["TypePrime"] === "C") {
        SetPériodicité_du_calcul_des_primes_de_rendement({
          parAnnee: true,
          parPeriode: false,
        });
      } else if (responde[0]["TypePrime"] === "M") {
        SetPériodicité_du_calcul_des_primes_de_rendement({
          parAnnee: false,
          parPeriode: true,
        });
        setPériodicité_du_calcul_des_primes_de_rendementNombreMois(
          responde[0]["DureeMoisPrime"]
        );
      }
    });
  };
  return (
    <Box
      sx={{
        margin: "10px",
        height: "500",
      }}
    >
      <Card>
        <CardHeader
          title={"Périodicité"}
          action={
            <IconButton
              aria-label="openCard"
              onClick={() => {
                getData();
                setCollepsed(!collapsed);
              }}
            >
              <ArrowDropDown />
            </IconButton>
          }
        />

        <Collapse in={collapsed}>
          <CardContent>
            <Box>
              <Box>
                {!EditMode && (
                  <Edit
                    sx={{
                      marginRight: "10px",
                      color: "#42a5f5",
                      cursor: "pointer",
                      float: "right",
                      height: "28px",
                      width: "28px",
                    }}
                    onClick={() => {
                      setEditMode(true);
                    }}
                  />
                )}

                {EditMode && (
                  <Save
                    sx={{
                      marginRight: "10px",
                      color: "green",
                      cursor: "pointer",
                      float: "right",
                      height: "28px",
                      width: "28px",
                    }}
                    onClick={() => {
                      saveData();
                      setEditMode(false);
                    }}
                  />
                )}
              </Box>
              <FormControl
                component="fieldset"
                variant="standard"
                disabled={!EditMode}
              >
                <FormLabel component="legend">
                  Périodicité du calcul des salaires
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          Périodicité_du_calcul_des_salaires.ParMoisSimple
                        }
                        onChange={handleChangeParMoisSimple}
                        name="ParMoisSimple"
                      />
                    }
                    label="Du début à la fin de chaque mois calendaire"
                  />
                  <span>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Périodicité_du_calcul_des_salaires.ParMois}
                          onChange={handleChangeParMois}
                          name="ParMois"
                        />
                      }
                      label="Du jour qui suit la paie précédente au                     du mois en cours."
                    />
                    {Périodicité_du_calcul_des_salaires.ParMois && EditMode && (
                      <TextField
                        sx={{ width: "115px" }}
                        label="Nombre de jours"
                        value={JourMois}
                        onChange={(event) => {
                          setJourMois(event.target.value);
                        }}
                        size="small"
                      ></TextField>
                    )}
                  </span>
                  <span>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            Périodicité_du_calcul_des_salaires.ParPeriode
                          }
                          onChange={handleChangeParPeriode}
                          name="ParPeriode"
                        />
                      }
                      label="Par période       : Du jour qui suit la paie précédente à la date "
                    />
                    {Périodicité_du_calcul_des_salaires.ParPeriode && EditMode && (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="Selectionner une date"
                          inputFormat="DD/MM/YYYY"
                          value={selectedDate}
                          onChange={handleChange}
                          renderInput={(params) => (
                            <TextField
                              sx={{ width: "170px" }}
                              size="small"
                              {...params}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    )}
                  </span>
                </FormGroup>
              </FormControl>
            </Box>
          </CardContent>

          {/* *********************************************************************** */}

          <CardContent>
            <Box>
              <Box>
                {!Périodicité_du_calcul_des_primes_de_rendement_EditMode && (
                  <Edit
                    sx={{
                      marginRight: "10px",
                      color: "#42a5f5",
                      cursor: "pointer",
                      float: "right",
                      height: "28px",
                      width: "28px",
                    }}
                    onClick={() => {
                      SetPériodicité_du_calcul_des_primes_de_rendement_EditMode(
                        true
                      );
                    }}
                  />
                )}

                {Périodicité_du_calcul_des_primes_de_rendement_EditMode && (
                  <Save
                    sx={{
                      marginRight: "10px",
                      color: "green",
                      cursor: "pointer",
                      float: "right",
                      height: "28px",
                      width: "28px",
                    }}
                    onClick={async () => {
                      if (
                        Périodicité_du_calcul_des_primes_de_rendement.parAnnee
                      ) {
                        selectedFields = `TypePrime = "C" `;
                      } else if (
                        Périodicité_du_calcul_des_primes_de_rendement.parPeriode
                      ) {
                        selectedFields = `TypePrime = "M",DureeMoisPrime=${Périodicité_du_calcul_des_primes_de_rendementNombreMois} `;
                      }

                      EditTable(
                        ClientDB,
                        "ComPaie",
                        selectedFields,
                        `Code = "A"`
                      )
                        .then(
                          setAlertMessage({
                            msg: "L'enregistrement a été mis à jour avec succès",
                            type: "success",
                          }),
                          setAlertMessageClose(true)
                        )

                        .catch((err) => {
                          setAlertMessage({
                            msg: "Échec de la mis à jour de l'enregistrement",
                            type: "error",
                          });

                          setAlertMessageClose(true);
                        });

                      SetPériodicité_du_calcul_des_primes_de_rendement_EditMode(
                        false
                      );
                    }}
                  />
                )}
              </Box>
              <FormControl
                component="fieldset"
                variant="standard"
                disabled={
                  !Périodicité_du_calcul_des_primes_de_rendement_EditMode
                }
              >
                <FormLabel component="legend">
                  Périodicité du calcul des primes de rendement
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          Périodicité_du_calcul_des_primes_de_rendement.parAnnee
                        }
                        onChange={() =>
                          handleChangePériodicité_du_calcul_des_primes_de_rendement_parAnnee()
                        }
                        name="parAnnee"
                      />
                    }
                    label="Par année      : Du début à la fin de chaque année calendaire"
                  />
                  <span>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            Périodicité_du_calcul_des_primes_de_rendement.parPeriode
                          }
                          onChange={() =>
                            handleChangePériodicité_du_calcul_des_primes_de_rendement_parPeriode()
                          }
                          name="parPeriode"
                        />
                      }
                      label="Par période    : "
                    />
                    {Périodicité_du_calcul_des_primes_de_rendement.parPeriode &&
                      Périodicité_du_calcul_des_primes_de_rendement_EditMode && (
                        <TextField
                          sx={{ width: "115px" }}
                          label="Nombre de mois"
                          value={
                            Périodicité_du_calcul_des_primes_de_rendementNombreMois
                          }
                          onChange={(event) => {
                            setNombreMois(event.target.value);
                          }}
                          size="small"
                        ></TextField>
                      )}
                  </span>
                </FormGroup>
              </FormControl>
            </Box>
          </CardContent>
        </Collapse>
        <CustomAlert
          msg={alertMessage.msg}
          severity={alertMessage.type}
          open={alertMessageClose}
          closeFunction={setAlertMessageClose}
        />
      </Card>
    </Box>
  );
}
