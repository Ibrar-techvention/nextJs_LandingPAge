import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Containerr = styled(Box)(({ theme }) => ({
  background: "#F8F8FC",
  width: "100%",
  height: "100vh",
  paddingTop: "2rem",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
}));
export const ButtonBox = styled(Button)(({ theme }) => ({
  marginTop: "2rem",
  marginBottom: "2rem",
  width: "9rem",
  borderRadius: "1rem",
  [theme.breakpoints.up("xl")]: {
    width: "15rem",
    height: "6rem",
    fontSize: "2rem",
  },
}));
export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "25rem",
  paddingTop: "3rem",
  [theme.breakpoints.down("lg")]: {
    width: "18rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "24rem",
    margin: "auto",
  },
  [theme.breakpoints.up("xl")]: {
    width: "38rem",
  },
}));
export const ImgBoxes = styled(Box)(({ theme }) => ({
  background: `url("/images/Ellipse 265.png")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  height: "90vh",
  [theme.breakpoints.down("sm")]: {
    background: `none`,
  },
}));
export const BoxItems = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  display: "flex",
  paddingTop: "3rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: `column`,
  },
}));
export const LeftBox = styled(Box)({
  width: "100%",
  display: "flex",
});
export const Root = styled(Typography)(({ theme }) => ({
  fontSize: "3.2rem",
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "4.8rem",
  },
}));
export const TypographyText = styled(Typography)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("xl")]: {
    fontSize: "2rem",
  },
}));

export const sliderImages = {
  width: { sm: "70%", lg: "50%", md: "50%", xl: "100%" },
  objectFit: "cover",
  display: "flex",
};
