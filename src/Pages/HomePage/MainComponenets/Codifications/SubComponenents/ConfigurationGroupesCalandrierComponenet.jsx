import React, { useState } from "react";
import BaseConfigurationCard from "../Shared/BaseConfigurationCard";


function ConfigurationGroupesCalandrierComponenet({
  title,
  tableName,
  columnTemplate,
}) {
  const [codeHolder, setCodeHolder] = useState("");
  const [labelHolder, setLabelHolder] = useState("");
  const [couleurHolder, setCouleurHolder] = useState("");
  const [attacherCalendrierFixeHolder, setAttacherCalendrierFixe] =
    useState("");

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
      placeHolderName: "Couleur",
      setFieldHolder: setCouleurHolder,
      readFieldHolder: couleurHolder,
      fieldType: "number",
      value: "",
    },
    {
      placeHolderName: "Attacher calendrier fixe",
      setFieldHolder: setAttacherCalendrierFixe,
      readFieldHolder: attacherCalendrierFixeHolder,
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

export default ConfigurationGroupesCalandrierComponenet;
