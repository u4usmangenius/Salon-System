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
}));

export const CustomAiHeading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(4),
  marginTop: "2.4rem",
}));

export const SubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  //   alignItems: "center",
  width: "95vw",
}));
export const ItemLeft = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flex: 1,
  zIndex: 3,
});

export const QuoteBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  //   margin: theme.spacing(2),
  //   padding: theme.spacing(2),
  //   backgroundColor: '#252550',
  //   borderRadius: theme.shape.borderRadius,
  //   width: "80%",
  maxWidth: "300px",
}));

export const Quote = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  marginBottom: theme.spacing(2),
  textAlign: "left",
  fontWeight: "bold",
  letterSpacing: "0.4px",
}));

export const Author = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#ffcc00",
  display: "flex",
  alignItems: "center",
  //   borderRight:"1px solid yellow"
}));
export const ItemCenter = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  flex: 1,
  zIndex: 3,
});
export const ItemRight = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "-33px",
  marginBottom: "20px",
  flex: 1,
  zIndex: 3,
});
export const Logo = styled("img")({
  width: "75%",
  height: "95%",
  marginRight: "0",
  zIndex: 3,
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  marginBottom: "60px",
});
export const Title = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
  color: "#ffcc00",
  zIndex: 3,
});

export const QuoteIcon = styled("span")(({ theme }) => ({
  fontSize: "2rem",
  marginLeft: theme.spacing(1),
  color: "#ffcc00",
}));

export const CameraIconBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
}));

export const CameraIcon = styled(Box)(({ theme }) => ({
  textAlign: "center",
  border: "5.5px solid #999",
  height: "12em",
  width: "12em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  //   color: "#ffcc00",
}));

export const UploadButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffcc00",
  color: "#000",
  margin: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#ffaa00",
  },
}));

export const SelectButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffcc00",
  color: "#000",
  margin: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#ffbb21",
  },
}));
