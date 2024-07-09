// style.js
import { styled } from "@mui/system";
import {
  Grid,
  Box,
  TextField,
  Button,
  Container,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import backgroundImage from "../../assests/Main.png";

export const Root = styled(Box)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1a1a3a",
  padding: "0 20px",
});

export const StyledContainer = styled(Container)({
  display: "flex",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "1200px",
  padding: 0,
});

export const FormContainer = styled(Grid)({
  padding: "40px 20px",
  backgroundColor: "#1a1a3a",
  color: "#ffcc00",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  minWidth: "400px",
});

export const ImageContainer = styled(Grid)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100%",
  borderRadius: "5%",
});

export const StyledTextField = styled(TextField)({
  marginBottom: "16px",
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffcc00",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffcc00",
  },
});

export const StyledButton = styled(Button)({
  marginTop: "16px",
  backgroundColor: "#8a2be2",
  width: "50%",
  "&:hover": {
    backgroundColor: "#7a1ad0",
  },
});

export const StyledFormControl = styled(FormControl)({
  marginBottom: "16px",
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffcc00",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffcc00",
  },
});
