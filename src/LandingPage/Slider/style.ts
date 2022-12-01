import { Box, Button, Typography, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NavBox = styled(Box)({
  background: "url(/images/backgroundd.png)",
});
export const CardMediaImg = styled(CardMedia)({});

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "83rem",
  height: "85vh",
  color: "white",
  display: "flex",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    height: "69vh",
  },
  // [theme.breakpoints.up("xl")]: {
  //   height: "85vh",
  // },
}));
export const BoxDot = styled(Box)(({ theme }) => ({
  width: "1.1rem",
  height: "1.1rem",
  borderRadius: "50%",
  marginTop: "-3rem",
  backgroundColor: "#ea7c69",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-1.5rem",
  },
}));
export const BoxDot1 = styled(Box)(({ theme }) => ({
  width: "1.1rem",
  height: "1.1rem",
  borderRadius: "50%",
  marginTop: "-3rem",
  backgroundColor: "#d9d9d9",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-1.5rem",
  },
}));
export const Left = styled(Box)(({ theme }) => ({
  width: "50%",
  paddingTop: "3.9rem",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "2.9rem",
    width: "55%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "82%",
    margin: "auto",
    paddingTop: "2rem",
  },
}));
export const Right = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    width: "46%",
  },
}));
export const LeftBox = styled(Box)(({ theme }) => ({
  width: "82%",
  paddingLeft: "5rem",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "0rem 1rem 0rem 1rem",
  },
}));
export const LeftBottom = styled(Box)({
  paddingTop: "2rem",
  display: "flex",
  alignItems: "center",
  // maxWidth:'31rem',
  justifyContent: "start",
});
export const LeftBottomIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // [theme.breakpoints.down("lg")]: {
  //     display: "none",
  // },
}));
export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  padding: "0.2rem 0.2rem 1.5rem 0rem",
  fontSize: "2.475rem",
  fontFamily: "Poppins",
  fontStyle: "normal",
  color: "#ffffff",
  lineHeight: "120%",
  letterSpacing: "-0.006em",

  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.52rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.52rem",
    padding: "0rem 0.2rem 1rem 0rem",
  },
}));
export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1.05rem",
  fontFamily: "Inter",
  fontStyle: "normal",
  lineHeight: "1.9rem",
  color: "#f1f1f1",
  letterSpacing: "-0.003em",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.7rem",
  },
}));
export const ButtonText = styled(Button)(({ theme }) => ({
  color: "#f3f3f3",
  borderRadius: "0.625rem",
  fontWeight: "bold",
  width: "9rem",
  height: "3.4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("lg")]: {
    width: "9rem",
    height: "2.4rem",
    fontSize: "0.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "6rem",
    height: "1.9rem",
    fontSize: "0.5rem",
    fontWeight: "bold",
  },
}));
export const Span = styled(Typography)(({ theme }) => ({

  [theme.breakpoints.down("lg")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
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

  [theme.breakpoints.down("lg")]: {
    width: "3.4rem",
    height: "2.4rem",
    marginLeft: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "1.8rem",
    height: "1.8rem",
    margin: "0rem 1.5rem 0rem 1.5rem",
  },
}));
export const ImageBox = {
  paddingTop: {
    xl: "0.4rem",
    lg: "0.2rem",
    md: "0.5rem",
    sm: "0.5rem",
  },
  paddingRight: {
    xl: "0rem",
    lg: "0.4rem",
    md: "4rem",
    sm: "0.5rem",
  },
};
export const ImageCard = {
  height: {
    lg: 22,
    md: 15,
    sm: 12,
    xs: 12,
  },
  width: {
    lg: 22,
    md: 15,
    sm: 12,
    xs: 12,
  },
};
