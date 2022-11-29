import AboutUss from "src/LandingPage/AboutUs";
import Services from "src/LandingPage/service";
import ChooseUs from "../src/LandingPage/ChooseUs";
import FavouriteTools from "../src/LandingPage/FavouriteTools";
import FeaturedService from "../src/LandingPage/featured";
import PricingPlan from "../src/LandingPage/price";
import Questions from "../src/LandingPage/Questions";
import Slider from "../src/LandingPage/Slider";

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
        </>
    );
}
