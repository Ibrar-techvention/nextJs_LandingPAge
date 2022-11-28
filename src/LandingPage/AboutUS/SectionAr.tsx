import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeftData from "./Content";
import { sliderImages } from "./style";

const Grids = styled(Grid)({
    width: "90%",
    margin: "auto",
});

const BoxesL = styled(Box)(({ theme }) => ({
    height: "100vh",
    background: `url("/images/Ellipse 265L.png")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    [theme.breakpoints.down("md")]: {
        background: `none`,
        width: "100%",
        height: "100%",
    },
}));
const ImgBox = styled(Box)(({ theme }) => ({
    marginTop: "3rem",
    [theme.breakpoints.down("md")]: {
        margin: "0rem",
    },
}));
const SectionAr = () => {
    return (
        <BoxesL>
            <Grids container spacing={2}>
                <Grid item lg={6} xs={12}>
                    <LeftData />
                </Grid>

                <Grid item lg={6} xs={12}>
                    <ImgBox>
                        <Box
                            component="img"
                            src="/images/AboustUS.png"
                            sx={sliderImages}
                        />
                    </ImgBox>
                </Grid>
            </Grids>
        </BoxesL>
    );
};

export default SectionAr;
