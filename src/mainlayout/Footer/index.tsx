/* eslint-disable @next/next/no-img-element */
import { Grid, Box, Typography } from "@mui/material";
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
  Container,
  GridItem,
  GridElemnt,
  GridCom,
  FooterBox,
  ServiceBox,
  PrivacyBox,
  TypographyE,
  TypographyC,
} from "./footerStyle";

// import { useSelector } from "react-redux";
// import { selectTranslations } from "redux/slices/i18nSlice";

const Footer = () => {
  // const t = useSelector(selectTranslations);
  return (
    <Container>
      <Boxes>
        <TitleBox>MarkTronic</TitleBox>
        <Grid
          container
          justifyContent="space-around"
          rowSpacing={1}
          columnSpacing={1}
        >
          <GridItem item xs={7} sm={7} md={2} lg={2}>
            <TextBox>
              Lorem ipsum dolor sit amet, elitestelit adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
              dolor sit amet, consectetur adipiscing elit
            </TextBox>
            <IconBox>
              <ImageBox>
                <Image
                  src="/images/facebookk.jpg"
                  alt=""
                  width={18}
                  height={18}
                />
              </ImageBox>
              <ImageBox>
                <Image src="/images/instaa.jpg" alt="" width={18} height={18} />
              </ImageBox>
              <ImageBox>
                <Image src="/images/linkk.jpg" alt="" width={18} height={18} />
              </ImageBox>
              <ImageBox>
                <Image src="/images/twiter.jpg" alt="" width={18} height={18} />
              </ImageBox>
            </IconBox>
          </GridItem>
          <GridElemnt item xs={6} sm={4} md={3} lg={3}>
            <TitleBox1>
              <BoxIcon>
                <Image
                  src="/images/messages.jpg"
                  alt=""
                  height={20}
                  width={20}
                />
              </BoxIcon>
              <Box>info@example.com</Box>
            </TitleBox1>
            <TitleBox2>
              <BoxIcon>
                <Image
                  src="/images/locationss.jpg"
                  alt=""
                  height={20}
                  width={20}
                />
              </BoxIcon>
              <Box>xyz xyz</Box>
            </TitleBox2>
          </GridElemnt>
          <GridCom item sm={7} md={4} lg={4} xs={10}>
            <TitleBox3>
              <TextFieldStyle fullWidth placeholder="Email address" />

              <Image src="/images/Buttons.png" alt="" height={62} width={62} />
            </TitleBox3>
          </GridCom>
        </Grid>

        <FooterBox>
          <PrivacyBox>2021. All rights reserved</PrivacyBox>
          <ServiceBox>
            <TypographyE>Help Center</TypographyE>
            <TypographyC>Term Of Service</TypographyC>
          </ServiceBox>
        </FooterBox>
      </Boxes>
    </Container>
  );
};

export default Footer;
