import { Box } from "@mui/material";
import React from "react";
import LeftData from "./Content";
import { BoxItems, Containerr, ImgBoxes, LeftBox, sliderImages } from "./style";

const SectionEn = () => {
    return (
        <Containerr>
            <ImgBoxes>
                <BoxItems>
                    <LeftBox>
                        <LeftData />
                    </LeftBox>
                    <Box
                        component="img"
                        src="/images/AboustUS.png"
                        sx={sliderImages}
                    />
                </BoxItems>
            </ImgBoxes>
        </Containerr>
    );
};

export default SectionEn;
