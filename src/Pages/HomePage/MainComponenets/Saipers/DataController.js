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
