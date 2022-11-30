import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundImage: "url(/images/aboutImgs.png)",
  backgroundRepeat: "no-repeat",
  objectFit: "cover",
  backgroundSize: "cover",
  justifyContent: "center",
  height: "90vh",
  maxWidth: "80rem",
  margin: "auto",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "70vh",
  },

}));
export const OverlayBox = styled(Box)({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  opacity:"0.85",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const TypographyText = styled(Typography)({
  fontSize: "0.75rem",
  paddingBottom: "0.7rem",
});
export const ButtonText = styled(Button)(({ theme }) => ({
  fontSize: "0.95rem",
  paddingBottom: "0.7rem",
  paddingTop: "1.9rem",
  color: "#F05A22",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0.7rem ",
  },
}));

export const Boxes = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  width: "40rem",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: "0rem 4rem 1rem 4rem",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0rem 2rem 1rem 2rem",
  },
}));
export const Heading = styled(Typography)({
  fontWeight: 600,
  fontSize: "2.7rem",
  paddingBottom: "0.9rem",
  "&:hover": {
    transform: "scale(1.2)",
  },
});
export const Paragraph = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1rem",
  color: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
}));
