import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";

export const MainBox = styled(Box)({
  padding: "1rem",
});
export const Gridd = styled(Grid)(({ theme }) => ({
  padding: "1rem 4.5rem 0rem 1rem",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
export const ImgBox = styled(Box) ({
  paddingTop: "1.2rem",

});
export const Container = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "90%",
  margin: "auto",
  padding: "6rem 0rem 6rem 0rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "2rem 1rem 2rem 0rem",
  },
}));
