import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import "react-calendar/dist/Calendar.css"; // Import default Calendar styles

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: "#1a1a3a",
  color: "white",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const CustomAiHeading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  // marginBottom: theme.spacing(1),
  // paddingTop: theme.spacing(2),
  marginTop: "-0rem",
  marginBottom: "-1.5rem",
}));

export const CalendTaskContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    flexDirection: "row",
  },
}));

export const ItemLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: theme.spacing(2),
  flex: 1,
  marginTop: "0.7rem",
  marginLeft: "-2.4rem",
  width: "100%", // Ensure full width at all screen sizes
  [theme.breakpoints.between("sm", "md")]: {
    marginBottom: theme.spacing(2),
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    width: "90%",
    paddingLeft: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
}));

export const Logo = styled("img")(({ theme }) => ({
  width: "85%",
  height: "95%",
  marginRight: "0",
  paddingRight:"10rem",
  zIndex: 3,
  // borderTopLeftRadius: "30px",
  // borderBottomLeftRadius: "30px",
  marginBottom: "60px",
  [theme.breakpoints.between("sm", "md")]: {
    width: "90vw",
    marginLeft: "1.5rem",
  },

  [theme.breakpoints.down("sm")]: {
    width: "85vw",
    marginLeft: "3rem",
  },
}));

export const ItemRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "3.2rem",
  padding: theme.spacing(2),
  backgroundColor: "#2a2a5a",
  borderRadius: "8px",
  flex: 1,
  width: "100%", // Ensure full width at all screen sizes
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: theme.spacing(7), // Adjusted marginTop for medium screens
    padding: theme.spacing(1), // Adjusted padding for medium screens
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "50%", // Adjusted width for larger screens to maintain consistency
    marginTop: theme.spacing(7), // Adjusted marginTop for larger screens
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginTop: theme.spacing(0),
    padding: theme.spacing(1),
  },
}));

export const CalendarContainer = styled(Box)(({ theme }) => ({
  "& .react-calendar": {
    color: "#000",
    border: "none",
  },
  "& .react-calendar__navigation button": {
    color: "#000",
  },
  "& .react-calendar__month-view__weekdays__weekday abbr": {
    textDecoration: "none !important",
  },
  "& .react-calendar__month-view__weekdays__weekday": {
    color: "#1a1a3a",
    textDecoration: "none !important",
  },
}));

export const TaskList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const TaskItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#333366",
  padding: theme.spacing(1),
  borderRadius: "8px",
  marginBottom: theme.spacing(1),
  width: "95%",
}));

export const TaskIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1a1a3a",
  padding: theme.spacing(1),
  borderRadius: "50%",
  marginRight: theme.spacing(1),
  width: "40px",
  height: "40px",
}));

export const TaskInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  color: "#fff",
}));

export const TaskStatus = styled(Box)(({ theme, color }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: color,
}));

export const ShowAllLink = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  cursor: "pointer",
}));