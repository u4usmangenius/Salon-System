import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: "#1a1a3a",
  color: "white",
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: theme.spacing(4),
}));

export const ServicesHeading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(3),
  //   paddingBottom: theme.spacing(4),
  fontWeight: "bold",
  //   backgroundColor:"red"
}));
export const Heading1 = styled("h1")(({ theme }) => ({
  marginTop: "1rem",
  color: "#ffcc00",
}));

export const Heading1Bottom = styled("h1")(({ theme }) => ({
  marginTop: "-1rem",
  color: "#ffcc00",
}));

export const ShapeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  //   backgroundColor:"orange"
}));

export const ElementWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  //   justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
}));

export const LeftElement = styled(Box)(({ theme }) => ({
  flex: "1 1 45%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  //   border: "1px solid #ccc",
}));
export const RightElement = styled(Box)(({ theme }) => ({
  flex: "1 1 23%",
  display: "flex",
  //   justifyContent: "center",
  alignItems: "center",
}));
export const Elements = styled(Box)(({ theme }) => ({
  display: "flex",
  //   justifyContent: "center",
  alignItems: "center",
}));
export const ColumnElements = styled(Box)(({ theme }) => ({
  display: "flex",
  //   justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(1),
}));

export const Quote = styled(Box)(({ theme }) => ({
  flex: "1 1 45%",
  display: "flex",
  //   justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  width: "201px",
  textAlign: "center",
  fontSize: "13px",
  fontWeight: "bold",
}));
export const Logo = styled("img")({
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  width: "6em",
  height: "6em",
  overflow: "visible",
  objectFit: "cover",
  //   position: "relative",
  //   zIndex: 1,
});
export const AmountButton = styled(Button)(({ theme }) => ({
  width: "7em",
  height: "2.4em",
  objectFit: "cover",
  borderRadius: "5px",
  zIndex: 1,
  backgroundColor: "#ffab11",
  color: "#000",
  "&:hover": {
    backgroundColor: "#ffaa00",
  },
}));
