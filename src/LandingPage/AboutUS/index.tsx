import {
    Boxes,
    ButtonText,
    Container,
    Heading,
    OverlayBox,
    Paragraph,
    TypographyText,
} from "./style";

const AboutUss = () => {
    return (
        <Container>
            <OverlayBox>
                <Boxes>
                    <TypographyText>About Us</TypographyText>
                    <Heading variant="h3">About US</Heading>
                    <Paragraph textAlign="center">
                        In hac habitasse platea dictumst. Aliquam lobortis.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. In dui magna, posuere eget, vestibulum et, tempor
                        auctor, justo. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                    </Paragraph>
                    <ButtonText>Lean more</ButtonText>
                </Boxes>
            </OverlayBox>
        </Container>
    );
};

export default AboutUss;
