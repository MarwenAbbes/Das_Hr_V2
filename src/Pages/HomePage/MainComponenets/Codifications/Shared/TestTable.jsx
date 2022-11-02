import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
//import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Box } from "@mui/system";
import ControlDBBtn from "./ControlDBBtn";

function TestTable({
  onClickAddFunction,
  clientDB,
  tableDB,
  refreshFunction,
  fillingTemplateFunctions,
  col,
  data,
}) {
  const [selectedRowID, setSelectedRowID] = useState(-1);
  const [selectedRow, setSelectedRow] = useState();

  const selectRow = {
    mode: "radio",
    hideSelectAll: true,
    clickToSelect: true,
    nonSelectable: [1],
    onSelect: (row, isSelect, rowIndex, e) => {
      setSelectedRowID(row[col[0].dataField]);
      setSelectedRow(row);
      for (let i = 0; i < col.length - 1; i++) {
        fillingTemplateFunctions[i].setFieldHolder(row[col[i].dataField]);
      }
    },
    hideSelectColumn: true,
  };

  const rowStyle = (row, rowIndex) => {
    const style = {};
    if (row.CODE === selectedRowID) style.backgroundColor = "#c8e6c9";
    else style.backgroundColor = "white";
    return style;
  };

  return (
    <Box>
      <ControlDBBtn
        onClickAddFunction={onClickAddFunction}
        selectedIndex={selectedRowID}
        indexColumn={col[0].text}
        ClientDB={clientDB}
        tableDB={tableDB}
        refreshFunction={refreshFunction}
        refrechselectedIndex={setSelectedRowID}
        fillingTemplateFunctions={fillingTemplateFunctions}
        selectedRow={selectedRow}
        columns={col}
      />
      <BootstrapTable
        keyField={col[0].dataField}
        data={data}
        columns={col}
        selectRow={selectRow}
        rowStyle={rowStyle}
        noDataIndication="Table is Empty"
        pagination={paginationFactory()}
      />
    </Box>
  );
}

export default TestTable;
