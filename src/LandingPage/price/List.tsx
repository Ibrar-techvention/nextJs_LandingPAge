/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";

interface ListProps {
    val: any;
    index: any;
}
const ListItems: FC<ListProps> = ({ val, index }) => (
    <Box>
        <List key={index}>
            {val.list.map((sub: any, key: any) => (
                <ListItem disablePadding key={key}>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? (
                                <img src="/images/priceIcons.png" alt="" />
                            ) : (
                                <img src="/images/priceIcon.png" alt="" />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={sub.item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);

export default ListItems;
