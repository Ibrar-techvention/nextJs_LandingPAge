import { Typography } from "@mui/material";
import React from "react";
import Tools from "./Tools";
import { Data } from "./data";
import { Container, Gridd } from "./style";

const FavouriteTools = () => {
    return (
        <Container>
            <Typography variant="h5" textAlign="center" fontWeight="bold">
                Connect with your Favourite Tools
            </Typography>
            <Gridd container columnSpacing={13} justifyContent="center">
                {Data.map((val, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Tools valued={val} key={index} />
                ))}
            </Gridd>
        </Container>
    );
};

export default FavouriteTools;
