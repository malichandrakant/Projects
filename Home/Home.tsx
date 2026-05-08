import React, {FC, ReactElement, useEffect} from "react";

import CarouselImageSlider from "./CarouselImageSlider/CarouselImageSlider";
import SliderBrands from "./SliderBrands/SliderBrands";
import HomePageTheme from "./HomePageTheme/HomePageTheme";
import PerfumeCardsSlider from "./PerfumeCardsSlider/PerfumeCardsSlider";
import TrendingPerfumesSlider from "../../components/Home/TrendingPerfumesSlider";
import RecommendedPerfumesSlider from "../../components/Home/RecommendedPerfumesSlider";
import NewArrivalsSlider from "../../components/Home/NewArrivalsSlider";

const Home: FC = (): ReactElement => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div><CarouselImageSlider />

<SliderBrands />
<HomePageTheme />
        </div>
    );
};

export default Home;
