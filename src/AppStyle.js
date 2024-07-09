import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily:
      "Poppins, Roboto, Montserrat, Playfair Display, Raleway, sans-serif",
    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Raleway, sans-serif",
      fontWeight: 500,
    },
  },
});
