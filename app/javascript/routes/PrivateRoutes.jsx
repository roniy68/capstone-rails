import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const [user, setUser] = useState(sessionStorage.getItem("username"));

  useEffect(() => {
    setUser(sessionStorage.getItem("username"));
  }, [user]);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
