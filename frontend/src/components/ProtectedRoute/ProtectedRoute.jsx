import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/indexPage" replace />;
}

export default PrivateRoute;
