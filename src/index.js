import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

axios.defaults.baseURL = "http://41.226.34.214:8080/";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE,PATCH,OPTIONS";
axios.defaults.headers.common["Product"] = "Paie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
