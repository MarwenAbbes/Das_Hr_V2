export const validateForm = (data, SetFormErrors) => {
  let isValid = true;
  let err = {};
  if (data.get("Company") === "") {
    err.Company = "Le nom de l'entreprise est vide";
    isValid = isValid && false;
  }
  if (data.get("email") === "") {
    err.email = "Le nom d'utilisateur est vide";
    isValid = isValid && false;
  }
  if (data.get("password") === "") {
    err.password = "Le mot de passe est vide";
    isValid = isValid && false;
  }
  SetFormErrors(err);
  return isValid;
};
