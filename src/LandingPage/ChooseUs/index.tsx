import { Fragment } from "react";
import Features from "./Features";
import Section from "./Section";
import { Container, FragmentBox, Left, Right } from "./styled";

const ChooseUs = () => {
    return (
        <FragmentBox>
        <Container>
           
            <Left>
                <Features />
            </Left>

            <Right>
                <Section />
            </Right>
        </Container>
        </FragmentBox>
    );
};

export default ChooseUs;
