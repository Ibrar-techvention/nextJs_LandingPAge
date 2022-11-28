import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import Content from "./Content";
import { BoxDot, BoxDot1 } from "./style";

const MainSlider = () => {
    const sliderRef = useRef<never>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const before = (next: never) => {
        setCurrentSlide(next);
    };
    const customPage = (i: never) => {
        return <>{currentSlide === i ? <BoxDot /> : <BoxDot1 />}</>;
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        customPaging: customPage,
        beforeChange: before,
    };
    return (
        <Slider ref={sliderRef} {...settings}>
            {[1, 2, 3].map(index => (
                <Content key={index} />
            ))}
        </Slider>
    );
};

export default MainSlider;
