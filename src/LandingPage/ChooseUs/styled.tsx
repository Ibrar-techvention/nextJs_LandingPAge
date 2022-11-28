import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    padding: "2rem 0rem 1rem 0rem",
    [theme.breakpoints.down("sm")]: {
        display: "block",
    },
}));

export const Wrapper = styled(Paper)({
    borderRadius: "0.8rem",
    background:
        "linear-gradient(180deg, rgba(112, 99, 214, 0.18) 0%, rgba(112, 99, 214, 0.026) 75.78%, rgba(146, 136, 224, 0.199219) 99.99%, rgba(35, 46, 209, 0.2) 100%, rgba(112, 99, 214, 0.2) 100%)",
});

export const Wrappers = styled(Paper)({
    borderRadius: "0.8rem",
    background:
        "linear-gradient(180deg, rgba(234, 124, 105, 0.094) 0%, rgba(234, 124, 105, 0.2) 100%)",
});
export const RightItem = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "left",
    height: "15rem",

    [theme.breakpoints.up("xl")]: {
        height: "28rem",
    },

    [theme.breakpoints.down("lg")]: {
        height: "13rem",
    },
    [theme.breakpoints.down("md")]: {
        height: "11rem",
    },
}));

export const Left = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
        width: "50%",
    },
}));

export const Right = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
        width: "50%",
    },
    [theme.breakpoints.up("xl")]: {
        width: "100%",
    },
}));
export const TypographyText = styled(Box)(({ theme }) => ({
    fontSize: "1.25rem",

    [theme.breakpoints.up("xl")]: {
        fontSize: "2.25rem",
    },
}));
export const LeftBox = styled(Box)(({ theme }) => ({
    width: "80%",
    margin: "auto",

    [theme.breakpoints.down("md")]: {
        width: "80%",
    },

    [theme.breakpoints.up("xl")]: {
        width: "70%",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "2.75rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    lineHeight: "120%",
    letterSpacing: "-0.006em",
    [theme.breakpoints.down("lg")]: {
        fontSize: "2.6rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        marginTop: "0",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "5rem",
        marginTop: "0",
    },
}));
export const Description = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "1.25rem",
    fontFamily: "Inter",
    fontStyle: "normal",
    lineHeight: "1.9rem",
    marginTop: "1rem",
    letterSpacing: "-0.003em",
    [theme.breakpoints.up("xl")]: {
        fontSize: "2.25rem",
    },
}));

export const RightBoxText = styled(Box)(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    width: "8.238rem",
    textAlign: "left",
    color: "#EA7C69",
    [theme.breakpoints.down("md")]: {
        width: "0rem",
        fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
        width: "0rem",
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("xl")]: {
        width: "0rem",
        fontSize: "2.5rem",
    },
}));
export const DownBoxText = styled(Box)(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    width: "8.238rem",
    textAlign: "left",
    color: "#7063D6",
    [theme.breakpoints.down("md")]: {
        width: "0rem",
        fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
        width: "0rem",
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("xl")]: {
        width: "0rem",
        fontSize: "2.5rem",
    },
}));
