import { Box, CardMedia } from "@mui/material";
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
  ImageCard,
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
            <ButtonText color="primary" variant="contained">
              Try for Free
            </ButtonText>
            <LeftBottomIcon>
              <IconBox>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={ImageCard}
                  image="/images/Polygon.png"
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
