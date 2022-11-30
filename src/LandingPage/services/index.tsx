import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "./Content";
import { Container, MainBox } from "./style";
import OurServices from "./OurServices";


const Services = () => {
  return (
    <Container>
      <MainBox>
        <Content />
      </MainBox>
      <OurServices />
    </Container>
  );
};

export default Services;
