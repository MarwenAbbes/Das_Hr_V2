import React, { useState } from "react";
import BaseConfigurationCard from "../Shared/BaseConfigurationCard";


function ConfigurationFonctionComponenet({ title, tableName, columnTemplate }) {
  const [codeHolder, setCodeHolder] = useState("");
  const [labelHolder, setLabelHolder] = useState("");
  const [nomSalaireBaseHolder, SetNomSalaireBaseHolder] = useState("");
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
      placeHolderName: "Nom Salaire Base",
      setFieldHolder: SetNomSalaireBaseHolder,
      readFieldHolder: nomSalaireBaseHolder,
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

export default ConfigurationFonctionComponenet;
