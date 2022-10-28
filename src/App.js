import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import { useState } from "react";
import { userContext } from "./Contexts/UserContext";
import AuthRouter from "./assets/Routes/AuthRouter";

function App() {
  const [userContextState, SetuserContextState] = useState({
    username: "",
    company: "",
  });
  return (
    <Router>
      <userContext.Provider value={{ userContextState, SetuserContextState }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<AuthRouter />}>
            <Route path="/" element={<HomePage />} extact />
          </Route>
        </Routes>
      </userContext.Provider>
    </Router>
  );
}

export default App;
