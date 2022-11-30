import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Box, Button } from "@mui/material";
import { OneSide, Papers, TextTypo, TypographyText, useStyles } from "./style";
// import { useSelector } from "react-redux";
// import { selectTranslations } from "redux/slices/i18nSlice";

const Content = () => {
  const [open, setOpen] = useState(false);
  // const t = useSelector(selectTranslations);

  const classes = useStyles();
  const handleChange = () => {
    setOpen(!open);
  };

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

        <TextTypo>gcgdftftftsbcsgyyygyreiugygru gfgryfyryriugou?</TextTypo>
      </OneSide>
      <Box>
        <TypographyText
          className={open ? `${classes.showText}` : `${classes.hidden}`}
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
