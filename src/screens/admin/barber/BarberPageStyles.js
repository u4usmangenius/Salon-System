import { styled } from "@mui/material/styles";
import { Box, Button, Pagination } from "@mui/material";

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
  "&:hover": {
    backgroundColor: "#7a1ad0",
  },
}));

export const NoBarbersContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  overflow: "auto",
  marginTop: theme.spacing(4),
}));

export const Image = styled("img")({
  width: 200,
  height: 200,
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

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  marginTop: theme.spacing(2),
  "& .MuiPaginationItem-root": {
    color: "#8a2be2",
  },
  "& .Mui-selected": {
    backgroundColor: "#8a2be2",
    color: "white",
  },
}));
