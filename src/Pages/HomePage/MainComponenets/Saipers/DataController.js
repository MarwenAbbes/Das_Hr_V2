import axios from "axios";

export const InsertEmployee = async (
  company,
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
) => {
  let respo;
  try {
    axios.get("AddEmployee", {
      headers: {
        Client: company,
        Name: HoldNom,
        Surname: HoldPrenom,
        RecrutementDate: HoldDateDeRecrutement,
        ContratType: HoldTypeContrat,
        Matricule: HoldMatricule,
        StartingrecrutementDate: HoldDateDebut,
        EndingrecrutementDate: HoldDateFin,
        Category: HoldFunction,
        Horaire: HoldTypeCalander,
        AssisePaie: HoldRémunéation,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return respo?.data ? respo?.data : null;
};

export const GetBultinPaie = async (company, SelectedMatricule) => {
  let respo;
  try {
    respo = await axios.get("BulletinsPaie", {
      headers: {
        UserName: "Marwen",
        Operation: "BulletinsPaie",
        Client: company,
        Site: "Empty",
        Matricule: SelectedMatricule,
        StartMonth: "03",
        EndMonth: "04",
        Year: "2022",
      },
    });
  } catch (error) {
    console.log(error);
  }
  return respo?.data ? respo?.data : null;
};
