import axios from "axios";

export const GetSaiSession = async () => {
  let respo;
  try {
    respo = await axios.get("SaiSession");
  } catch (error) {
    console.log(error);
  }

  return respo?.data ? respo?.data : null;
};

export const AuthenticateUser = async (company, username, password) => {
  let respo;
  try {
    respo = await axios.get("GetTable", {
      headers: {
        Client: company,
        TableName: "Opera",
        SelectedFields: "Nom_ope,MotPasse1_ope",
        Condition: ` where ((Nom_ope="${username}") AND (MotPasse1_ope = "${password}"))`,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return respo?.data ? respo?.data : null;
};
