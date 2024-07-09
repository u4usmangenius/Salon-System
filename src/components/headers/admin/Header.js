import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  responsiveFontSizes,
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

const AdminHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", link: "/home" },
    { text: "barber", link: "/barber" }, // add barber page
    { text: "Admin Barber", link: "/barbers/home" }, // calendar
    { text: "Barbers Profile", link: "/barbers/profile" }, // barbers profile list
    { text: "reviews", link: "/reviews" }, // customer reviews
  ];

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ zIndex: 3 }}
      >
        <Toolbar sx={{ fontWeight: "bold" }}>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              fontWeight: "bold",
            }}
          >
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
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/barber">Barbers</NavLink>
            {/* <NavLink to="/barbers/home">Admin   Barbers</NavLink> */}
            <NavLink to="/barbers/home">Appointments</NavLink>
          </MenuLeft>
          <CenteredBox>
            <Logo src={logo} alt="Logo" />
            <Title variant="h4">SHAPE YOUR STYLE</Title>
          </CenteredBox>
          <MenuRight>
            <NavLink
              to="/barbers/profile"
              sx={{
                paddingRight: "0.8rem",
                textWrap: "nowrap",
              }}
            >
              Barbers Profile
            </NavLink>
            <NavLink to="/reviews">Reviews</NavLink>{" "}
          </MenuRight>
        </Toolbar>
      </AppBar>
      <OutletDesign>
        <Outlet />
      </OutletDesign>
    </>
  );
};

export default AdminHeader;

// import React from 'react';
// import { AppBar, Toolbar, Box } from '@mui/material';
// import { Logo, Title, MenuLeft, MenuRight } from './HeaderStyles';
// import { NavLink } from '../../../screens/admin/home/HomeStyles';
// import logo from '../../../assests/logo.png';

// const AdminHeader = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={0} sx={{ zIndex: 3 }}>
//       <Toolbar>
//         <MenuLeft>
//           <NavLink to="/home">Home</NavLink>
//           <NavLink to="/AIStyles">AI Styles</NavLink>
//           <NavLink to="/services">Services</NavLink>
//           <NavLink to="/barber">Barbers</NavLink>
//         </MenuLeft>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Logo src={logo} alt="Logo" />
//           <Title variant="h4">SHAPE YOUR STYLE</Title>
//         </Box>
//         <MenuRight>
//           <NavLink to="/profile">Barber's Profile</NavLink>
//           <NavLink to="/hair-style">Hair Styles</NavLink>
//           <NavLink to="/reviews">Reviews</NavLink>
//         </MenuRight>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default AdminHeader;
