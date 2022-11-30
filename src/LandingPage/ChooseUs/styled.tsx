import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  background: "#FCFCFD",
  padding: "4rem 0rem 2rem 0rem",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

export const Wrapper = styled(Paper)(({ theme }) => ({
  borderRadius: "0.8rem",
  background: "#FFFFFF",
  border: "0.188rem solid #00B8D9",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 0rem 2rem 0rem",
  },
}));

export const Wrappers = styled(Paper)(({ theme }) => ({
  borderRadius: "0.8rem",
  border: "0.188rem solid #00B8D9",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 0rem 2rem 0rem",
  },
}));
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
    fontSize: "1.7rem",
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    padding: "0.5rem 0rem 1rem 0rem",
  },
}));
export const LeftBox = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "auto",
  [theme.breakpoints.up("xl")]: {
    width: "70%",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "2.75rem",
  fontFamily: "Poppins",
  fontStyle: "normal",
  lineHeight: "120%",
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
    marginTop: "0",
    textAlign: "center",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3rem",
    marginTop: "0",
  },
}));
export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1.15rem",
  fontFamily: "Inter",
  fontStyle: "normal",
  lineHeight: "1.9rem",
  marginTop: "1rem",
  letterSpacing: "-0.003em",
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
    textAlign: "center",
  },
}));

export const RightBoxText = styled(Box)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  width: "8.238rem",
  textAlign: "left",
  color: "#EA7C69",
  [theme.breakpoints.down("md")]: {
    width: "6rem",
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    width: "8.238rem",

    paddingTop: "2rem",
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
    paddingTop: "2rem",
  },
  [theme.breakpoints.up("xl")]: {
    width: "0rem",
    fontSize: "2.5rem",
  },
}));
