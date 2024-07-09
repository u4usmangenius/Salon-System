import React from "react";
import {
  Container,
  CustomAiHeading,
  ImageContainer,
  BarbeButton,
  ImageItem,
  HeadingBarbes,
  Rating,
  Quote,
  generateStars,
  RectangleBox,
  Rectangle,
  Logo,
  Logo2,
} from "./BarbersProfilePageStyles";
import AdminHeader from "../../../components/headers/admin/Header";
import { Button, Typography } from "@mui/material";
import barberbarber_man1 from "../../../assests/barber_man1.png";
import barberbarber_man2 from "../../../assests/barber_man2.png";
import barberbarber_man3 from "../../../assests/barber_man3.png";
import barberbarber_man4 from "../../../assests/barber_man4.png";
import barberbarber_man5 from "../../../assests/barber_man5.png";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
import { useNavigate } from "react-router-dom";

const BarbersProfile = () => {
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
    if (role !== "admin") {
      // Only customer can navigate
      navigate("../customer/appointments");
    }
  };

  return (
    <>
      <Container>
        {renderHeader()}

        <CustomAiHeading
          style={
            role === "customer"
              ? { marginTop: "2.5rem" }
              : { marginTop: "-1.6rem" }
          }
        >
          <h1
            sx={{
              fontWeight: "bold",
            }}
            variant="h4"
          >
            Barber's Profile
          </h1>
          <h1
            style={{
              marginTop: "0.7rem",
              marginBottom: "4rem",
              color: "#ffcc00",
            }}
            variant="h4"
          >
            MEET OUR BARBERS TEAM
          </h1>
        </CustomAiHeading>
        <ImageContainer sx={{ paddingBottom: "13rem" }}>
          <ImageItem>
            <RectangleBox>
              <Rectangle />
              <Rectangle />
              <Logo src={barberbarber_man2} alt="Logo" />
            </RectangleBox>
            <BarbeButton variant="contained" onClick={callNavigate}>
              Select
            </BarbeButton>
            <HeadingBarbes variant="h4">MICHEL</HeadingBarbes>
            <Rating rating={4}>{generateStars(4)}</Rating>
            <Quote>
              Master of the shears, crafting timeless styles with precision and
              flair
            </Quote>
          </ImageItem>
          <ImageItem>
            <RectangleBox>
              <Rectangle />
              <Rectangle />
              <Logo src={barberbarber_man3} alt="Logo" />
            </RectangleBox>
            <BarbeButton variant="contained" onClick={callNavigate}>
              Select
            </BarbeButton>
            <HeadingBarbes variant="h4">TIM'S</HeadingBarbes>
            <Rating rating={3}>{generateStars(3)}</Rating>
            <Quote>
              Setting the standard for excellence, one impeccable cut at a time
            </Quote>
          </ImageItem>
          <ImageItem>
            <RectangleBox>
              <Logo2 src={barberbarber_man1} alt="Logo" />
            </RectangleBox>
            <BarbeButton
              onClick={callNavigate}
              style={{ marginTop: "25.3em" }}
              variant="contained"
            >
              Select
            </BarbeButton>
            <HeadingBarbes style={{ marginTop: "19.7em" }} variant="h4">
              KEVIN
            </HeadingBarbes>
            <Rating rating={5} style={{ marginTop: "22.7em" }}>
              {generateStars(5)}
            </Rating>
          </ImageItem>
          <ImageItem>
            <RectangleBox>
              <Rectangle />
              <Rectangle />
              <Logo src={barberbarber_man4} alt="Logo" />
            </RectangleBox>
            <BarbeButton variant="contained" onClick={callNavigate}>
              Select
            </BarbeButton>
            <HeadingBarbes variant="h4">JAMES</HeadingBarbes>
            <Rating rating={4.5}>{generateStars(4.5)}</Rating>
            <Quote>
              A grooming maestro, transforming haircuts into personalized works
              of art
            </Quote>
          </ImageItem>

          <ImageItem>
            <RectangleBox>
              <Rectangle />
              <Rectangle />
              <Logo src={barberbarber_man5} alt="Logo" />
            </RectangleBox>
            <BarbeButton variant="contained" onClick={callNavigate}>
              Select
            </BarbeButton>
            <HeadingBarbes variant="h4">FRANKLIN</HeadingBarbes>
            <Rating rating={5}>{generateStars(5)}</Rating>
            <Quote>
              Dedicated to the craft, our barber blends expertise with a touch
              of finesse
            </Quote>
          </ImageItem>
        </ImageContainer>
      </Container>
    </>
  );
};

export default BarbersProfile;
