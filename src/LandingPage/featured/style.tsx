import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainBox = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100%",
    justifyContent: "center",
    background: "#FCFCFD",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
        paddingTop: "1rem",
    },
}));
export const GridItem = styled(Grid)(({ theme }) => ({
    width: "84%",
    margin: "auto",
    paddingBottom: "2.5rem",
    [theme.breakpoints.down("lg")]: {
        width: "95%",
    },
    [theme.breakpoints.down("md")]: {
        paddingBottom: "2rem",
        width: "80%",
    },
}));
export const BoxItem = styled(Box)({
    paddingTop: "3rem",
});
export const Heading = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontFamily: "Poppins",
    letterSpacing: "-0.03em",
    color: "#000000",
    fontSize: "2.925rem",
    height: "5.125rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.9rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "3.1rem",
    },
}));
export const Paragraph = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: "1.125rem",
    height: "6.125rem",
    width: "35.138rem",
    color: "#5B5B5B",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        width: "22rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem",
        width: "53rem",
    },
}));
export const PaperStyle = styled(Paper)(({ theme }) => ({
    borderRadius: "0.5rem",
    border: "1px solid #000000",
    height: "18.75rem",
    paddingTop: "0.5rem",
    background: "#FFFFFF",
    [theme.breakpoints.down("lg")]: {
        height: "16.75rem",
    },
    [theme.breakpoints.up("xl")]: {
        height: "23.75rem",
    },
}));

export const ParentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    padding: "1.5rem 2rem 1rem 2rem",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
    },
}));
export const Haeding = styled(Typography)(({ theme }) => ({
    fontSize: "1.3rem",
    fontWeight: 600,
    width: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        width: "7rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "2.3rem",
        width: "7rem",
    },
}));
export const Paragraph1 = styled(Typography)(({ theme }) => ({
    fontSize: "0.9rem",
    fontWeight: 500,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "1.2rem",
        fontWeight: "35rem",
    },
}));
export const LogoBox = styled(Box)({
    width: "3.5rem",
    height: "3.5rem",
    backgroundColor: "#EA7C69",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
export const PaperSty = styled(Paper)(({ theme }) => ({
    borderRadius: "0.1rem",
    height: "18.75rem",
    paddingTop: "0.5rem",
    background: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
        paddingTop: "2rem",
    },
    [theme.breakpoints.down("lg")]: {
        height: "16.75rem",
    },
    [theme.breakpoints.up("xl")]: {
        height: "23.75rem",
    },
}));
