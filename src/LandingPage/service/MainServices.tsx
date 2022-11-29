import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Service from "./Service";

const MainBox = styled(Box)({
    width: "85%",
    margin: "auto",
});

const CardData = [
    {
        imgSrc: "/images/ServiceOne.png",
        text: "Lorem ipsum dolors sit amet consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
        title: "All Customerss",
        link: "reactjs..org",
    },
    {
        imgSrc: "/images/ServiceTwo.png",
        text: "Lorem ipsum dolors sit amet consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
        title: "All Customerss",
        link: "rectjs.org",
    },
    {
        imgSrc: "/images/ServiceThree.png",
        text: "Lorem ipsum dolors sit ameto consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
        title: "All Customersss",
        link: "reacitjs.org",
    },
    {
        imgSrc: "/images/ServiceOne.png",
        text: "Lorem ipsum dolors sit ameta consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
        title: "All Customeras",
        link: "reactjs.orgo",
    },
    {
        imgSrc: "/images/ServiceTwo.png",
        text: "Lorem ipsum dolors sit ameti consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
        title: "All Customers",
        link: "reactjs.org",
    },
    {
        imgSrc: "/images/ServiceThree.png",
        text: "Lorem ipsum dolors sit amete consectetur adipisicing elit. Voluptas voluptates asperiores quam quis ab blanditiis numquam corporis provident amet quasi atque, eaque neque, reiciendis veniam et in inventore alias nam!",
        title: "All Customers",
        link: "reactjs.org",
    },
];
const prev = {
    display: "block",
    background: "blue",
    color: "Blue",
    borderRadius: "10px",
    marign: "5rem",
};
const next = {
    display: "block",
    background: "blue",
    color: "Blue",
    borderRadius: "10px",
};
function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return <Box className={className} style={next} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return <Box className={className} style={prev} onClick={onClick} />;
}
const AllServices = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <MainBox>
            <Slider {...settings}>
                {CardData.map((val, index) => (
                    <Service valued={val} isActive={index} />
                ))}
            </Slider>
        </MainBox>
    );
};

export default AllServices;
