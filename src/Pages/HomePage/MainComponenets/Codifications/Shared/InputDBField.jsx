import { Input } from "@mui/material";
import React from "react";

function InputDBField({ inputplaceHolder, fieldType, setFieldHolder, value }) {
  return (
    <Input
      sx={{ marginRight: "20px", marginBottom: "30px" }}
      placeholder={inputplaceHolder}
      onChange={(e) => {
        setFieldHolder(e.target.value);
      }}
      type={fieldType}
      value={value}
    />
  );
}

export default InputDBField;
