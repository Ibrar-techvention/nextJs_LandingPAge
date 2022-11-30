import { Box, Grid } from "@mui/material";
// import { useSelector } from "react-redux";
// import { selectTranslations } from "redux/slices/i18nSlice";
import Content from "./Content";
import { Haeding, MainBox } from "./style";

const Questions = () => {
  // export const t = useSelector(selectTranslations);

  return (
    <MainBox>
      <Box>
        <Haeding>Frequently Asked Questions</Haeding>
      </Box>
      <Grid container spacing={{ sm: 1, lg: 2 }} justifyContent="center">
        <Grid item sm={12} md={5} lg={5}>
          {[0, 1, 2].map((index) => (
            <Content key={index} />
          ))}
        </Grid>
        <Grid item sm={12} md={5} lg={5}>
          {[0, 1, 2].map((index) => (
            <Content key={index} />
          ))}
        </Grid>
      </Grid>
    </MainBox>
  );
};

export default Questions;
