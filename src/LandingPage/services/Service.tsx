import { FC } from "react";
import { Typography } from "@mui/material";
import { ImageBox, Paperr, ReadButton, TypoGraphyy } from "./style";

interface Props {
  valued: any;
  isActive: number;
}

const Service: FC<Props> = ({ valued, isActive }) => {
  return (
    <Paperr key={isActive} elevation={4}>
      <ImageBox src={valued.imgSrc} alt="" />
      <TypoGraphyy>{valued.title}</TypoGraphyy>

      <Typography p={2}>{valued.text}</Typography>

      <ReadButton>read more</ReadButton>
    </Paperr>
  );
};

export default Service;
