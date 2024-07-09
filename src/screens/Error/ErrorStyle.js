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

export const ErrorHeading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(3),
  //   paddingBottom: theme.spacing(4),
  fontWeight: "bold",
  //   backgroundColor:"red"
}));
