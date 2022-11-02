import React, { useState } from "react";
import BaseConfigurationCard from "../Shared/BaseConfigurationCard";


function ConfigurationListDesBilletsComponenet({
  title,
  tableName,
  columnTemplate,
}) {
  const [codeHolder, setCodeHolder] = useState("");
  const [labelHolder, setLabelHolder] = useState("");
  const [Valeur_Billet, setValeur_Billet] = useState("");
  const [Utiliser, setUtiliser] = useState("");
  const fieldsAndDataTemplate = [
    {
      placeHolderName: "Code",
      setFieldHolder: setCodeHolder,
      readFieldHolder: codeHolder,
      fieldType: "number",
      value: "",
    },
    {
      placeHolderName: "Label",
      setFieldHolder: setLabelHolder,
      readFieldHolder: labelHolder,
      fieldType: "text",
      value: "",
    },
    {
      placeHolderName: "Montant",
      setFieldHolder: setValeur_Billet,
      readFieldHolder: Valeur_Billet,
      fieldType: "number",
      value: "",
    },
    {
      placeHolderName: "utilsé(e) pour le paiement en espèces",
      setFieldHolder: setUtiliser,
      readFieldHolder: Utiliser,
      fieldType: "text",
      value: "",
    },
  ];
  return (
    <BaseConfigurationCard
      title={title}
      tableName={tableName}
      columnTemplate={columnTemplate}
      fieldsAndDataTemplate={fieldsAndDataTemplate}
    />
  );
}

export default ConfigurationListDesBilletsComponenet;
