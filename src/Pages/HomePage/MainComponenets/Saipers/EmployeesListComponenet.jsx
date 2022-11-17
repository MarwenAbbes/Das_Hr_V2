import {
  Box,
  Button,
  CardHeader,
  Collapse,
  Divider,
  FormLabel,
  Input,
  InputAdornment,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { userContext } from "../../../../Contexts/UserContext";
import { GetTable } from "../Codifications/DataController";
import { SaipersSelectedFields } from "../Codifications/Utils/Consts";
import UserCard from "./SubComponenets/UserCardComponenent";
import ReactLoading from "react-loading";
import UsersListComponenet from "./SubComponenets/UsersListComponenet";
import { ArrowDropDown, Search } from "@mui/icons-material";
import UserInfoElementComponenet from "./SubComponenets/UserInfoElementComponenet";
import AddEmployeeStepperComponenet from "./SubComponenets/AddEmployeeStepperComponenet";
import UserControlHeaderComponenet from "./SubComponenets/UserControlHeaderComponenet";

function EmployeesListComponenet() {
  const { userContextState, SetuserContextState } = useContext(userContext);
  const ClientDB = localStorage.getItem("company");
  //***************************************************************************** */
  const [saipers, setSaipers] = useState({ persons: [] });
  const [tabcate, setTabcate] = useState();
  const [TabVert, SetTabVert] = useState();
  const [TabCatB, SetTabCatB] = useState();
  const [SaiSite, SetSaiSite] = useState();
  const [TabNatu, SetTabNatu] = useState();
  const [TabCale, SetTabCale] = useState();
  const [TabPaie, SetTabPaie] = useState();
  const [TabCont, SetTabCont] = useState();

  const [loading, setLoading] = useState(true);
  const [Mode, SetMode] = useState("Consultation");
  const [
    InformationsPersonnellesCollapse,
    SetInformationsPersonnellesCollapse,
  ] = useState(true);
  const [RémunérationCollapse, SetRémunérationCollapse] = useState(true);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [PersonFunction, SetPersonFunction] = useState("");
  const [PersonService, SetPersonService] = useState("");
  const [PersonCategory, SetPersonCategory] = useState("");
  const [PersonSite, SetPersonSite] = useState("");
  const [PersonNationalite, SetPersonNationalite] = useState("");
  const [PersonTypeCalender, SetPersonTypeCalender] = useState("");
  const [PersonRegimeSalaire, SetPersonRegimeSalaire] = useState("");

  const [selectedPerson, setSelectedPerson] = useState({});
  const [searchResult, SetSearchResult] = useState({ persons: [] });
  //**************************************************************************** */

  let personInfos = {};
  useEffect(() => {
    if (saipers.persons.length <= 1) {
      GetTable(ClientDB, "Saipers").then(
        (response) => (
          setSaipers({ persons: response }),
          SetSearchResult({ persons: response }),
          GetTable(ClientDB, "Tabcate").then(
            (response) => (
              setTabcate(response),
              GetTable(ClientDB, "TabVert").then(
                (response) => (
                  SetTabVert(response),
                  GetTable(ClientDB, "TabCatB").then(
                    (response) => (
                      SetTabCatB(response),
                      GetTable(ClientDB, "SaiSite").then(
                        (response) => (
                          SetSaiSite(response),
                          GetTable(ClientDB, "TabNatu").then(
                            (response) => (
                              SetTabNatu(response),
                              GetTable(ClientDB, "TabCale").then(
                                (response) => (
                                  SetTabCale(response),
                                  GetTable(ClientDB, "TabPaie").then(
                                    (response) => (
                                      SetTabPaie(response),
                                      GetTable(ClientDB, "TabCont").then(
                                        (response) => SetTabCont(response)
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }

    setLoading(
      !(
        tabcate !== undefined &&
        TabVert !== undefined &&
        TabCatB !== undefined &&
        SaiSite !== undefined &&
        TabNatu !== undefined &&
        TabCale !== undefined &&
        TabPaie !== undefined &&
        TabCont !== undefined
      )
    );
  }, [
    saipers,
    tabcate,
    TabVert,
    TabCatB,
    SaiSite,
    TabNatu,
    TabCale,
    TabPaie,
    TabCont,
  ]);

  const handleSearchChange = (e) => {
    if (!e.target.value) return SetSearchResult(saipers);

    const resultArray = saipers.persons.filter(
      (person) =>
        person.Nom.includes(e.target.value) ||
        person.Prenom.includes(e.target.value)
    );

    SetSearchResult({ persons: resultArray });
  };
  const handleListItemClick = (index, person) => {
    setSelectedIndex(index);
    setSelectedPerson(person);
    const CategoryIndex = tabcate.findIndex(
      (cate) => cate.CODE === person.Categorie
    );
    const ServiceIndex = TabCatB.findIndex(
      (cate) => cate.CODE === person.CategorieB
    );
    const CategoryBIndex = TabCatB.findIndex(
      (cate) => cate.CODE === person.CategorieB
    );
    const SiteIndex = SaiSite.findIndex(
      (cate) => cate.Compteur === person.Code_Site
    );
    const NationaliteIndex = TabNatu.findIndex(
      (cate) => cate.CODE === person.Nationalite
    );
    const TypeCalenderIndex = TabCale.findIndex(
      (cate) => cate.CODE === person.Horaire
    );
    const TypePaieIndex = TabPaie.findIndex(
      (cate) => cate.CODE === person.AssisePaie
    );

    SetPersonFunction(
      tabcate[CategoryIndex].LABEL ? tabcate[CategoryIndex].LABEL : ""
    );
    SetPersonService(
      TabVert[ServiceIndex].LABEL ? TabVert[ServiceIndex].LABEL : ""
    );

    SetPersonCategory(
      TabCatB[CategoryBIndex].LABEL ? TabCatB[CategoryBIndex].LABEL : ""
    );
    if (SaiSite.NomSite !== undefined)
      SetPersonSite(
        SaiSite[SiteIndex].NomSite ? SaiSite[SiteIndex].NomSite : ""
      );
    SetPersonNationalite(
      TabNatu[NationaliteIndex].LABEL ? TabNatu[NationaliteIndex].LABEL : ""
    );
    SetPersonTypeCalender(
      TabCale[TypeCalenderIndex].LABEL ? TabCale[TypeCalenderIndex].LABEL : ""
    );
    SetPersonRegimeSalaire(
      TabPaie[TypePaieIndex].LABEL ? TabPaie[TypePaieIndex].LABEL : ""
    );

    SetMode("Consultation");
  };

  return (
    <Box sx={{ margin: "0px", padding: "0px" }}>
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
            height={"3%"}
            width={"8%"}
          />
        </Box>
      )}
      {!loading && (
        <Box>
          <Box
            style={{ maxHeight: 654, overflow: "auto" }}
            sx={{
              width: "20%",
              float: "left",
            }}
          >
            <Input
              sx={{ height: "3em", width: "100%" }}
              startAdornment={
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              }
              type="search"
              onChange={handleSearchChange}
            />
            <UsersListComponenet
              saipers={searchResult}
              tabcate={tabcate}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
            />
          </Box>
          <Box sx={{ width: "80%", float: "right" }}>
            <UserControlHeaderComponenet HandelFunction={SetMode} />

            {Mode === "Add" && (
              <Box sx={{ marginTop: "5%" }}>
                <AddEmployeeStepperComponenet
                  TypeContrat={TabCont}
                  TypeFonction={tabcate}
                  TypeCalender={TabCale}
                  TypeRémunération={TabPaie}
                />
              </Box>
            )}
            {selectedPerson.Nom !== undefined && Mode === "Consultation" && (
              <Box>
                <CardHeader
                  title={selectedPerson.Nom + " " + selectedPerson.Prenom}
                />
                <Divider />
                <FormLabel sx={{ marginLeft: "0.9em" }} component="legend">
                  Identité
                </FormLabel>
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", paddingLeft: "2em" }}
                >
                  <UserInfoElementComponenet
                    PersonSite={PersonSite}
                    title={"Site"}
                  />
                  <UserInfoElementComponenet
                    PersonSite={selectedPerson.Matricule}
                    title={"Matricule"}
                  />
                  <UserInfoElementComponenet
                    PersonSite={PersonFunction}
                    title={"Fonction"}
                  />
                  <UserInfoElementComponenet
                    PersonSite={PersonService}
                    title={"Service"}
                  />
                  <UserInfoElementComponenet
                    PersonSite={PersonCategory}
                    title={"Catégorie"}
                  />
                </Box>
                <br />
                <Box sx={{ display: "flex" }}>
                  <FormLabel sx={{ marginLeft: "0.9em" }} component="legend">
                    Informations personnelles
                  </FormLabel>
                  <ArrowDropDown
                    onClick={() => {
                      SetInformationsPersonnellesCollapse(
                        !InformationsPersonnellesCollapse
                      );
                    }}
                  />
                </Box>
                <Collapse in={InformationsPersonnellesCollapse}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      paddingLeft: "2em",
                    }}
                  >
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.DateNaissance}
                      title={"Date de naissance"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.LieuNaissance}
                      title={" Lieu de naissance"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.Sexe}
                      title={"Sexe"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.NomJeuneFille}
                      title={"Nom de jeune fille"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={PersonNationalite}
                      title={"Nationalité"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.NumCI}
                      title={"N° de la C. I."}
                    />

                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.DateCI}
                      title={"Date de la C. I."}
                    />
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.Email}
                      title={"E-mail"}
                    />
                  </Box>
                </Collapse>
                <br />
                <Box sx={{ display: "flex" }}>
                  <FormLabel sx={{ marginLeft: "0.9em" }} component="legend">
                    Rémunération
                  </FormLabel>
                  <ArrowDropDown
                    onClick={() => {
                      SetRémunérationCollapse(!RémunérationCollapse);
                    }}
                  />
                </Box>
                <Collapse in={RémunérationCollapse}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      paddingLeft: "2em",
                    }}
                  >
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.DateRectrutement}
                      title={"Date de recrutement"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={PersonTypeCalender}
                      title={"Type du calendrier"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={PersonRegimeSalaire}
                      title={"Régime du salaire"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.SalaireBase}
                      title={"Salaire de base"}
                    />
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.NumCS}
                      title={"N°de la C. S."}
                    />
                    <UserInfoElementComponenet
                      PersonSite={selectedPerson.NumCNSS}
                      title={" N° de la CNSS"}
                    />
                  </Box>
                </Collapse>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default EmployeesListComponenet;
