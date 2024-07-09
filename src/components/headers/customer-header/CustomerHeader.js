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
} from "./HeaderStyles";
import { NavLink } from "../../../screens/admin/home/HomeStyles";
import logo from "../../../assests/logo.png";
import { Outlet } from "react-router-dom";

const CustomerHeader = () => {
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
    { text: "Hair Style", link: "/customer/hair-style" },
    { text: "reviews", link: "/customer/reviews" },
    { text: "contact", link: "/customer/contact" },
    { text: "Barbers", link: "/barber/customer/profile" },
    { text: "appointments", link: "/customer/appointments" },
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
          <Toolbar
            sx={{}}
            style={{
              fontWeight: "bold",
            }}
          >
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
              <NavLink
                to="/customer/AIStyles"
                style={{
                  width: "4.5rem",
                  textAlign: "center",
                }}
              >
                AI Styles
              </NavLink>
              <NavLink to="/customer/services">Services</NavLink>
              <NavLink to="/barber/customer/profile">Barbers</NavLink>
            </MenuLeft>
            <CenteredBox
              style={{
                marginRight: "2.4rem",
              }}
            >
              <Logo src={logo} alt="Logo" />
              <Title variant="h4">SHAPE YOUR STYLE</Title>
            </CenteredBox>
            <MenuRight>
              <NavLink
                to="/customer/hair-style"
                style={{
                  width: "5.6rem",
                  textAlign: "center",
                }}
              >
                Hair Styles
              </NavLink>
              <NavLink to="/customer/reviews">Reviews</NavLink>{" "}
              <NavLink to="/customer/contact">Contact</NavLink>{" "}
              <NavLink to="/customer/appointments">Appointments</NavLink>{" "}
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

export default CustomerHeader;
