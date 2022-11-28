import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export const Boxes = styled(Box)(() => ({
    marginTop: "8rem",
}));

export const BottomHeading = styled(Typography)(() => ({
    marginTop: "6.4rem",
}));
