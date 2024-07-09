import React from "react";
import { Container } from "../BarberStyle";
import AdminHeader from "../../../components/headers/admin/Header";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";

const Dashboard = () => {
  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  const renderHeader = () => {
    switch (role) {
      case "admin":
        return <AdminHeader />;
      case "customer":
        return <CustomerHeader />;
      case "barber":
        return <BarberHeader />;
      default:
        return null;
    }
  };

  return (
    <div style={{ color: "orange", fontSize: "18px", backgroundColor: "red" }}>
      <Container>
        {renderHeader()}

        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
      </Container>
    </div>
  );
};

export default Dashboard;
