import React from "react";
import { Button, Typography } from "@mui/material";
import {
  Container,
  ServicesHeading,
  Heading1,
  Heading1Bottom,
  ShapeContainer,
  ElementWrapper,
  LeftElement,
  RightElement,
  Elements,
  ColumnElements,
  Logo,
  Quote,
  AmountButton,
} from "./ServicesPageStyle";
import AdminHeader from "../../../components/headers/admin/Header";
import ServicesImage1 from "../../../assests/ServicesImage1.png";
import ServicesImage2 from "../../../assests/ServicesImage2.png";
import ServicesImage3 from "../../../assests/ServicesImage3.png";
import ServicesImage4 from "../../../assests/ServicesImage4.png";
import ServicesImage5 from "../../../assests/ServicesImage5.png";
import ServicesImage6 from "../../../assests/ServicesImage6.png";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
import { useNavigate } from "react-router-dom";

const Services = () => {
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
  const navigate = useNavigate();
  const callNavigate = () => {
    navigate("../barber/customer/profile");
  };

  return (
    <>
      <Container>
        {renderHeader()}

        <ServicesHeading>
          <Typography style={{ fontWeight: "bold" }} variant="h4">
            Professional Services
          </Typography>
          <Heading1 variant="h4" style={{ marginLeft: "0.4rem" }}>
            OUR BEST SERVICES THAT
          </Heading1>
          <Heading1Bottom variant="h4">WE OFFERING TO YOU</Heading1Bottom>
        </ServicesHeading>
        <ShapeContainer>
          <ElementWrapper>
            <LeftElement>
              <Logo src={ServicesImage1} alt="Logo" />
              <ColumnElements>
                <Quote>
                  Crafting dapper transformations with our signature haircuts.
                </Quote>
                <AmountButton onClick={callNavigate}>$ 20</AmountButton>
              </ColumnElements>
            </LeftElement>
            <RightElement>
              <Logo src={ServicesImage2} alt="Logo" />
              <ColumnElements>
                <Quote>
                  Crafting dapper transformations with our signature haircuts.
                </Quote>
                <AmountButton onClick={callNavigate}>$ 20</AmountButton>
              </ColumnElements>
            </RightElement>
          </ElementWrapper>
          <ElementWrapper>
            <LeftElement>
              <Logo src={ServicesImage3} alt="Logo" />
              <ColumnElements>
                <Quote>
                  Crafting dapper transformations with our signature haircuts.
                </Quote>
                <AmountButton onClick={callNavigate}>$ 20</AmountButton>
              </ColumnElements>
            </LeftElement>
            <RightElement>
              <Logo src={ServicesImage4} alt="Logo" />
              <ColumnElements>
                <Quote>
                  Crafting dapper transformations with our signature haircuts.
                </Quote>
                <AmountButton onClick={callNavigate}>$ 20</AmountButton>
              </ColumnElements>
            </RightElement>
          </ElementWrapper>
          <ElementWrapper>
            <LeftElement>
              <Logo src={ServicesImage5} alt="Logo" />
              <ColumnElements>
                <Quote>
                  Crafting dapper transformations with our signature haircuts.
                </Quote>
                <AmountButton onClick={callNavigate}>$ 20</AmountButton>
              </ColumnElements>
            </LeftElement>
            <RightElement>
              <Logo src={ServicesImage6} alt="Logo" />
              <ColumnElements>
                <Quote>
                  Crafting dapper transformations with our signature haircuts.
                </Quote>
                <AmountButton onClick={callNavigate}>$ 20</AmountButton>
              </ColumnElements>
            </RightElement>
          </ElementWrapper>
        </ShapeContainer>
      </Container>
    </>
  );
};

export default Services;
