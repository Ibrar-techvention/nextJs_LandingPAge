import { styled } from "@mui/material/styles";
import { Grid, Box, Typography } from "@mui/material";

export const MainBox = styled(Box)({
    padding: "1rem",
});
export const TypographyText = styled(Typography)({
    padding: "2rem 0rem 2rem 0rem",
});
export const Gridd = styled(Grid)(({ theme }) => ({
    padding: "1rem 0rem 1rem 0rem",
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
export const Container = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "90%",
    margin: "auto",
    padding: "6rem 0rem 6rem 0rem",
    [theme.breakpoints.down("sm")]: {
        display: "none",
        padding: "2rem 1rem 2rem 0rem",
    },
}));
