import Services from "../src/LandingPage/services";
import AboutUss from "../src/LandingPage/AboutUs";
import ChooseUs from "../src/LandingPage/ChooseUs";
import FavouriteTools from "../src/LandingPage/FavouriteTools";
import FeaturedService from "../src/LandingPage/featured";
import PricingPlan from "../src/LandingPage/price";
import Questions from "../src/LandingPage/Questions";
import Slider from "../src/LandingPage/Slider";
import NewsLetter from "src/LandingPage/newsLetter";

export default function Home() {
  return (
    <>
      <Slider />
      <ChooseUs />
      <FavouriteTools />
      <AboutUss />
      <FeaturedService />
      <Services />
      <PricingPlan />
      <Questions />
      <NewsLetter/>
    </>
  );
}
