import { Add, DeleteForever, Edit } from "@mui/icons-material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { Container, Row } from "react-bootstrap";
import InputDBField from "./InputDBField";
import { DeleteFromTable, EditTable } from "../DataController";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ControlDBBtn({
  onClickAddFunction,
  selectedIndex,
  indexColumn,
  ClientDB,
  tableDB,
  refreshFunction,
  refrechselectedIndex,
  fillingTemplateFunctions,
  columns,
  selectedRow,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [dialogBoxShow, setDialogBoxShow] = useState(false);
  const [dialogBoxResult, setDialogBoxResult] = useState(false);
  const [alertMessageClose, setAlertMessageClose] = useState(false);
  const [aletMessageType, setAlertMessageType] = useState("");
  const [alertMessageMessage, setAlertMessageMessage] = useState("");

  const deleteFunction = async () => {
    if (selectedIndex >= 0) {
      setDialogBoxShow(true);
    }
  };

  const editFunction = () => {
    if (selectedIndex >= 0) {
      for (let i = 0; i < columns.length - 1; i++) {
        fillingTemplateFunctions[i].setFieldHolder(
          selectedRow[columns[i].dataField]
        );
      }
      setOpenModal(true);
    }
  };

  const UpdateValuesToDB = async () => {
    let labels = "";
    for (let i = 0; i <= columns.length - 1; i++) {
      if (i < columns.length - 1)
        labels += `${columns[i].dataField}="${fillingTemplateFunctions[i].readFieldHolder}",`;
      else
        labels += `${columns[i].dataField}="${fillingTemplateFunctions[i].readFieldHolder}"`;
    }

    EditTable(
      ClientDB,
      tableDB,
      labels,
      `${columns[0].dataField}="${selectedRow[columns[0].dataField]}"`
    )
      .then(() => {
        setAlertMessageMessage("L'enregistrement a été mis à jour avec succès");
        setAlertMessageType("success");
        setAlertMessageClose(true);
        refreshFunction();
      })
      .catch((e) => {
        setAlertMessageMessage("Échec de la mis à jour de l'enregistrement");
        setAlertMessageType("error");
        setAlertMessageClose(true);
      });
  };

  return (
    <Box>
      <DeleteForever
        sx={{
          marginRight: "10px",
          color: "#ef5350",
          cursor: "pointer",
          float: "right",
          height: "28px",
          width: "25px",
        }}
        onClick={() => {
          deleteFunction(selectedIndex);
        }}
      />
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
          editFunction();
        }}
      />
      <Add
        onClick={() => onClickAddFunction()}
        sx={{
          float: "right",
          height: "30px",
          width: "30px",
          color: "#387573",
          cursor: "pointer",
          marginRight: "10px",
        }}
      />

      <Modal show={openModal} centered>
        <Modal.Header>
          <Modal.Title>Ajouter un nouveau regime du salaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box sx={{ display: "flex", alignContent: "center" }}>
            <Container>
              <Row>
                {fillingTemplateFunctions.map((archicture, index) => (
                  <InputDBField
                    key={index}
                    inputplaceHolder={archicture.placeHolderName}
                    setFieldHolder={archicture.setFieldHolder}
                    fieldType={archicture.fieldType}
                    value={archicture.readFieldHolder}
                  ></InputDBField>
                ))}
              </Row>
            </Container>
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button
            sx={{
              backgroundColor: "#d32f2f",
              color: "white",
              marginRight: "5px",
              "&:hover": { backgroundColor: "#ef5350", color: "white" },
            }}
            variant="secondary"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Annuler
          </Button>
          <Button
            variant="Success"
            sx={{
              backgroundColor: "#2e7d32",
              color: "white",
              "&:hover": { backgroundColor: "#4caf50", color: "white" },
            }}
            onClick={() => {
              UpdateValuesToDB();
              setOpenModal(false);
            }}
          >
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>

      <Dialog
        open={dialogBoxShow}
        onClose={() => setDialogBoxShow(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation de suppression"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Voulez-vous vraiment supprimer cet enregistrement ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogBoxShow(false)}>Annuler</Button>
          <Button
            onClick={async () => {
              DeleteFromTable(
                ClientDB,
                tableDB,
                `${indexColumn}="${selectedIndex}"`
              )
                .then(() => {
                  setAlertMessageMessage(
                    "L'enregistrement a été suprimer avec succès"
                  );
                  setAlertMessageType("success");
                  setAlertMessageClose(true);
                  refreshFunction();
                  refrechselectedIndex(-1);
                })
                .catch((e) => {
                  setAlertMessageMessage(
                    "Échec de la suppression  de l'enregistrement"
                  );
                  setAlertMessageType("error");
                  setAlertMessageClose(true);
                });
              setDialogBoxShow(false);
            }}
            autoFocus
          >
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alertMessageClose}
        autoHideDuration={2000}
        onClose={() => setAlertMessageClose(false)}
      >
        <Alert severity={aletMessageType} sx={{ width: "100%" }}>
          {alertMessageMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ControlDBBtn;
