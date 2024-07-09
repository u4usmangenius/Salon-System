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
} from "./BarberHeaderStyle";
import { NavLink } from "../../../screens/admin/home/HomeStyles";
import logo from "../../../assests/logo.png";
import { Outlet } from "react-router-dom";

const BarberHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", link: "/barbers/dashboard" },
    { text: "Dashboard", link: "/barbers/dashboard" },
    { text: "Profile", link: "/barbers/profiles" },
    { text: "Appointments", link: "/barbers/appointments" },
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
            sx={{ fontWeight: "bold" }}
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
              <NavLink to="/barbers/dashboard">Home</NavLink>
              <NavLink to="/barbers/dashboard">Dashboard</NavLink>
            </MenuLeft>
            <CenteredBox>
              <Logo src={logo} alt="Logo" />
              <Title variant="h4">SHAPE YOUR STYLE</Title>
            </CenteredBox>
            <MenuRight>
              <NavLink to="/barbers/profiles">Profile</NavLink>
              <NavLink to="/barbers/appointments">Appointments</NavLink>

              {/* <NavLink to="/barbers/contact">Contact US</NavLink> */}
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

export default BarberHeader;

// import React, { useState } from "react";
// import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import {
//   Container,
//   Logo,
//   Title,
//   MenuLeft,
//   MenuRight,
//   OutletDesign,
//   DrawerHeader,
// } from "./BarberHeaderStyle";
// import { NavLink } from "../../../screens/admin/home/HomeStyles";
// import logo from "../../../assests/logo.png";
// import { Outlet } from "react-router-dom";

// const BarberHeader = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const menuItems = [
//     { text: 'Home', link: '/barbers/home' },
//     { text: 'Dashboard', link: '/barbers/home' },
//     { text: 'Profile', link: '/barbers/profiles' },
//     { text: 'Appointments', link: '/barbers/appointments' },
//   ];

//   return (
//     <>
//       <Container>
//         <AppBar
//           position="static"
//           color="transparent"
//           elevation={0}
//           sx={{ zIndex: 3 }}
//         >
//           <Toolbar>
//             <Box >
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={toggleDrawer(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </Box>
//             <MenuLeft>
//               <NavLink to="/barbers/home">Home</NavLink>
//               <NavLink to="/barbers/home">Dashboard</NavLink>
//             </MenuLeft>
//             <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//               <Logo src={logo} alt="Logo" />
//               <Title variant="h4">SHAPE YOUR STYLE</Title>
//             </Box>
//             <MenuRight>
//               <NavLink to="/barbers/profiles">Profile</NavLink>
//               <NavLink to="/barbers/appointments">Appointments</NavLink>
//             </MenuRight>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           <DrawerHeader>
//             <IconButton onClick={toggleDrawer(false)}>
//               <MenuIcon />
//             </IconButton>
//           </DrawerHeader>
//           <List>
//             {menuItems.map((item) => (
//               <ListItem button key={item.text} onClick={toggleDrawer(false)} component={NavLink} to={item.link}>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <OutletDesign>
//           <Outlet />
//         </OutletDesign>
//       </Container>
//     </>
//   );
// };

// export default BarberHeader;
