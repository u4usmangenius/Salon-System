import React from "react";
import { Grid, Typography } from "@mui/material";
import { Root, MainContent } from "./HomeStyles";
import AdminHeader from "../../../components/headers/admin/Header";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
import { Container } from "./Homestyle";

const CustomerHomePage = () => {
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
      <Container>
        {renderHeader()}
        <Root>
          <MainContent>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
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
      </Container>
    </>
  );
};

export default CustomerHomePage;
