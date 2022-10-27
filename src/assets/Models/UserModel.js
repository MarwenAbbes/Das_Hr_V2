export default class UserModel {
  constractor(
    Compteur,
    NomSociete,
    NomServeur,
    NomSession,
    NumClient,
    NomSite,
    AccessMFHP,
    PrinterName
  ) {
    this.NomServeur = NomServeur;
    this.Compteur = Compteur;
    this.NomSociete = NomSociete;
    this.NomSession = NomSession;
    this.NomSite = NomSite;
    this.NumClient = NumClient;
    this.AccessMFHP = AccessMFHP;
    this.PrinterName = PrinterName;
  }
}
