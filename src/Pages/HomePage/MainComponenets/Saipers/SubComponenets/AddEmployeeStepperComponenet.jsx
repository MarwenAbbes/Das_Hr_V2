import {
  Button,
  Step,
  StepButton,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { InsertEmployee } from "../DataController";
import Contrat from "./ContratComponenet";
import Identite from "./IdentiteComponenet";

function AddEmployeeStepperComponenet({
  TypeContrat,
  TypeFonction,
  TypeCalender,
  TypeRémunération,
}) {
  const steps = ["Identité", "Contrat", "Rémunération"];

  const [activeStep, setActiveStep] = React.useState(0);

  const [HoldMatricule, SetHoldMatricule] = useState("");
  const [HoldNom, SetHoldNom] = useState("");
  const [HoldPrenom, SetHoldPrenom] = useState("");
  const [HoldDateDeRecrutement, SetHoldDateDeRecrutement] = useState("");
  const [HoldTypeContrat, SetHoldTypeContrat] = useState("");
  const [HoldDateDebut, SetHoldDateDebut] = useState("");
  const [HoldDateFin, SetHoldDateFin] = useState("");
  const [HoldFunction, SetHoldFunction] = useState("");
  const [HoldTypeCalander, SetHoldTypeCalander] = useState("");
  const [HoldRémunéation, SetHoldRémunéation] = useState("");

  const handleNext = () => {
    if (activeStep === 2) {
      InsertEmployee(
        "RH-BR",
        HoldMatricule,
        HoldNom,
        HoldPrenom,
        HoldDateDeRecrutement,
        HoldTypeContrat,
        HoldDateDebut,
        HoldDateFin,
        HoldFunction,
        HoldTypeCalander,
        HoldRémunéation
      ).then((response) => {
        console.log(response);
      });
      // console.log(HoldMatricule);
      // console.log(HoldNom);
      // console.log(HoldPrenom);
      // console.log(HoldDateDeRecrutement);
      // console.log(HoldTypeContrat);
      // console.log(HoldDateDebut);
      // console.log(HoldDateFin);
      // console.log(HoldFunction);
      // console.log(HoldTypeCalander);
      // console.log(HoldRémunéation);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepperElements = (step) => {
    switch (step) {
      case 0: {
        return (
          <Identite
            HoldMatricule={HoldMatricule}
            SetHoldMatricule={SetHoldMatricule}
            HoldNom={HoldNom}
            SetHoldNom={SetHoldNom}
            HoldPrenom={HoldPrenom}
            SetHoldPrenom={SetHoldPrenom}
            HoldDateDeRecrutement={HoldDateDeRecrutement}
            SetHoldDateDeRecrutement={SetHoldDateDeRecrutement}
          />
        );
        break;
      }
      case 1: {
        return (
          <Contrat
            TypeContrat={TypeContrat}
            TypeFonction={TypeFonction}
            TypeCalender={TypeCalender}
            TypeRémunération={TypeRémunération}
            HoldTypeContrat={HoldTypeContrat}
            SetHoldTypeContrat={SetHoldTypeContrat}
            HoldDateDebut={HoldDateDebut}
            SetHoldDateDebut={SetHoldDateDebut}
            HoldDateFin={HoldDateFin}
            SetHoldDateFin={SetHoldDateFin}
            HoldFunction={HoldFunction}
            SetHoldFunction={SetHoldFunction}
            HoldTypeCalander={HoldTypeCalander}
            SetHoldTypeCalander={SetHoldTypeCalander}
            HoldRémunéation={HoldRémunéation}
            SetHoldRémunéation={SetHoldRémunéation}
          />
        );
        break;
      }
      case 2: {
        return <Box>Step 3</Box>;
        break;
      }
      default: {
        return <Box>No Step</Box>;
        break;
      }
    }
  };

  return (
    <Box sx={{}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Nouveau employee</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {StepperElements(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Retour
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1
                ? "Terminer"
                : "L'étape suivante"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default AddEmployeeStepperComponenet;
