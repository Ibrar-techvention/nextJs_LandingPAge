import { FC } from "react";
import { Grid } from "@mui/material";
import Section from "./Section";

interface Props {
    valued: unknown;
    isActive: any;
}

const Items: FC<Props> = ({ valued, isActive }) => (
    <Grid item sm={6} md={3} lg={3}>
        <Section val={valued} key={isActive} />
    </Grid>
);

export default Items;
