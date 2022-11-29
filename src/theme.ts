import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1200,
            xl: 1736,
        },
    },
    palette: {
        // mode: 'dark',
        primary: {
            main: "#F05A22",
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
