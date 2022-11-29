import { FC } from "react";
import { Typography, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

interface Props {
    valued: any;
    isActive: number;
}
const Paperr = styled(Paper)({
    padding: "1rem",
});
const ReadButton = styled(Button)({
    padding: "0.2rem",
});
const TypoGraphyy = styled(Typography)({
    fontSize: "1.7rem",
    fontWeight: "bold",
    textAlign: "center",
});
const ImageBox = styled("img")({
    objectFit: "cover",
    width: "100%",
});
const Service: FC<Props> = ({ valued, isActive }) => {
    return (
        <Paperr key={isActive} elevation={1}>
            <ImageBox src={valued.imgSrc} alt="" />
            <TypoGraphyy>{valued.title}</TypoGraphyy>

            <Typography p={2}>{valued.text}</Typography>

            <ReadButton>read more</ReadButton>
        </Paperr>
    );
};

export default Service;
