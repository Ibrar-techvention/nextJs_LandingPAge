import { makeStyles } from "@mui/styles";
import { Typography, Box, TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Boxes = styled(Box)(({ theme }) => ({
    marginTop: "5rem",
    paddingTop: "4rem",
    background: "#1F1D2B",
    color: "white",
    height: "55vh",
    [theme.breakpoints.down("md")]: {
        height: "100%",
    },
}));
export const TitleBox = styled(Box)({
    display: "flex",
    justifyContent: "start",
    paddingLeft: "6.813rem",
    fontSize: "1.25rem",
    textTransform: "uppercase",
    fontFamily: "Poppins",
    alignItems: "center",
    paddingBottom: "2rem",
    fontWeight: 500,
});
export const TitleBox1 = styled(Box)({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: "2rem",
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    paddingBottom: "1rem",
});
export const TitleBox3 = styled(Box)({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: 500,
    maxWidth: "100%",
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    paddingBottom: "2rem",
    color: "#FFFFFF",
});
export const TextFieldStyle = styled(TextField)(({ theme }) => ({
    background: "rgba(145, 158, 171, 0.08)",
    border: "1px solid #FFFFFF",
    borderRadius: "0.5rem",
    color: "#FFFFFF",
    width: "50vh",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
export const TitleBox2 = styled(Box)({
    display: "flex",
    justifyContent: "start",
    paddingLeft: "2rem",
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    alignItems: "center",
    paddingBottom: "2rem",
});
export const TextBox = styled(Box)({
    display: "flex",
    fontFamily: "Poppins",
    justifyContent: "start",
    alignItems: "start",
    fontSize: "0.663rem",
});
export const IconBox = styled(Box)({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: "5rem",
});

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

export const Heading = styled(Typography)(() => ({
    marginLeft: "1.2rem",
}));

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
export const BoxIcons = styled(Box)({
    paddingRight: "0.2rem",
});
export const GridItem = styled(Grid)({
    marginLeft: "5rem",
});
export const GridElemnt = styled(Grid)({
    marginLeft: "1rem",
});
export const GridCom = styled(Grid)({
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    marginRight: "2rem",
});
