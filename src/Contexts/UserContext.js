import { createContext } from "react";

export const userContext = createContext({ username: "", company: "" });
export const SidePanelContext = createContext({
  SidePanelOpen: false,
  SelectedItemName: "",
});
