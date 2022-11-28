import React from "react";
import { ButtonBox, MainBox, Root, TypographyText } from "./style";

const LeftData = () => {
    return (
        <MainBox>
            <TypographyText>Know more</TypographyText>

            <Root>About US</Root>

            <TypographyText>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Ut nec turpis tristique, egestas lacus
                at, cursus arcu
            </TypographyText>
            <ButtonBox variant="contained" color="secondary">
                Learn More
            </ButtonBox>
        </MainBox>
    );
};

export default LeftData;
