import { Typography, Button, Box, Grid, Paper, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Grids = styled(Grid)({
    width: "83%",
    margin: "auto",
});
export const Paperss = styled(Paper)({
    background: "#F05A22",
    boxShadow: " 0px 10px 56px rgba(0, 0, 0, 0.05)",
    color: "#f3f3f3",
    borderRadius: "0.875rem",
});
export const Papers = styled(Paper)({
    boxShadow: "0px 10px 56px rgba(0, 179, 255, 0.22)",
    borderRadius: "0.875rem",
});
export const Switches = styled(Switch)({
    fontSize: "2rem",
});
export const MainBox = styled(Box)({
    padding: "2.5rem 0rem 2.5rem 0rem",
});
export const Boxes = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
});
export const Headings = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: "3.1rem",
    height: "5.125rem",
    textAlign: "center",
    letterSpacing: "-0.03em",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
    },
}));
export const Paragraph = styled(Typography)(({ theme }) => ({
    fontSize: "1.125rem",
    width: "49.938rem",
    margin: "auto",
    fontWeight: "500",
    color: "#5B5B5B",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        width: "14rem",
        marginTop: "-2.8rem",
    },
}));
export const label = { inputProps: { "aria-label": "Color switch demo" } };

export const Heading = styled(Typography)({
    paddingTop: "1rem",
    fontFamily: "Inter",
    fontSize: "1.55rem",
    fontWeight: 550,
    textAlign: "center",
});
export const HeadingP2 = styled(Typography)({
    paddingTop: "0.1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Be Vietnam Pro",
    fontSize: "3.25rem",
    fontWeight: 700,
    color: "#0C0047",
    textAlign: "center",
});
export const HeadingP1 = styled(Typography)({
    paddingTop: "0.1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Be Vietnam Pro",
    fontSize: "3.25rem",
    fontWeight: 700,
    color: "#FFFFFF",
    textAlign: "center",
});
export const TextT = styled(Typography)({
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.34)",
    fontSize: "1rem",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    width: "16rem",
    margin: "auto",
    paddingTop: "2rem",
});
export const Text = styled(Typography)({
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.89)",
    fontSize: "1rem",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    width: "16rem",
    margin: "auto",
    paddingTop: "2rem",
});
export const Buttons = styled(Button)({
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#F05A22",
    borderRadius: "1rem",
    width: "100%",
    fontWeight: "bold",
    color: "#FFFFFF",
    size: "large",
    "&:hover": {
        backgroundColor: "#473126",
    },
});
export const Buttonss = styled(Button)({
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: "1rem",
    width: "100%",
    fontWeight: "bold",
    color: "black",
    size: "large",
    "&:hover": {
        backgroundColor: "#473126",
        color: "white",
    },
});
export const ButtonBox = styled(Box)({
    padding: "0.8rem",
});
