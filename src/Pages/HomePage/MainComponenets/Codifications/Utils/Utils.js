export const GetLabels = (columnTemplate) => {
  let labels = "";
  for (let i = 0; i <= columnTemplate.length - 1; i++) {
    if (i < columnTemplate.length - 1)
      labels += `${columnTemplate[i].dataField},`;
    else labels += `${columnTemplate[i].dataField}`;
  }
  return labels;
};

export const GetValues = (columnTemplate, fieldsAndDataTemplate) => {
  let values = "";
  for (let i = 0; i <= columnTemplate.length - 1; i++) {
    if (i < columnTemplate.length - 1)
      values += `"${fieldsAndDataTemplate[i].readFieldHolder}",`;
    else values += `"${fieldsAndDataTemplate[i].readFieldHolder}"`;
  }
  return values;
};

export const CreateTableData = (
  reponse,
  columnTemplate,
  setTableRows
) => {
  const rows = [];
  for (var i in reponse) {
    const tempRow = undefined || {};
    tempRow.id = reponse[i][columnTemplate[0].dataField];
    for (let j = 0; j <= columnTemplate.length - 1; j++) {
      tempRow[columnTemplate[j].dataField] =
        reponse[i][columnTemplate[j].dataField];
    }
    rows.push({
      ...tempRow,
    });
  }
  setTableRows([]);
  for (let i = 0; i < rows.length; i++)
    setTableRows((tableRows) => [...tableRows, rows[i]]);
 
};


export  const convertDate = (value) => {
  const yyyy = value.getFullYear();
  let mm = value.getMonth() + 1; // Months start at 0!
  let dd = value.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return `${dd}$${mm}$${yyyy}`;
};
