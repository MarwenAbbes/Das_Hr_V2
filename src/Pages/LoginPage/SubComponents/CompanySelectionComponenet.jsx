import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

function CompanySelectionComponenet({ data, erros }) {
  const [age, setAge] = React.useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: "70%" }} size="small">
      <InputLabel id="demo-select-small">Entreprise</InputLabel>
      <Select
        labelId="demo-select-small"
        id="Company"
        value={age}
        label="Entreprise"
        onChange={handleChangeAge}
        name="Company"
      >
        {data.map((company, index) => (
          <MenuItem key={index} value={company}>
            {company}
          </MenuItem>
        ))}
      </Select>
      <Typography sx={{ color: "red" }}>{erros.Company}</Typography>
    </FormControl>
  );
}

export default CompanySelectionComponenet;
