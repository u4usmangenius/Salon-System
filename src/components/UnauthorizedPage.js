// Unauthorized.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, CustomAiHeading } from "./UnauthorizedStyle";

const Unauthorized = () => {
  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  return (
    <>
      <Container>
        <CustomAiHeading style={{ marginTop: "10%" }}>
          <h2>Unauthorized Access</h2>
          <h3>You do not have permission to view this page.</h3>
          {role ? (
            <Link to="/" style={{ color: "blue" }}>
              Go to Home Page
            </Link>
          ) : (
            <Link to="/" style={{ color: "blue" }}>
              Go to Login
            </Link>
          )}
        </CustomAiHeading>
      </Container>
    </>
  );
};

export default Unauthorized;
