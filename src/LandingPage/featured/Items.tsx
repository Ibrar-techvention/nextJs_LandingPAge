import React, { FC } from "react";
import { Grid } from "@mui/material";
import Section from "./Section";
import FirstItem from "./FirstItem";

interface Props {
    valued: unknown;
    isActive: unknown;
}

const Items: FC<Props> = ({ valued, isActive }) => (
    <Grid item sm={6} md={3} lg={3}>
        {isActive ? <FirstItem val={valued} /> : <Section val={valued} />}
    </Grid>
);

export default Items;
