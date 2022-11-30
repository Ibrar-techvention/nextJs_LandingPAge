import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Box, Typography, Paper } from "@mui/material";

export const useStyles = makeStyles({
  itemss: {
    display: "flex",
    flexDirection: "column",
  },
  hidden: {
    display: "none",
  },
  PlusShow: {
    color: "orange",
    fontSize: "2rem",
    marginLeft: "1rem",
  },
  minusShow: {
    color: "green",
    fontSize: "2rem",
    marginLeft: "1rem",
  },

  showText: {
    display: "block",
    fontSize: "0.8rem",
    paddingLeft: "3rem",
  },
});

export const Haeding = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "3rem",
  paddingBottom: "4rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}));
export const MainBox = styled(Box)({
  padding: "1rem 0rem 3rem 0rem",
  background: "#F8F8FC",
  marginBottom: "-5rem",
});
export const OneSide = styled(Box)({
  display: "flex",
  alignItems: "center",
});
export const TypographyText = styled(Typography)({
  padding: "0.6rem 0rem 3rem 5rem",
  alignItems: "center",
  color: "#757897",
  opacity: 0.7,
});
export const TextTypo = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  padding: "2rem",
  fontSize: "0.8rem",
  marginLeft: "0.5rem",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
  },
}));

export const Papers = styled(Paper)({
  marginBottom: "0.8rem",
  boxShadow: "0px 24.5562px 32.7416px -14.7337px rgba(149, 149, 149, 0.25)",
  borderRadius: "0.25rem",
});
