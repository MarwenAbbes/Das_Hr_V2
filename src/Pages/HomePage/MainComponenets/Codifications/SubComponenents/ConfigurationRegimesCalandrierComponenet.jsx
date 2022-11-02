import React, { useState } from "react";
import BaseConfigurationCard from "../Shared/BaseConfigurationCard";


function ConfigurationRegimesCalandrierComponenet({
  title,
  tableName,
  columnTemplate,
}) {
  const [codeHolder, setCodeHolder] = useState("");
  const [labelHolder, setLabelHolder] = useState("");
  const [horaireParDefautHolder, setHoraireParDefaut] = useState("");

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
      placeHolderName: "Horaire par defaut",
      setFieldHolder: setHoraireParDefaut,
      readFieldHolder: horaireParDefautHolder,
      fieldType: "checkbox",
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

export default ConfigurationRegimesCalandrierComponenet;
