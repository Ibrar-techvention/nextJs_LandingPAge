import { FC } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {
    ButtonBox,
    Buttons,
    Buttonss,
    Heading,
    HeadingP1,
    HeadingP2,
    Text,
    TextT,
} from "./style";

interface PlanProps {
    val: any;
    index: any;
    year:any;
}
const Section: FC<PlanProps> = ({ val, index,year }) => {
    return (
        <Box>
            <Heading>{val.title}</Heading>
            {index % 2 !== 0 ? (
                <Text>{val.text}</Text>
            ) : (
                <TextT>{val.text}</TextT>
            )}

            {index % 2 !== 0 ? (
                <HeadingP1 p={2}>
                    {val.price}
                    {
                        year?
                        <Typography variant="h6">/year</Typography>:                    <Typography variant="h6">/month</Typography>

                    }
                </HeadingP1>
            ) : (
                <HeadingP2 p={2}>
                    {val.price}
                    {
                        year?
                        <Typography variant="h6">/year</Typography>:                    <Typography variant="h6">/month</Typography>

                    }                </HeadingP2>
            )}
            {index % 2 !== 0 ? (
                <ButtonBox>
                    <Buttonss>{val.btnText}</Buttonss>
                </ButtonBox>
            ) : (
                <ButtonBox>
                    <Buttons>{val.btnText}</Buttons>
                </ButtonBox>
            )}
        </Box>
    );
};

export default Section;
