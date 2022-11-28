import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    // mode: 'dark',
    primary: {
      main: "#ea7c69",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9288E0",
      contrastText: "#ffffff",
    },
  },
  direction: "rtl",
  typography: {
    fontFamily: ["Poppins"].join(","),
    button: {
      fontFamily: ["Poppins"].join(","),
    },
  },
});

export default theme;
