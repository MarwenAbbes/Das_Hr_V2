import React, { useState } from "react";
import BaseConfigurationCard from "../Shared/BaseConfigurationCard";


function ConfigurationCodeCNSSComponenet({ title, tableName, columnTemplate }) {
  const [codeHolder, setCodeHolder] = useState("");
  const [labelHolder, setLabelHolder] = useState("");
  const [CodeCnssInformatique, setCodeCnssInformatique] = useState("");
  const [CodeCnssExploitation, setCodeCnssExploitation] = useState("");
  const [CodeCnssFinancier, setCodeCnssFinancier] = useState("");
  const [CotisationTotal, setCotisationTotal] = useState("");
  const [AvantageCNSS, setAvantageCNSS] = useState("");
  const [CodeParDefaut, setCodeParDefaut] = useState("");
  const [NbMoisAvantageCnss, setNbMoisAvantageCnss] = useState("");

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
      placeHolderName: "Code Cnss Informatique",
      setFieldHolder: setCodeCnssInformatique,
      readFieldHolder: CodeCnssInformatique,
      fieldType: "number",
      value: "",
    },
    {
      placeHolderName: "Code Cnss Exploitation",
      setFieldHolder: setCodeCnssExploitation,
      readFieldHolder: CodeCnssExploitation,
      fieldType: "number",
      value: "",
    },
    {
      placeHolderName: "Code Cnss Financier",
      setFieldHolder: setCodeCnssFinancier,
      readFieldHolder: CodeCnssFinancier,
      fieldType: "number",
      value: "",
    },
    {
      placeHolderName: "Cotisation Total",
      setFieldHolder: setCotisationTotal,
      readFieldHolder: CotisationTotal,
      fieldType: "number",
      value: "",
    },
    {
      placeHolderName: "Avantage CNSS",
      setFieldHolder: setAvantageCNSS,
      readFieldHolder: AvantageCNSS,
      fieldType: "text",
      value: "",
    },
    {
      placeHolderName: "Code Par Defaut",
      setFieldHolder: setCodeParDefaut,
      readFieldHolder: CodeParDefaut,
      fieldType: "text",
      value: "",
    },
    {
      placeHolderName: "Nb Mois Avantage Cnss",
      setFieldHolder: setNbMoisAvantageCnss,
      readFieldHolder: NbMoisAvantageCnss,
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

export default ConfigurationCodeCNSSComponenet;
