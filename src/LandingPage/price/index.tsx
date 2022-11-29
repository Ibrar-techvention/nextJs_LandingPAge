/* eslint-disable react/no-array-index-key */
import { Grid, Typography } from "@mui/material";
import PlanMap from "./Content";
import ListMap from "./List";
import {
    Boxes,
    Grids,
    Headings,
    label,
    MainBox,
    Papers,
    Paperss,
    Paragraph,
    Switches,
} from "./style";

const PricingPlan = () => {
    const priceData = [
        {
            title: "Basic",
            price: "$34",
            text: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
            btnText: " Select plan ",

            list: [
                {
                    item: " Lorems ipsum dolor sit amet consectetur ",
                },
                {
                    item: " Lorem ipsumm dolor sit amet consectetur ",
                },
                {
                    item: " Lorem ipsum dolors sit amet consectetur ",
                },
                {
                    item: " Lorem ipsum dolors sit amet consectetur ",
                },
            ],
        },

        {
            title: "Premium",
            price: "$99",
            text: " Lorem ipsum dolor sit amet consectetur sit amet consectetur",
            btnText: "Select Plan",
            list: [
                {
                    item: " Lorem ipsum dolor siit amet consectetur ",
                },
                {
                    item: " Lorem ipsum dolor srit amet consectetur ",
                },
                {
                    item: " Lorem ipsum dolor srtit amet consectetur ",
                },
                {
                    item: " Lorem ipsum dolor siit amet consectetur ",
                },
            ],
        },
    ];

    return (
        <MainBox>
            <Headings>Our Price Plan</Headings>
            <Paragraph textAlign="center">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Ut nec turpis tristique, egestas lacus
                at, cursus arcu
            </Paragraph>
            <Boxes>
                <Typography>monthly</Typography>
                <Switches {...label} />
                <Typography>Annually</Typography>
            </Boxes>
            <Grids container spacing={2} justifyContent="center">
                {priceData.map((val, index) => (
                    <>
                        {index % 2 !== 0 ? (
                            <Grid item lg={4} md={4} sm={8} xs={12}>
                                <Paperss>
                                    <PlanMap
                                        val={val}
                                        index={index}
                                        key={index}
                                    />

                                    <ListMap
                                        val={val}
                                        index={index}
                                        key={index}
                                    />
                                </Paperss>
                            </Grid>
                        ) : (
                            <Grid item lg={4} md={4} sm={8} xs={12}>
                                <Papers>
                                    <PlanMap
                                        val={val}
                                        index={index}
                                        key={index}
                                    />

                                    <ListMap
                                        val={val}
                                        index={index}
                                        key={index}
                                    />
                                </Papers>
                            </Grid>
                        )}
                    </>
                ))}
            </Grids>
        </MainBox>
    );
};

export default PricingPlan;
