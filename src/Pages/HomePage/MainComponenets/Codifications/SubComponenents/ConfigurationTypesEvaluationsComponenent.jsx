import React, { useState } from "react";
import BaseConfigurationCard from "../Shared/BaseConfigurationCard";

import { typesDevaluationsTableColumns } from "../Templates/ColumnsTemplates";

function ConfigurationTypesEvaluationsComponenent({
  title,
  tableName,
  columnTemplate,
}) {
  const [codeHolder, setCodeHolder] = useState("");
  const [labelHolder, setLabelHolder] = useState("");

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
  ];
  return (
    <BaseConfigurationCard
      title={title}
      tableName={tableName}
      columnTemplate={columnTemplate}
      fieldsAndDataTemplate={typesDevaluationsTableColumns}
    />
  );
}

export default ConfigurationTypesEvaluationsComponenent;
