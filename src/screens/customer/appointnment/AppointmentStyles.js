// src/screens/appointment/AppointmentStyles.js
import { styled } from "@mui/material/styles";
import { TextField, Container, Box, Button, FormControl } from "@mui/material";

export const Root = styled(Box)({
  display: "flex",
  height: "100vh",
  backgroundColor: "#1a1a3a",
  gap: "10%",
});

export const LeftHandleSection = styled(Box)({
  // marginTop: "1rem",
});

export const Logo = styled("img")({
  width: "125%",
  height: "90%",
  marginRight: "0",
  zIndex: 3,
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  marginBottom: "60px",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const LeftSection = styled(Box)({
  marginTop: "7rem",
  marginLeft: "-3%",
  overflow: "hidden",
  flex: 1,
  // backgroundImage: `url(${require("../../../assests/barber-shop.webp")})`,
  // marginTop: "16px", // Alternatively, you can use margin-top
});
export const RightSection = styled(Container)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1a1a3a",
  padding: "32px",
  marginTop: "1rem",
  color: "#fff",
});

export const FormBox = styled(Box)({
  width: "100%",
  maxWidth: "400px",
});
export const CustomTextField = styled(TextField)({
  marginBottom: "16px",
  color: "#fff",
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffcc00",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: "#fff",
    },
    "& .MuiInputAdornment-root .MuiTypography-root": {
      color: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
  "& .MuiFormLabel-root": {
    color: "#fff",
  },
  // Styles for the date/time picker icon
  "& input[type='date']::-webkit-calendar-picker-indicator": {
    filter: "invert(1)", // This inverts the color of the icon to white
    fontSize: "25px",
    cursor: "pointer",
  },
  "& input[type='time']::-webkit-calendar-picker-indicator": {
    filter: "invert(1)", // This inverts the color of the icon to white
    fontSize: "25px",
    cursor: "pointer",
  },
});

export const CustomFormControl = styled(FormControl)({
  marginBottom: "16px",
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffcc00",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiSelect-icon": {
    color: "#fff",
  },
  "& .Mui-focused .MuiInputLabel-root": {
    color: "#ffcc00",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffcc00",
  },
});
export const CustomButton = styled(Button)({
  padding: "12px 24px",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "bold",
  backgroundColor: "transparent",
  color: "#ffcc00",
  border: "2px solid #ffcc00",
  "&:hover": {
    backgroundColor: "#ffcc00",
    color: "#000",
    border: "1px solid transparent",
  },
  marginTop: "16px",
  borderRadius: "4px",
  boxShadow: "none",
  transition: "all 0.3s ease",
});
