/* eslint-disable react/no-array-index-key */
import Items from "./Items";
import Main from "./Feature";
import { GridItem, MainBox } from "./style";
import { chooseData } from "./data";

const FeaturedService = () => {
    

    return (
        <MainBox>
            <Main />
            <GridItem container columnSpacing={3} rowSpacing={4}>
                {chooseData.map((val, index) => (
                    <Items valued={val} isActive={index > 0} key={index} />
                ))}
            </GridItem>
        </MainBox>
    );
};

export default FeaturedService;
