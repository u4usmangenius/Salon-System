// ErrorPage.js
import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/headers/admin/Header";
import CustomerHeader from "../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../components/headers/BarberHeader.js/BarberHeader";
import { Container, ErrorHeading } from "./ErrorStyle";

const ErrorPage = () => {
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
    <Container>
      {/* {renderHeader()} */}

      <ErrorHeading style={{ marginTop: "13%" }}>
        <h1>404 - Page Not Found</h1>
      </ErrorHeading>
      {role ? (
        <Link to="/" style={{ color: "blue" }}>
          Go to Home Page
        </Link>
      ) : (
        <Link to="/" style={{ color: "blue" }}>
          Go to Login
        </Link>
      )}
    </Container>
  );
};

export default ErrorPage;
