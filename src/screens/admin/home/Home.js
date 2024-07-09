import React from "react";
import { Grid, Typography } from "@mui/material";
import { Root, MainContent } from "./HomeStyles.js";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader.js";
import userStore from "../../../stores/users/usersStore.js";
import AdminHeader from "../../../components/headers/admin/Header.js";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader.js";

const HomePage = () => {
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
    <Root>
      {renderHeader()}

      <MainContent>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              Unlock Your Ultimate Look
            </Typography>
            <Typography variant="h6" gutterBottom>
              Style Alerts Delivered! Elevate Your Look with Exclusive
              Recommendations!
            </Typography>
          </Grid>
        </Grid>
      </MainContent>
    </Root>
  );
};

export default HomePage;
