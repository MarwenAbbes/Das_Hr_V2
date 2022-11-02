import { Box, Button, List, Typography } from "@mui/material";
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

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [CategoryIndex, setCategoryIndex] = useState(0);
  const [ServiceIndex, SetServiceIndex] = useState(0);
  const [CategoryBIndex, SetCategoryBIndex] = useState(0);
  const [SiteIndex, SetSiteIndex] = useState(0);
  const [NationaliteIndex, SetNationaliteIndex] = useState(0);
  const [TypeCalenderIndex, SetTypeCalenderIndex] = useState(0);
  const [TypePaieIndex, SetTypePaieIndex] = useState(0);
  const [typeContratIndex, SetTypeContrat] = useState(0);

  const [PersonFunction, SetPersonFunction] = useState("");
  const [PersonService, SetPersonService] = useState("");
  const [PersonCategory, SetPersonCategory] = useState("");
  const [PersonSite, SetPersonSite] = useState("");
  const [PersonNationalite, SetPersonNationalite] = useState("");
  const [PersonTypeCalender, SetPersonTypeCalender] = useState("");
  const [PersonRegimeSalaire, SetPersonRegimeSalaire] = useState("");

  const [selectedPerson, setSelectedPerson] = useState({});
  //**************************************************************************** */

  useEffect(() => {
    if (saipers.persons.length <= 1) {
      GetTable(ClientDB, "Saipers").then(
        (response) => (
          setSaipers({ persons: response }),
          GetTable(ClientDB, "tabcate").then(
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

  const handleListItemClick = (index, person) => {
    setSelectedIndex(index);
    setSelectedPerson(person);

    setCategoryIndex(
      tabcate.findIndex((cate) => cate.CODE === person.Categorie)
    );
    SetServiceIndex(TabVert.findIndex((cate) => cate.CODE === person.Service));
    SetCategoryBIndex(
      TabCatB.findIndex((cate) => cate.CODE === person.CategorieB)
    );
    SetSiteIndex(
      SaiSite.findIndex((cate) => cate.Compteur === person.Code_Site)
    );
    SetNationaliteIndex(
      TabNatu.findIndex((cate) => cate.CODE === person.Nationalite)
    );
    SetTypeCalenderIndex(
      TabCale.findIndex((cate) => cate.CODE === person.Horaire)
    );
    SetTypePaieIndex(
      TabPaie.findIndex((cate) => cate.CODE === person.AssisePaie)
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
  };

  return (
    <Box sx={{margin:"0px", padding: "0px"}}>
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
            <UsersListComponenet
              saipers={saipers}
              tabcate={tabcate}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
            />
          </Box>
          <Box sx={{ width: "80%", float: "right" }}> hiii</Box>
        </Box>
      )}
    </Box>
  );
}

export default EmployeesListComponenet;
