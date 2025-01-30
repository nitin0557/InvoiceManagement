import React from "react";
import {  Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const userSession = localStorage.getItem("userSession");

  return userSession ? element : <Navigate to="/Invoice" />;
};

export default PrivateRoute;
