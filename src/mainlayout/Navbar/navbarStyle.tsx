import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Select,
  List,
  Button,
  Box,
} from "@mui/material";

export const ButtonStyle: any = styled(Button)(({ theme }) => ({
  display: "none",
  color: "white",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
export const MainBox: any = styled(Box)(({ theme }) => ({
  paddingTop: "1rem",
  paddingBottom: "1rem",
  width: "92%",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0rem",
    paddingBottom: "0rem",
    width: "100%",
  },
}));
export const LoginButton = styled(Button)(({ theme }) => ({
  paddingRight: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.675rem",
    paddingRight: "0rem",
    fontWeight: "25rem",
  },
  [theme.breakpoints.up("xl")]: {
    marginLeft: 5,
    fontSize: "1.675rem",
    fontWeight: "25rem",
  },
}));
export const StartButton = styled(Button)(({ theme }) => ({
  width: "7.563rem",
  height: "3.2rem",
  borderRadius: "0.5rem",
  fontWeight: "37.5rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: 3,
    width: "6.563rem",
    height: "2.9rem",
    borderRadius: "0.5rem",
    fontWeight: "37.5rem",
    fontSize: "0.675rem",
  },
  [theme.breakpoints.up("xl")]: {
    marginLeft: 5,
    fontSize: "1.275rem",
    fontWeight: "25rem",
    width: "10.563rem",
    height: "3.5rem",
  },
}));

export const Appbar = styled(AppBar)({
  boxShadow: "none",
  background: "url(/images/backgroundd.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  position: "relative",
  color: "white",
});

export const ToolBar = styled(Toolbar)(({ theme }) => ({
  paddingTop: 1,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
    marginX: 0,
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
    marginX: 15,
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "37.5rem",
  fontSize: "1.5rem",
  fontFamily: "Poppins",
  paddingLeft: "0rem",
  [theme.breakpoints.down("md")]: {
    fontWeight: "37.5rem",
    fontSize: "1.3srem",
    paddingLeft: "0.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontWeight: "37.5rem",
    fontSize: "2.3rem",
    paddingLeft: "1rem",
  },
}));

export const Stacks = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const Paperss = {
  sx: {
    backgroundColor: "white",
    justifyContent: "initial",
    flexDirection: "column",
    display: "flex",
    width: 300,
    alignItems: "top",
  },
};
export const ButtonText = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",

  "&:hover": {
    backgroundColor: "#0e1a40",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.65rem",
    fontWeight: "25rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.35rem",
    fontWeight: "25rem",
  },
}));
export const Selects = styled(Select)(({ theme }) => ({
  boxShadow: "none",
  marginTop: "0.5rem",
  display: "flex",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  ".Mui-focused": { border: 0 },
  ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
    color: "white",
  },
  ".css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
    color: "white",
  },
  fontSize: "1rem",
  fontWeight: "25rem",
  color: "white",
  [theme.breakpoints.down("md")]: {
    color: "black",
  },
}));
export const SignIn = styled(Button)(() => ({
  fontSize: "0.875rem",
  fontWeight: "25rem",
  justifyContent: "left",
  paddingTop: "1rem",
}));

export const Start = styled(Button)(() => ({
  width: "8.563rem",
  height: "3.2rem",
  justifyContent: "left",
  paddingTop: "1rem",
  borderRadius: "0.5rem",
  fontWeight: "37.5rem",
  fontSize: "0.875rem",
}));

export const Buttons: any = styled(Button)({
  fontSize: "0.85rem",
  fontWeight: "25rem",
  justifyContent: "left",
  paddingTop: "1rem",
});
export const Lists = styled(List)({
  height: "20rem",
  display: "flex",
  marginTop: "5rem",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: "3rem",
});
