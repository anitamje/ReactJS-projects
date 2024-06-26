import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// import { Context } from '../Context/Products';

const PrivateRoutes = ({ children }) => {
  // const [state, dispatch] = useContext(Context);
  // console.log(" 2222", state);
  const token = localStorage.getItem("token");
  if (token !== "null") {
    return children;
  }
  return <Navigate to="/" />
}

export default PrivateRoutes;
