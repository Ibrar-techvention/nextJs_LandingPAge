import Image from "next/image";
import {
  BoxIcons,
  ButtonText,
  ImageBox,
  MainBox,
  TextBox,
  TextFieldStyle,
  TitleBox,
  TypographyHeading,
  TypographyText,
} from "./style";

const NewsLetter = () => {
  return (
    <MainBox>
      <ImageBox>
        <Image src="/images/news.png" alt="" height={112} width={112} />
      </ImageBox>
      <TextBox>
        <TypographyHeading>Sign Up For Newsletter</TypographyHeading>
        <TypographyText>Receive 50% Discount on first project</TypographyText>
      </TextBox>
      <TitleBox>
        <BoxIcons>
          <TextFieldStyle placeholder="Enter Your Email" />
        </BoxIcons>

        <ButtonText variant="contained" color="primary" size="large">
          Sign Up
        </ButtonText>
      </TitleBox>
    </MainBox>
  );
};

export default NewsLetter;
