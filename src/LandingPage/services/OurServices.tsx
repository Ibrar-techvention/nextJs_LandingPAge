import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Service from "./Service";
import { CardData } from "./data";
import { Next, Previous, settings } from "./style";
import { useRef } from "react";

const MainBox = styled(Box)({
  width: "85%",
  margin: "auto",
  position: "relative",
  maxWidth: "80rem",
});


const OurServices = () => {
  const sliderRef = useRef<any>(null);
  const NextIcon = () => {
    sliderRef.current.slickNext();
  };
  const PrevIcon = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <MainBox>
      <Next onClick={NextIcon}>
        <img src="/images/arrowR.svg" />
      </Next>
      <Previous onClick={PrevIcon}>
        <img src="/images/arrowL.svg" />
      </Previous>

      <Slider ref={sliderRef} {...settings}>
        {CardData.map((val, index) => (
          <Service valued={val} isActive={index} />
        ))}
      </Slider>
    </MainBox>
  );
};

export default OurServices;
