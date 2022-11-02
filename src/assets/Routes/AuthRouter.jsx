import React from "react";
import { Outlet } from "react-router-dom";
//import { useContext } from "react";
//import { userContext } from "../../Contexts/UserContext";
import { Navigate } from "react-router-dom";

export const AuthRouter = () => {
 // const { userContextState, SetuserContextState } = useContext(userContext);
  const user = localStorage.getItem("user");
  if (
    user !== ""
    //  &&
    // userContextState !== "" &&
    // userContextState.username == user
  ) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthRouter;
