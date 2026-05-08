import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Typography } from "antd";

import { selectPerfumes } from "../../../redux-toolkit/Perfumes/Perfumes-selector";
import { fetchPerfumesByIds } from "../../../redux-toolkit/Perfumes/Perfumes-thunks";
import { resetPerfumesState } from "../../../redux-toolkit/Perfumes/Perfumes-slice";
import PerfumeCardsSliderItem from "./PerfumeCardsSliderItem/PerfumeCardsSliderItem";
import "./PerfumeCardsSlider.css";

export const PerfumesIds = [26, 43, 46, 106, 34, 76, 82, 85, 27, 39, 79, 86];

const PerfumeCardsSlider: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const Perfumes = useSelector(selectPerfumes);

    useEffect(() => {
        dispatch(fetchPerfumesByIds(PerfumesIds));

        return () => {
            dispatch(resetPerfumesState());
        };
    }, []);

    return (
        <div className={"Perfume-cards-slider"}>
            <div className={"Perfume-cards-slider-header"}>
                <Typography.Title level={3} className={"Perfume-cards-slider-title"}>
                    PERSONALLY RECOMMENDED
                </Typography.Title>
                <div className="title-accent-line"></div>
            </div>
            
            <Carousel className={"Perfume-cards-carousel"}>
                <PerfumeCardsSliderItem Perfumes={Perfumes.slice(0, 4)} />
                <PerfumeCardsSliderItem Perfumes={Perfumes.slice(4, 8)} />
                <PerfumeCardsSliderItem Perfumes={Perfumes.slice(8, 12)} />
            </Carousel>
        </div>
    );
};

export default PerfumeCardsSlider;