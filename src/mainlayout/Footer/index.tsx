/* eslint-disable @next/next/no-img-element */
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import {
    Boxes,
    TitleBox,
    TextBox,
    IconBox,
    TitleBox1,
    TitleBox2,
    TitleBox3,
    TextFieldStyle,
    ImageBox,
    BoxIcon,
    BoxIcons,
    GridItem,
    GridElemnt,
    GridCom,
} from "./footerStyle";

// import { useSelector } from "react-redux";
// import { selectTranslations } from "redux/slices/i18nSlice";

const Footer = () => {
    // const t = useSelector(selectTranslations);
    return (
        <Boxes>
            <TitleBox>MarkTronic</TitleBox>
            <Grid
                container
                justifyContent="space-around"
                rowSpacing={1}
                columnSpacing={1}
            >
                <GridItem item sm={12} lg={2}>
                    <TextBox>
                        Lorem ipsum dolor sit amet, elitestelit adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </TextBox>
                    <IconBox>
                        <ImageBox>
                            <Image
                                src="/images/facebookk.jpg"
                                alt=""
                                width={18}
                                height={15}
                            />
                        </ImageBox>
                        <ImageBox>
                            <Image
                                src="/images/instaa.jpg"
                                alt=""
                                width={18}
                                height={15}
                            />
                        </ImageBox>
                        <ImageBox>
                            <Image
                                src="/images/linkk.jpg"
                                alt=""
                                width={18}
                                height={15}
                            />
                        </ImageBox>
                        <ImageBox>
                            <Image
                                src="/images/twiter.jpg"
                                alt=""
                                width={18}
                                height={15}
                            />
                        </ImageBox>
                    </IconBox>
                </GridItem>
                <GridElemnt item sm={12} lg={3}>
                    <TitleBox1>
                        <BoxIcon>
                            <Image
                                src="/images/messages.jpg"
                                alt=""
                                height={23}
                                width={27}
                            />
                        </BoxIcon>
                        <Box>info@example.com</Box>
                    </TitleBox1>
                    <TitleBox2>
                        <BoxIcon>
                            <Image
                                src="/images/locationss.jpg"
                                alt=""
                                height={23}
                                width={27}
                            />
                        </BoxIcon>
                        xyz xyz
                    </TitleBox2>
                </GridElemnt>
                <GridCom item sm={12} lg={5}>
                    <TitleBox3>
                        <BoxIcons>
                            <TextFieldStyle placeholder="Email address" />
                        </BoxIcons>

                        <Image
                            src="/images/Buttons.png"
                            alt=""
                            height={50}
                            width={54}
                        />
                    </TitleBox3>
                </GridCom>
            </Grid>
        </Boxes>
    );
};

export default Footer;
