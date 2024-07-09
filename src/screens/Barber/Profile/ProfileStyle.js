import { styled } from "@mui/material/styles";
import { Box, Button, TextField } from "@mui/material";
import "react-calendar/dist/Calendar.css"; // Import default Calendar styles

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
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  paddingTop: theme.spacing(2),
}));
export const SubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  //   alignItems: "center",
  width: "90vw",
}));
export const ItemLeft = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  flex: 1,
  //   zIndex: 1,
});

export const ItemCenter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  flex: 1,
  zIndex: 3,
  [theme.breakpoints.between("sm", "md")]: {
    marginLeft: "10rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "5rem",
  },
}));
export const ItemRight = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "-33px",
  marginBottom: "20px",
  flex: 1,
  zIndex: 3,
});

export const ProfileBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
}));

export const ProfileIcon = styled(Box)(({ theme }) => ({
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
export const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffcc00",
  color: "#000",
  margin: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#ffaa00",
  },
}));

export const Logo = styled("img")({
  objectFit: "cover",
  position: "relative",
  zIndex: 1,
  width: "8.6rem",
  height: "10rem",
  marginTop: "1.8rem",
});
export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  boxShadow: 24,
  padding: theme.spacing(4),
}));
export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: theme.spacing(2),
}));
export const StyledButton = styled(Button)(() => ({
  backgroundColor: "#8a2be2",
  "&:hover": {
    backgroundColor: "#7a1ad0",
  },
}));

export const StyledCancelButton = styled(Button)(() => ({
  color: "black",
  borderColor: "#8a2be2",
  "&:hover": {
    borderColor: "#7a1ad0",
  },
}));
export const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "400px",
  height: "auto",
}));
export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiInputBase-root": {
    color: "#ffcc00",
  },
  "& .MuiInputLabel-root": {
    color: "#00000",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffcc00",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffcc00",
  },
  "& .MuiInputBase-root.Mui-focused": {
    color: "#ffcc00",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffcc00",
  },
}));
