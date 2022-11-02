import React, { useState } from "react";
import BaseConfigurationCard from "../Shared/BaseConfigurationCard";


function ConfigurationTypesDePretsComponenet({
  title,
  tableName,
  columnTemplate,
}) {
  const [codeHolder, setCodeHolder] = useState("");
  const [labelHolder, setLabelHolder] = useState("");
  const [Interet, setInteret] = useState("");

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
      placeHolderName: "Prêt soumis à un intérêt",
      setFieldHolder: setInteret,
      readFieldHolder: Interet,
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

export default ConfigurationTypesDePretsComponenet;
