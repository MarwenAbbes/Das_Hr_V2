import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import axios from "axios";

import Copyrights from "../../../Components/Shared/Copyrights";
import EmailHolderComponenet from "./EmailHolderComponenet";
import PasswordHolderComponent from "./PasswordHolderComponent";
import CompanySelectionComponenet from "./CompanySelectionComponenet";
import { PrimaryColor } from "../../../assets/Colors";
import { useEffect } from "react";
import { useState } from "react";
import { removeDuplicates } from "../../../Utils/Utils";
import { AuthenticateUser, GetSaiSession } from "../DataController";

function RightPartPageComponenet() {
  //************************STATES********************************
  const [UsersListState, SetUsersListState] = useState([{ a: 0 }]);
  const [CompaniesState, SetCompaniesState] = useState([]);
  //************************END STATES********************************
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    AuthenticateUser(
      data.get("Company"),
      data.get("email"),
      data.get("password")
    ).then((value) => console.log(value.length));
  };

  useEffect(() => {
    let Companies = [];
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
          <CompanySelectionComponenet data={CompaniesState} />
          <EmailHolderComponenet />
          <PasswordHolderComponent />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: PrimaryColor }}
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
