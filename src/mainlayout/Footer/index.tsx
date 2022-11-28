import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import FooterMap from "./Footer";
import { Data } from "./Data";
// import { useSelector } from "react-redux";
// import { selectTranslations } from "redux/slices/i18nSlice";

const MainBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    padding: "3rem",

    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        fontSize: "2rem",
    },
}));
const Boxes = styled(Box)(({ theme }) => ({
    marginTop: "5rem",
    paddingTop: "3rem",
    background: "#1F1D2B",
    color: "white",
    height: "80vh",
    [theme.breakpoints.down("md")]: {
        height: "100%",
    },
}));
const BottomBox = styled(Box)({
    paddingLeft: "10rem",
    paddingTop: "3rem",
});
const Footer = () => {
    // const t = useSelector(selectTranslations);
 
    return (
        <Boxes>
            <MainBox>
                {Data.map(val => {
                    return (
                        <>
                            <FooterMap val={val} />
                        </>
                    );
                })}
            </MainBox>
            <BottomBox>Martronic ERP</BottomBox>
        </Boxes>
    );
};

export default Footer;
