import { styled } from "@mui/material/styles";
import { Grid, Box, Typography } from "@mui/material";



export const Container = styled(Box)(({ theme }) => ({
    height: "100%",
    maxWidth: "80rem",
    margin: "auto",
    padding: "1rem 0rem 3rem 0rem",
    [theme.breakpoints.down("lg")]: {
        display: "none",
        padding: "2rem 1rem 2rem 0rem",
    },
}));
export const MainBox = styled(Box)({
    padding: "2rem",
});
export const TypographyText = styled(Typography)({
    padding: "2rem 0rem 2rem 0rem",
});
export const Gridd = styled(Grid)(({ theme }) => ({
    padding: "1rem 0rem 1rem 3rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
    },
}));
export const ImgBox = styled(Box)({
    paddingTop: "1.2rem",
});

