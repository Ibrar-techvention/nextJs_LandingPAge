import React, { FC } from "react";
import { List, ListItem, ListItemText, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface FooterProps {
    val: any;
}
const MainList = styled(List)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
});
const TextBox = styled(Box)({
    fontWeight: 700,
});
const FooterMap: FC<FooterProps> = ({ val }) => {
    return (
        <MainList>
            <ListItem>
                <TextBox>{val.title}</TextBox>
            </ListItem>
            <ListItem>
                <ListItemText primary={val.text1} />
            </ListItem>
            <ListItem>
                <ListItemText primary={val.text2} />
            </ListItem>
            <ListItem>
                <ListItemText primary={val.text3} />
            </ListItem>
            <ListItem>
                <ListItemText primary={val.text4} />
            </ListItem>
        </MainList>
    );
};

export default FooterMap;
