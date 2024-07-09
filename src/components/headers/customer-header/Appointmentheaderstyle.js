import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: "#1a1a3a",
  color: "white",
  //   minHeight: "100vh",
  paddingBottom: "1.4rem",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Logo = styled("img")(({ theme }) => ({
  width: "100px",
  height: "60px",
  marginRight: "16px",
  zIndex: 3,
  [theme.breakpoints.down("sm")]: {
    width: "80px",
    height: "48px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#ffcc00",
  zIndex: 3,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
  },
}));

export const CenteredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  zIndex: 3,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const MenuLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  flex: 1,
  zIndex: 3,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MenuRight = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  flex: 1,
  zIndex: 3,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const OutletDesign = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "94vw",
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    width: "130%",
  },
}));

// export const DrawerHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));
