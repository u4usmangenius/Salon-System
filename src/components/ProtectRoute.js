// ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import userStore from "../stores/users/usersStore";

const ProtectedRoute = ({ allowedRoles }) => {
  // const { role } = userStore;
  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  console.log("Current user role is:", role);
  return allowedRoles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default ProtectedRoute;
