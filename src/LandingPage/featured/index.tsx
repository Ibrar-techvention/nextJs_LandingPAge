/* eslint-disable react/no-array-index-key */
import Items from "./Items";
import Main from "./Feature";
import { GridItem, MainBox } from "./style";

const FeaturedService = () => {
    const chooseData = [
        {
            image: "/images/FirstFeature.png",
            text: "Lorems ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consecte",
            heading: "Employee Management",
        },
        {
            image: "/images/SecondFeature.png",
            text: "Loreme ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consecte",
            heading: "Customer Mangament",
        },
        {
            image: "/images/ThirdFeature.png",
            text: "Loremss ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consecte",
            heading: "Finance Update",
        },
        {
            image: "/images/FourthFeature.png",
            text: "Loremss ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consecte",
            heading: "HR Managment",
        },
    ];

    return (
        <MainBox>
            <Main />
            <GridItem container columnSpacing={3} rowSpacing={2}>
                {chooseData.map((val, index) => (
                    <Items valued={val} isActive={index > 0} key={index} />
                ))}
            </GridItem>
        </MainBox>
    );
};

export default FeaturedService;
