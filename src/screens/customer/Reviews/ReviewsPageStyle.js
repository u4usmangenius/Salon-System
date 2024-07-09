import { styled } from "@mui/material/styles";
import { Avatar, Box, Button, Card, Pagination } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  //   padding: theme.spacing(3),
  backgroundColor: "#1a1a3a",
  color: "white",
  minHeight: "100vh",
  position: "relative",
}));
export const CustomButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(10),
  right: theme.spacing(2),
  backgroundColor: "#8a2be2",
  color: "#ffffff",
  textTransform: "capitalize",
  fontSize: "15px",
  marginRight: "1.3rem",
  "&:hover": {
    backgroundColor: "#7a1ad0",
  },
}));

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  boxShadow: 24,
  padding: theme.spacing(4),
}));
export const CustomAiHeading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
  padding: theme.spacing(4),
}));

export const Root = styled(Box)({
  backgroundColor: "#1a1a3a",
  minHeight: "100vh",
  color: "#fff",
  padding: "20px",
});

export const Heading = styled("div")({
  marginBottom: "20px",
});

export const ReviewCard = styled(Card)({
  backgroundColor: "#2a2a4a",
  color: "#fff",
  marginBottom: "20px",
});

export const CustomerAvatar = styled(Avatar)({
  backgroundColor: "#ffcc00",
});
