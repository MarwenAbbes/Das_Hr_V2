import { ArrowDropDown } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
} from "@mui/material";
import { useContext } from "react";
import { React, useState } from "react";
import ReactLoading from "react-loading";
import { userContext } from "../../../../../Contexts/UserContext";
import { GetTable } from "../DataController";
import Indim from "../Shared/Indim";

function IndimnitesComponenet({ Client }) {
  const { userContextState, SetuserContextState } = useContext(userContext);

  const [IndiNom, setIndiNom] = useState();
  const [IndiVal, setIndiVal] = useState();
  const [collapsed, setcollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [indexPlafondSocial, setindexPlafondSocial] = useState(-1);
  const [indexPlafondFiscal, setindexPlafondFiscal] = useState(-1);
  const [indexNbJours, setindexNbJours] = useState(-1);
  const [indexUnitaire, setindexUnitaire] = useState(-1);

  const LabelsArray = [
    {
      label: "Libellé",
      type: "text",
      value: "",
      width: 400,
      code: "IndiNom",
    },
    {
      label: "Abréviation",
      type: "text",
      value: "",
      width: 130,
      code: "IndiNom",
    },
    {
      label: "Plafond d'éxo.sociale",
      type: "text",
      value: "",
      width: 250,
      code: "IndiVal",
    },
    {
      label: "Plafond d'éxo.fiscale",
      type: "text",
      value: "",
      width: 200,
      code: "IndiVal",
    },
    {
      label: "Nb Jours",
      type: "text",
      value: "",
      width: 200,
      code: "IndiVal",
    },
  ];

  const IndimsNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const GetIndiNom = () => {
    GetTable(userContextState.company, "IndiNom")
      .then((response) => {
        console.log(IndiVal);
        setIndiNom(response);

        GetIndiVal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetIndiVal = () => {
    GetTable(userContextState.company, "IndiVal")
      .then((response) => {
        setIndiVal(response);

        if (IndiVal !== undefined) {
          setindexPlafondSocial(
            IndiVal.findIndex((cate) => cate.Matricule === "99999996")
          );

          setindexPlafondFiscal(
            IndiVal.findIndex((cate) => cate.Matricule === "99999997")
          );

          setindexNbJours(
            IndiVal.findIndex((cate) => cate.Matricule === "99999994")
          );

          setindexUnitaire(
            IndiVal.findIndex((cate) => cate.Matricule === "99999995")
          );
        }

        setLoading(false);
        setcollapsed(!collapsed);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      <Card
        sx={{
          margin: "10px",
          height: "500",
        }}
      >
        <CardHeader
          title={"Indimnités"}
          action={
            <IconButton
              aria-label="openCard"
              onClick={() => {
                setcollapsed(!collapsed);
                if (!collapsed) {
                  GetTable(userContextState.company, "IndiNom")
                    .then((response) => {
                      setIndiNom(response);

                      GetIndiVal();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }}
            >
              <ArrowDropDown />
            </IconButton>
          }
        />
        <Collapse in={collapsed}>
          <CardContent>
            {IndiVal === undefined && IndiNom === undefined && (
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
            {IndiVal !== undefined && IndiNom !== undefined && (
              <Box>
                {IndimsNumbers.map((val, index) => (
                  <Indim
                    key={index}
                    counter={index + 1}
                    LabelsArray={LabelsArray}
                    vlauesIndiNom={IndiNom}
                    valuesIndiVal={IndiVal}
                    indexPlafondSocial={indexPlafondSocial}
                    indexPlafondFiscal={indexPlafondFiscal}
                    indexNbJours={indexNbJours}
                    indexUnitaire={indexUnitaire}
                    Key={index}
                  />
                ))}
              </Box>
            )}
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export default IndimnitesComponenet;
