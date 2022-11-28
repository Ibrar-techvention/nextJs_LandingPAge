import Features from "./Features";
import Section from "./Section";
import { Container, Left, Right } from "./styled";

const ChooseUs = () => {
  return (
    <Container>
      <Left>
        <Features />
      </Left>

      <Right>
        <Section />
      </Right>
    </Container>
  );
};

export default ChooseUs;
