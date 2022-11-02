import axios from "axios";

export const GetTable = async (
  client,
  tableName,
  selectedFields="*",
  condition="true",
) => {
  let respo;
  try {
    respo = await axios.get("GetTable", {
      headers: {
        Client: client,
        TableName: tableName,
        SelectedFields: selectedFields,
        Condition: condition,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return respo?.data ? respo?.data : null;
};

export const InsertToTable = async (client, tableName, labels, values) => {
  let respo;
  try {
    respo = await axios.put(
      `InsertToTable/Paie/${client}/${tableName}/${labels}/${values}`
    );
  } catch (error) {
    console.log(error);
  }
  return respo?.data ? respo?.data : null;
};

export const EditTable = async (client, tableName, labels, values) => {
  let respo;
  try {
    respo = await axios.post(
      `EditTable/Paie/${client}/${tableName}/${labels}/${values}`
    );
  } catch (error) {
    console.log(error);
  }
  return respo?.data ? respo?.data : null;
};

export const DeleteFromTable = async (client, tableName, condition) => {
  let respo;
  try {
    respo = await axios.delete(
      `DeleteFromTable/Paie/${client}/${tableName}/${condition}`
    );
  } catch (error) {
    console.log(error);
  }
  return respo?.data ? respo?.data : null;
};
