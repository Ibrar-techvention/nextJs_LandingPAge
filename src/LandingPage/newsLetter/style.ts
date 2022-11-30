import { Typography, Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "8rem auto 4rem auto",
  width: "85%",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
export const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingRight: "1rem",
}));
export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "75rem",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    margin: "auto",
  },
}));
export const TypographyHeading = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: "1.5rem",
  fontWeight: 700,
  [theme.breakpoints.down("lg")]: {
    padding: "1rem 0rem 0.5rem 0rem",
    justifyContent: "center",
    textAlign:"center"
  },
}));
export const TypographyText = styled(Typography)(({ theme }) => ({
  display: "flex",
  color: "#637381",
  [theme.breakpoints.down("lg")]: {
    padding: "0rem 1rem 1.5rem 1rem",
    justifyContent: "center",
    textAlign:"center"
    
  },
}));
export const ButtonText = styled(Button)(({ theme }) => ({
  display: "flex",
  height: "3.5rem",
  borderRadius: "0rem 1rem 1rem 0rem",
}));
export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  width: "100%",
  maxWidth: "100%",
  fontSize: "1.25rem",
  fontFamily: "Poppins",
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
export const BoxIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
  },
}));
