import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
    
   background: "url(/images/backgroundd.png)",
    width: "100%",
    height: "90vh",
    color: "white",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        display: "block",
        height: "40vh",
    },
    [theme.breakpoints.up("xl")]: {
        height: "85vh",
    },
}));
export const BoxDot = styled(Box)({
    width: "1.1rem",
    height: "1.1rem",
    borderRadius: "50%",
    marginTop: "-3rem",
    backgroundColor: "#ea7c69",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
});
export const BoxDot1 = styled(Box)({
    width: "1.1rem",
    height: "1.1rem",
    borderRadius: "50%",
    marginTop: "-3rem",
    backgroundColor: "#d9d9d9",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
});
export const Left = styled(Box)(({ theme }) => ({
    width: "50%",
    paddingTop: "3.8rem",
    [theme.breakpoints.up("xl")]: {
        paddingTop: "7rem",
    },
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));
export const Right = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
        width: "40%",
        margin: "auto",
    },
    [theme.breakpoints.up("sm")]: {
        width: "46%",
    },
}));
export const LeftBox = styled(Box)(({ theme }) => ({
    width: "82%",
    paddingLeft: "5rem",
    [theme.breakpoints.down("md")]: {
        width: "68%",
    },
}));
export const LeftBottom = styled(Box)({
    paddingTop: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
});
export const LeftBottomIcon = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}));
export const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    padding: "0.2rem 0.2rem 1.5rem 0rem",
    fontSize: "2.775rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#ffffff",
    lineHeight: "120%",
    letterSpacing: "-0.006em",

    [theme.breakpoints.up("xl")]: {
        fontSize: "3.6rem",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "2rem",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "1.52rem",
    },
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));
export const Description = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "1.15rem",
    fontFamily: "Inter",
    fontStyle: "normal",
    lineHeight: "1.9rem",
    color: "#f1f1f1",
    letterSpacing: "-0.003em",
    [theme.breakpoints.up("xl")]: {
        fontSize: "1.7rem",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "0.7rem",
    },
}));
export const ButtonText = styled(Button)(({ theme }) => ({
    color: "#f3f3f3",
    background: "#00B8D9",
    borderRadius: "0.625rem",
    fontWeight: "bold",
    width: "9rem",
    height: "3.4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
        width: "15.4rem",
        height: "5.4rem",
        fontSize: "1.5rem",
    },
    [theme.breakpoints.down("lg")]: {
        width: "9rem",
        height: "2.4rem",
        fontSize: "0.6rem",
    },
}));
export const Span = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("xl")]: {
        fontSize: "1.15rem",
    },
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}));
export const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "3.75rem",
    width: "3.75rem",
    borderRadius: "50%",
    background: "#ffffff",
    marginRight: "0.688rem",
    marginLeft: "2.688rem",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
        width: "3.7rem",
        height: "3.7rem",
    },
    [theme.breakpoints.down("lg")]: {
        width: "3.7rem",
        height: "2.7rem",
        marginLeft: "1rem",
    },
}));
export const ImageBox = {
    paddingTop: {
        xl: "4erm",
        lg: "1.5rem",
        md: "0.5rem",
        sm: "0.5rem",
    },
};
