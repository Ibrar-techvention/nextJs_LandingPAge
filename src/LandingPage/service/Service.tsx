import React, { FC } from "react";
import { Typography, Button, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

interface Props {
    valued: any;
    isActive: number;
}
const Paperr = styled(Paper)({
    padding: "15px",
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
        <Box>
            <Paperr key={isActive} elevation={1}>
                <ImageBox src={valued.imgSrc} alt="" />
                <TypoGraphyy>{valued.title}</TypoGraphyy>
                <br />
                <Typography p={2}>{valued.text}</Typography>

                <Button
                    sx={{
                        padding: "5px",
                    }}
                >
                    read more
                </Button>
            </Paperr>
        </Box>
    );
};

export default Service;
