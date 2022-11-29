import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
export const prev = {
  display: "block",
  background: "black",
  color: "black",
  borderRadius: "10px",
  marign: "5rem",
};
export const next = {
  display: "block",
  background: "black",
  color: "black",
  borderRadius: "10px",
};
export const MainBox = styled(Box)({
  width: "75%",
  margin: "auto",
  backgroundColor: "lightgray",
});

export function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <Box className={className} style={next} onClick={onClick}>
    </Box>
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box className={className} style={prev} onClick={onClick}>
    </Box>
  );
}

export const settings = {
  infinite: true,
  speed: 500,
  centerMode: true,
  className: "center",
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
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

export const Papers = styled(Paper)({
  margin: "1rem",
});

export const Heading = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
});

export const Headings = styled(Typography)({
  margin: "1rem 1.5rem 0rem 1.5rem",
  textAlign: "justify",
  display: "flex",
  flexDirection: "column",
});

export const Images = styled("img")({
  width: "100%",
  objectFit: "cover",
});

export const Buttons = styled(Button)({
  textAlign: "left",
  marginLeft: "2.5rem",
});
