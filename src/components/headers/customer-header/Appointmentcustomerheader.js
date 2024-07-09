import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Logo,
  Title,
  CenteredBox,
  MenuLeft,
  MenuRight,
  OutletDesign,
} from "./Appointmentheaderstyle";
import { NavLink } from "../../../screens/admin/home/HomeStyles";
import logo from "../../../assests/logo.png";
import { Outlet } from "react-router-dom";

const Appointmentcustomerheader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", link: "/customer/home" },
    { text: "AI Styles", link: "/customer/AIStyles" },
    { text: "Services", link: "/customer/services" },
    { text: "Barbers Profile", link: "/customer/profile" },
    // { text: "Hair Style", link: "/customer/hair-style" },
    { text: "reviews", link: "/customer/reviews" },
  ];

  return (
    <>
      <Container>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ zIndex: 3 }}
        >
          <Toolbar>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={handleMenuClose}
                    component={NavLink}
                    to={item.link}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <MenuLeft>
              <NavLink to="/customer/home">Home</NavLink>
              <NavLink to="/customer/AIStyles">AI Styles</NavLink>
              <NavLink to="/customer/services">Services</NavLink>
            </MenuLeft>
            <CenteredBox>
              <Logo src={logo} alt="Logo" />
              <Title variant="h4">SHAPE YOUR STYLE</Title>
            </CenteredBox>
            <MenuRight>
              <NavLink to="/customer/profile">Barber's Profile</NavLink>
              {/* <NavLink to="/customer/hair-style">Hair Styles</NavLink> */}
              <NavLink to="/customer/reviews">Reviews</NavLink>{" "}
            </MenuRight>
          </Toolbar>
        </AppBar>
        {/* <OutletDesign>
          <Outlet />
        </OutletDesign> */}
      </Container>
    </>
  );
};

export default Appointmentcustomerheader;
