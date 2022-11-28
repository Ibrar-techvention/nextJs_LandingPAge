import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import Service from './Service';
import { styled } from '@mui/material/styles';

const MainBox = styled(Box)({
    display: 'flex',
    width: '90%',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '2rem',
});
const GridItem = styled(Grid)({
    width: '100%',
    margin: 'auto',
});
const ButtonService = styled(Button)({
    width: '8.563rem',
    height: '3.2rem',
    borderRadius: '0.5rem',
});
const BoxStyle = styled(Box)({
    paddingTop: '2rem',
});
const AllServices = () => {
    
    const CardData = [
        {
            imgSrc: '/images/Service1.png',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
            title: "All Customers",
            link: 'reactjs.org',
        },
        {
            imgSrc: '/images/Service2.png',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
            title: "All Customers",
            link: 'reactjs.org',
        },
        {
            imgSrc: '/images/Service3.png',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
            title: "All Customers",
            link: 'reactjs.org',
        },
    ];

    return (
        <MainBox>
            
            <GridItem container spacing={3} justifyContent="center">
            
                {CardData.map((val, index) => (
                    <Grid item sm={12} md={4} lg={4} key={index}>
                        <Service valued={val} isActive={index} key={index} />
                    </Grid>
                ))}
            </GridItem>
            <BoxStyle>
                <ButtonService variant="contained">See All</ButtonService>
            </BoxStyle>
        </MainBox>
    );
};

export default AllServices;
