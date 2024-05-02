//ProtectedRoute file is used to check if the user is logged in or not

import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";



const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/SignIn" />;
  }
  return children;
};

export default ProtectedRoute;