import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token !== "null") {
    return children;
  }
  return <Navigate to="/" />
}

export default PrivateRoutes;
