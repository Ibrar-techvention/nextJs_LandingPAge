import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AllServices from "./MainServices";
import Main from "./Content";

const MainBox = styled(Box)({
    display: "flex",
    width: "100%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "0.5rem",
});
;

const Services = () => {
 
  
    return (
        <Box sx={{ width: "100%", margin: "auto" }}>
            <MainBox>
                <Main />
            </MainBox>
            <AllServices />
        </Box>
    );
};

export default Services;
