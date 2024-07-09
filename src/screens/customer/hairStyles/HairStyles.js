// src/screens/hairstyles/HairStylesPage.js
import React from "react";
import {
  Typography,
  Grid,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Save as SaveIcon } from "@mui/icons-material";
import { observer } from "mobx-react";
import { hairStylesData } from "./hairStylesData.js";
import { Container } from "./HairStylesStyle.js";
import { hairStylesStore } from "../../../stores/hairStyles/HairStylesStore.js";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader.js";
import AdminHeader from "../../../components/headers/admin/Header.js";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader.js";

import LongFringes from "../../../assests/hair styles/hair style1.png"; // Replace with your actual paths
import FringeUp from "../../../assests/hair styles/hair style2.png";
import MidParted from "../../../assests/hair styles/hair style5.png";
import SideFringe from "../../../assests/hair styles/hair style4.png";
import Spikes from "../../../assests/hair styles/hair style3.png";
import CurlySided from "../../../assests/hair styles/hair style6.png";
import SimpleStyle from "../../../assests/hair styles/hair style7.png";
import Curly from "../../../assests/hair styles/hair style8.png";

const hairStylesImages = [
  { name: "Spikes", image: Spikes },
  { name: "Curly Sided", image: CurlySided },
  { name: "No Cuts", image: SimpleStyle },
  { name: "Long Fringes", image: LongFringes },
  { name: "Fringe Up", image: FringeUp },
  { name: "Curly", image: Curly },
  { name: "Side Fringe", image: SideFringe },
  { name: "Mid Parted", image: MidParted },
];

const HairStyles = observer(() => {
  const { savedStyles, toggleSaveStyle } = hairStylesStore;

  const handleSave = (id) => {
    toggleSaveStyle(id);
  };

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
    <>
      {renderHeader()}
      <Container>
        <h1
          variant="h4"
          gutterBottom
          style={{
            fontWeight: "bold",
            marginTop: "3.5rem",
            marginBottom: "3.4rem",
          }}
        >
          Virtual Closet
        </h1>

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <h2
              variant="h6"
              gutterBottom
              style={{ width: "271px", color: "#ffcc00", fontWeight: "bold" }}
            >
              Select Your Hairstyle Preferences
            </h2>
            <List>
              {hairStylesImages.map((style, index) => (
                <ListItem key={index} style={{}}>
                  <ListItemText primary={style.name} />
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#ffbb11",
              }}
            >
              Select
            </Button>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {hairStylesImages.map((style, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box
                    style={
                      {
                        // paddingBottom: "0.7rem",
                      }
                    }
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={style.image}
                      alt={style.name}
                      style={{
                        width: "8rem",
                        height: "10rem",
                        overflow: "visible",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="#fff"
                        style={{
                          fontWeight: "bold",
                          marginTop: "2.6rem",
                        }}
                      >
                        {style.name}
                      </Typography>
                    </CardContent>
                    {/* <IconButton
                    color="primary"
                    aria-label="save hairstyle"
                    onClick={() => handleSave(index)}
                  >
                    <SaveIcon />
                  </IconButton> */}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
});

export default HairStyles;
