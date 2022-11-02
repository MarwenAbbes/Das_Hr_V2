import { Box, List } from "@mui/material";
import React from "react";
import UserCard from "./UserCardComponenent";

function UsersListComponenet({
  saipers,
  tabcate,
  selectedIndex,
  handleListItemClick,
}) {
  return saipers.persons.map((person, index) => (
    <Box
      sx={{ maxHeight: "200px", overflow: "auto" }}
      onClick={() => handleListItemClick(index, person)}
    >
      <List component="nav">
        <UserCard
          name={person.Nom + " " + person.Prenom}
          title={
            tabcate[
              tabcate.map((object) => object.CODE).indexOf(person.Categorie)
            ].LABEL
          }
          index={index}
          selectedIndexI={selectedIndex}
          key={index}
        />
      </List>
    </Box>
  ));
}

export default UsersListComponenet;
