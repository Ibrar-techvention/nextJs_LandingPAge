import { Grid } from "@mui/material";
import Image from "next/image";

import React, { FC } from "react";
import { ImgBox } from "./style";

interface Props {
  valued: any;
}

const Tools: FC<Props> = ({ valued }) => {
  return (
    <Grid item xs={6} sm={3} md={3} lg={1} display="flex">
      <Image src={valued.pic} alt="" />
    </Grid>
  );
};

export default Tools;
