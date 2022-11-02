import React, { useState } from "react";
import BaseConfigurationCard from "../Shared/BaseConfigurationCard";

function ConfigurationRegimeDeSalaireComponenent({
  columnTemplate,
  tableName,
  title,
}) {
  const [codeHolder, setCodeHolder] = useState("");
  const [labelHolder, setLabelHolder] = useState("");
  const [smigHolder, setSmigHoler] = useState("");


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
      placeHolderName: "SMIG",
      setFieldHolder: setSmigHoler,
      readFieldHolder: smigHolder,
      fieldType: "number",
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

export default ConfigurationRegimeDeSalaireComponenent;
