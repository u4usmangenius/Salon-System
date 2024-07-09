import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#1a1a3a",
  color: "white",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  backgroundColor: "#333",
  borderRadius: theme.shape.borderRadius,
}));
