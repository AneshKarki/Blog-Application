import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn)
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
