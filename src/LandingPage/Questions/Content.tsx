import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Box, styled, Typography, Paper, Button } from "@mui/material";
import { useStyles } from "./style";
// import { useSelector } from "react-redux";
// import { selectTranslations } from "redux/slices/i18nSlice";

const Content = () => {
    const [open, setOpen] = useState(false);
    // const t = useSelector(selectTranslations);

    const classes = useStyles();
    const handleChange = () => {
        setOpen(!open);
    };
    const OneSide = styled(Box)({
        display: "flex",
        alignItems: "center",
    });
    const TypographyText = styled(Typography)({
        padding: "0.6rem 0rem 3rem 5rem",
        alignItems: "center",
        color: "#757897",
        opacity: 0.7,
    });
    const TextTypo = styled(Typography)({
        fontWeight: "bold",
        padding: "2rem",
        fontSize: "0.8rem",
        marginLeft: "0.5rem",
        display: "flex",
    });

    const Papers = styled(Paper)({
        marginBottom: "0.8rem",
        boxShadow:
            "0px 24.5562px 32.7416px -14.7337px rgba(149, 149, 149, 0.25)",
        borderRadius: "0.25rem",
    });

    return (
        <Papers elevation={1} onClick={handleChange} className={classes.itemss}>
            <OneSide>
                {open === true ? (
                    <Button>
                        <RemoveOutlinedIcon className={classes.minusShow} />
                    </Button>
                ) : (
                    <Button className={classes.PlusShow}>
                        <AddIcon />
                    </Button>
                )}

                <TextTypo>
                    gcgdftftftsbcsgyyygyreiugygru gfgryfyryriugou?
                </TextTypo>
            </OneSide>
            <Box>
                <TypographyText
                    className={
                        open ? `${classes.showText}` : `${classes.hidden}`
                    }
                >
                    gcgdftftftsbcsgyyygyreiugygru gfgryfyryriugou accordion
                    gcgdftftftsbcsgyyygyreiugygru gfgryfyryriugou I am
                    tryingcgdftftftsbcsgyyygyreiugygru gfgryfyryriugourar.
                </TypographyText>
            </Box>
        </Papers>
    );
};

export default Content;
