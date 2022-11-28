import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { React, useState, useContext } from "react";

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

import InputDBField from "./InputDBField";
import TestTable from "./TestTable";
import ReactLoading from "react-loading";
import { GetTable, InsertToTable } from "../DataController";
import CustomAlert from "../../../../../Components/Shared/CustomAlert";
import { GetLabels, GetValues } from "../Utils/Utils";
import { userContext } from "../../../../../Contexts/UserContext";

function BaseConfigurationCard({
  fieldsAndDataTemplate,
  columnTemplate,
  tableName,
  title,
}) {
  const { userContextState, SetuserContextState } = useContext(userContext);

  const [DisplayAlert, SetDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    type: "",
  });

  const [tableRows, setTableRows] = useState([]);
  const [collapsed, setCollepsed] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const CreateTableData = (reponse) => {
    const rows = [];
    for (var i in reponse) {
      const tempRow = undefined || {};
      tempRow.id = reponse[i][columnTemplate[0].dataField];
      for (let j = 0; j <= columnTemplate.length - 1; j++) {
        tempRow[columnTemplate[j].dataField] =
          reponse[i][columnTemplate[j].dataField];
      }
      rows.push({
        ...tempRow,
      });
    }
    setTableRows([]);
    for (let i = 0; i < rows.length; i++) {
      setTableRows((tableRows) => [...tableRows, rows[i]]);
    }
  };

  const getMeData = async () => {
    console.log(userContextState);
    GetTable(userContextState.company, tableName, "*", "true").then(
      (response) => {
        CreateTableData(response, columnTemplate, setTableRows);
        setLoading(false);
      }
    );
  };

  const addValuesToDB = async () => {
    InsertToTable(
      userContextState.company,
      tableName,
      GetLabels(columnTemplate),
      GetValues(columnTemplate, fieldsAndDataTemplate)
    )
      .then(() => {
        setAlertMessage({
          message: "L'enregistrement a été ajouté avec succès",
          type: "success",
        });
        SetDisplayAlert(true);
        getMeData();
      })
      .catch((e) => {
        setAlertMessage({
          message: "Échec de l'ajout de l'enregistrement",
          type: "error",
        });
        SetDisplayAlert(true);
      });
  };

  return (
    <Card
      sx={{
        margin: "10px",
        height: "500",
      }}
    >
      <CardHeader
        title={title}
        action={
          <IconButton
            aria-label="openCard"
            onClick={() => {
              setCollepsed(!collapsed);
              if (!collapsed) getMeData();
            }}
          >
            {collapsed ? <ArrowDropUp /> : <ArrowDropDown />}
          </IconButton>
        }
      />
      <Collapse in={collapsed}>
        <CardContent>
          <Box>
            <Modal show={openModal} centered>
              <Modal.Header>
                <Modal.Title>Ajouter un nouveau regime du salaire</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Box sx={{ display: "flex", alignContent: "center" }}>
                  <Container>
                    <Row>
                      {fieldsAndDataTemplate.map((archicture, index) => (
                        <InputDBField
                          key={index}
                          inputplaceHolder={archicture.placeHolderName}
                          setFieldHolder={archicture.setFieldHolder}
                          fieldType={archicture.fieldType}
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
                  Fermer 
                </Button>
                <Button
                  variant="Success"
                  sx={{
                    backgroundColor: "#2e7d32",
                    color: "white",
                    "&:hover": { backgroundColor: "#4caf50", color: "white" },
                  }}
                  onClick={() => {
                    addValuesToDB();
                    fieldsAndDataTemplate.map((archicture) => {
                      archicture.setFieldHolder("");
                    });
                    setOpenModal(false);
                  }}
                >
                  Enregistrer
                </Button>
              </Modal.Footer>
            </Modal>
            {!loading && (
              <TestTable
                onClickAddFunction={() => {
                  setOpenModal(true);
                }}
                tableDB={tableName}
                clientDB={userContextState.company}
                refreshFunction={getMeData}
                fillingTemplateFunctions={fieldsAndDataTemplate}
                col={columnTemplate}
                data={tableRows}
              />
            )}
            {loading && (
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ReactLoading
                  type={"cylon"}
                  color={"#387573"}
                  height={"2%"}
                  width={"5%"}
                />
              </Box>
            )}
          </Box>
        </CardContent>
      </Collapse>
      <CustomAlert
        closeFunction={SetDisplayAlert}
        open={DisplayAlert}
        msg={alertMessage.message}
        severity={alertMessage.type}
      />
    </Card>
  );
}

export default BaseConfigurationCard;
