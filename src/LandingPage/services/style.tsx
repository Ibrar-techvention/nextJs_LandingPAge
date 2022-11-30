import { Box, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)({
  width: "100%",
  margin: "auto",
  padding: "3rem 0rem 3rem 0rem",
});
export const MainBox = styled(Box)({
  display: "flex",
  width: "80%",
  margin: "auto",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingBottom: "0.5rem",
});
export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2.625rem",
  textAlign: "center",
  letterSpacing: "-0.03em",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.7rem",
  },
}));
export const MiniHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 550,
  fontSize: "1.125rem",
  fontFamily: "Inter",
  fontStyle: "normal",
  textAlign: "center",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  maxWidth: "38.938rem",
  display: "flex",
  color: "#5B5B5B",

  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
    paddingTop: "2rem",
  },
}));
export const Paperr = styled(Paper)({
  padding: "1rem",
  margin: "1rem",
  boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.28)",
  borderRadius: "0.25",
  "&:hover": {
    border: "0.125rem solid #7F01FC",
  },
});
export const ReadButton = styled(Button)({
  padding: "0.2rem",
});
export const TypoGraphyy = styled(Typography)({
  fontSize: "1.7rem",
  fontWeight: "bold",
  textAlign: "center",
});
export const ImageBox = styled("img")({
  objectFit: "cover",
  width: "100%",
});
export const Previous = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "-3rem",
  zIndex: 10,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    left: "-1.3rem",
  },
}));
export const Next = styled(Box)(({ theme }) =>({
  position: "absolute",
        top: "40%",
        right: "-3rem",
        zIndex: 10,
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
          right: "-1.3rem"
        },
}));
export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
      },
    },
  ],
};
