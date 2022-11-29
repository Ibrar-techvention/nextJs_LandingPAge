import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Heading = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: "2.625rem",
    textAlign: "center",
    letterSpacing: "-0.03em",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
    },
}));
const MiniHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 550,
    fontSize: "1.125rem",
    fontFamily: "Inter",
    fontStyle: "normal",
    textAlign: "center",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
        fontSize: "0.8rem",
    },
}));
const Paragraph = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem",

    width: "38.938rem",
    color: "#5B5B5B",

    [theme.breakpoints.down("md")]: {
        fontSize: "0.8rem",
        width: "14rem",
    },
}));

const Main = () => {
    return (
        <Box>
            <MiniHeading>Our Services</MiniHeading>
            <Heading>All Services</Heading>
            <Paragraph textAlign="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas voluptates asperiores quam quis ab blanditiis numquam
                corporis provident amet quasi atque, eaque neque, reiciendis
                veniam et in inventore alias nam!
            </Paragraph>
        </Box>
    );
};

export default Main;
