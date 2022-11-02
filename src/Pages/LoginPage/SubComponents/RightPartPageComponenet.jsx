import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Copyrights from "../../../Components/Shared/Copyrights";
import EmailHolderComponenet from "./EmailHolderComponenet";
import PasswordHolderComponent from "./PasswordHolderComponent";
import CompanySelectionComponenet from "./CompanySelectionComponenet";
import { PrimaryColor } from "../../../assets/Colors";
import { removeDuplicates } from "../../../Utils/Utils";
import { AuthenticateUser, GetSaiSession } from "../DataController";
import { validateForm } from "../Validation";
import { userContext } from "../../../Contexts/UserContext";
import CustomAlert from "../../../Components/Shared/CustomAlert";

function RightPartPageComponenet() {
  const { userContextState, SetuserContextState } = useContext(userContext);
  const navigate = useNavigate();
  //************************STATES********************************
  const [UsersListState, SetUsersListState] = useState([{ a: 0 }]);
  const [CompaniesState, SetCompaniesState] = useState([]);
  const [FormErrors, SetFormErrors] = useState({
    Company: "",
    email: "",
    password: "",
  });
  const [DisplayAlert, SetDisplayAlert] = useState(false);
  //************************END STATES********************************

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validateForm(data, SetFormErrors)) {
      AuthenticateUser(
        data.get("Company"),
        data.get("email"),
        data.get("password")
      ).then((value) => {
        if (value.length === 1) {
          SetuserContextState({
            username: data.get("email"),
            company: data.get("Company"),
          });
          localStorage.setItem("user", data.get("email"));
          localStorage.setItem("company", data.get("Company"));
          navigate("/");
        } else {
          SetDisplayAlert(true);
        }
      });
    }
  };

  useEffect(() => {
    let Companies = [];
    const user = localStorage.getItem("user");
    if (
      user !== "" 
      // &&
      // userContextState !== "" &&
      // userContextState.username == user
    ) {
      navigate("/");
    }
    if (UsersListState === undefined || UsersListState.length <= 1) {
      GetSaiSession().then((respo) => {
        SetUsersListState(respo);
      });
    }
    if (UsersListState.length > 1) {
      UsersListState.forEach((user) => {
        Companies.push(user.NomSociete.toUpperCase());
      });
      SetCompaniesState(removeDuplicates(Companies));
    }
  }, [UsersListState]);

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <CustomAlert
        closeFunction={SetDisplayAlert}
        open={DisplayAlert}
        msg={"Le nom d'utilisateur ou le mot de passe peut être erroné"}
        severity={"error"}
      />

      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: PrimaryColor }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          BIENVENUE
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <CompanySelectionComponenet
            data={CompaniesState}
            erros={FormErrors}
          />
          <EmailHolderComponenet erros={FormErrors} />
          <PasswordHolderComponent erros={FormErrors} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: PrimaryColor,
              ":hover": { backgroundColor: PrimaryColor },
            }}
          >
            Connexion
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Mot de passe oublié?
              </Link>
            </Grid>
          </Grid>
          <Copyrights sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
}

export default RightPartPageComponenet;
