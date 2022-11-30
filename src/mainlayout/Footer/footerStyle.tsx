import { makeStyles } from "@mui/styles";
import { Typography, Box, TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Boxes = styled(Box)(({ theme }) => ({
  marginTop: "5rem",
  paddingTop: "4rem",
  background: "#1F1D2B",
  color: "white",
  height: "55vh",
  maxWidth: "85rem",
  margin: "5rem auto auto  auto",
  [theme.breakpoints.down("lg")]: {
    height: "100%",
    background: "white",
    color: "#1F1D2B",
  },
}));
export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  width: "!00%",
  paddingLeft: "6.813rem",
  fontSize: "1.25rem",
  textTransform: "uppercase",
  fontFamily: "Poppins",
  fontWeight: 600,
  alignItems: "center",
  paddingBottom: "2rem",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "0rem",
    justifyContent: "center",
  },
}));
export const TitleBox1 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  paddingLeft: "2rem",
  fontSize: "1.25rem",
  fontFamily: "Poppins",
  paddingBottom: "1rem",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "0rem",
    justifyContent: "center",
    fontSize: "0.7rem",
  },
}));
export const TitleBox3 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  width: "100%",
  maxWidth: "100%",
  fontSize: "1.25rem",
  fontFamily: "Poppins",
  paddingBottom: "2rem",
  color: "#FFFFFF",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "0rem",
    justifyContent: "center",
    fontSize: "0.9rem",
  },
}));
export const TextFieldStyle = styled(TextField)(({ theme }) => ({
  background: "rgba(145, 158, 171, 0.08)",
  border: "1px solid #FFFFFF",
  borderRadius: "0.5rem",
  color: "#FFFFFF",
  width: "50vh",
  [theme.breakpoints.down("lg")]: {
    width: "60vh",
  },
  [theme.breakpoints.down("md")]: {
    width: "40vh",
  },
}));
export const TitleBox2 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  paddingLeft: "2rem",
  fontSize: "1.25rem",
  fontFamily: "Poppins",
  alignItems: "center",
  paddingBottom: "2rem",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "0rem",
    justifyContent: "center",
    fontSize: "0.7rem",
  },
}));
export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  fontFamily: "Poppins",
  justifyContent: "start",
  alignItems: "start",
  fontSize: "0.663rem",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    width: "90%",
    margin: "auto",
    textAlign: "center",
  },
}));
export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  paddingTop: "5rem",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
}));

export const useStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "start",
  },
  button: {
    fontSize: "1rem",
    fontWeight: "25rem",
  },
});

export const Heading = styled(Typography)({
  marginLeft: "1.2rem",
});

export const BottomHeading = styled(Typography)({
  marginTop: "6.4rem",
});
export const ImageBox = styled(Typography)({
  margin: "0rem 0.5rem 0rem 0.5rem",
  color: "white",
  zIndex: 4,
});
export const BoxIcon = styled(Box)({
  display: "flex",
  paddingRight: "1rem",
  justifyContent: "center",
  alignItems: "center",
});
export const BoxIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
  },
}));
export const GridItem = styled(Grid)(({ theme }) => ({
  marginLeft: "5rem",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "0rem",
  },
}));
export const GridElemnt = styled(Grid)(({ theme }) => ({
  marginLeft: "1rem",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "0rem",
  },
}));
export const GridCom = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  marginRight: "2rem",
  [theme.breakpoints.down("lg")]: {
    marginRight: "0rem",
  },
}));
export const FooterBox = styled(Grid)(({ theme }) => ({
  display: "none",
  justifyContent: "start",
  alignItems: "start",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 0rem 2rem 0rem",
  },
}));
export const ServiceBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const PrivacyBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.5rem",
  marginBottom: "0.7rem",
}));
export const TypographyE = styled(Grid)(({ theme }) => ({
  marginRight: "1rem",
  fontSize: "0.5rem",
}));
export const TypographyC = styled(Grid)(({ theme }) => ({
  fontSize: "0.5rem",
}));
