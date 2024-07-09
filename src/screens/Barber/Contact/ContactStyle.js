import { Box, Button, Container, Grid, TextField, styled } from "@mui/material";

export const Root = styled(Box)({
    position: "relative",
    flexGrow: 1,
  //   backgroundColor: "#1a1a3a",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    color: "#fff",
    fontWeight: "bold",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundColor: "rgba(0, 0, 0, 0.3)",
      zIndex: 1,
    },
  });
  
  export const StyledContainer = styled(Container)({
    flex: 1,
    display: "flex",
    borderRadius: "15px",
    overflow: "hidden",
    maxWidth: "1200px",
    padding: 0,
    justifyContent: "space-between",
    zIndex: 2,
  });
  
  export const FormContainer = styled(Grid)({
    padding: "40px 20px",
  
    color: "#ffcc00",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "400px",
  });
  
  export const InfoContainer = styled(Grid)({
    padding: "40px 20px",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    minWidth: "400px",
    gap: 10,
  });
  
  export const InfoItem = styled(Box)({
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    color: "#ffcc00",
  });
  
  export const IconWrapper = styled(Box)({
    marginRight: "8px",
    color: "#ffcc00",
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
    backgroundColor: "#ffcc00",
    width: "50%",
    "&:hover": {
      backgroundColor: "#e6b800",
    },
  });
  