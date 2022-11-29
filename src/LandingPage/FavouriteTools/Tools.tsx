/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import { FC } from "react";

interface Props {
    valued: any;
}

const Tools: FC<Props> = ({ valued }) => {
    return (
        <Grid item xs={6} sm={3} md={3} lg={1} display="flex">
            <img src={valued.pic} alt="" />
        </Grid>
    );
};

export default Tools;
