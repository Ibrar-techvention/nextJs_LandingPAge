import { Box } from "@mui/material";
import Image from "next/image";
import {
  Container,
  Left,
  Right,
  LeftBox,
  Title,
  Description,
  LeftBottom,
  ButtonText,
  LeftBottomIcon,
  IconBox,
  Span,
  ImageBox,
} from "./style";

const Content = () => {
  return (
    <Container>
      <Left>
        <LeftBox>
          <Title>Manage your entire team and Projects</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni
            corrupti adipisci sapiente vero cum, molestiae, alias tempora
            laborum blanditiis quibusdam debitis. Dolores, laborum ea. Corrupti
            dolores voluptates nobis deleniti.
          </Description>
          <LeftBottom>
            <ButtonText variant="contained" color="secondary">
              Try for Free
            </ButtonText>
            <LeftBottomIcon>
              <IconBox>
                <Image
                  src="/images/Polygon.png"
                  alt="tryVideo"
                  width={22}
                  height={22}
                />
              </IconBox>
              <Span>See How it works</Span>
            </LeftBottomIcon>
          </LeftBottom>
        </LeftBox>
      </Left>
      <Right>
        <Box
          sx={ImageBox}
          component="img"
          src="/images/sliderr.png"
          alt="HomeDashboard"
        />
      </Right>
    </Container>
  );
};
export default Content;
