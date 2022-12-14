import Tools from "./Tools";
import { Data } from "./data";
import { Container, Gridd, TypographyText } from "./style";

const FavouriteTools = () => {
    return (
        <Container>
            <TypographyText variant="h5" textAlign="center" fontWeight="bold">
                Connect with your Favourite Tools
            </TypographyText>
            <Gridd container spacing={1} justifyContent="center">
                {Data.map((val, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Tools valued={val} key={index} />
                ))}
            </Gridd>
        </Container>
    );
};

export default FavouriteTools;
