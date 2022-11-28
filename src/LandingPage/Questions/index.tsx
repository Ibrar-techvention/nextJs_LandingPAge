import { Box, Typography, Grid } from "@mui/material";
import React from "react";
// import { useSelector } from "react-redux";
// import { selectTranslations } from "redux/slices/i18nSlice";
import { styled } from "@mui/material/styles";
import Content from "./Content";

const Haeding = styled(Typography)({
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "3.12rem",
    paddingBottom: "4rem",
});
const MainBox = styled(Box)({
    padding: "4rem 0rem 3rem 0rem",
    background: "#F8F8FC",
    marginBottom: "-5rem",
});

const Questions = () => {
    // const t = useSelector(selectTranslations);

    return (
        <MainBox>
            <Box>
                <Haeding>Frequently Asked Questions</Haeding>
            </Box>
            <Grid container spacing={2} justifyContent="center">
                <Grid item sm={12} md={5} lg={5}>
                    {[0, 1, 2].map(index => (
                        <Content key={index} />
                    ))}
                </Grid>
                <Grid item sm={12} md={5} lg={5}>
                    {[0, 1, 2].map(index => (
                        <Content key={index} />
                    ))}
                </Grid>
            </Grid>
        </MainBox>
    );
};

export default Questions;
