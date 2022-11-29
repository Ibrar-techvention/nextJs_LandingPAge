import { Box } from "@mui/material";
import { Buttons, Heading, Headings, Images, Papers } from "./style";

const SingleService = () => {
    return (
        <>
            <Box className="project">
                <Papers elevation={1}>
                    <Images src="/images/Service1.png" alt="" />
                    <Heading variant="h5">All Customers</Heading>
                    <Headings>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit eveniet voluptas voluptates accusantium, veniam
                        dolor corporis rem ab temporibus illo dolorem maxime ea
                        nisi quisquam quod placeat, harum mollitia porro.
                    </Headings>
                    <Buttons>Read More</Buttons>
                </Papers>
            </Box>
        </>
    );
};

export default SingleService;
