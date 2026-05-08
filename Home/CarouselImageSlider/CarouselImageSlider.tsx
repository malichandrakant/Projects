import React, { FC, ReactElement } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

import { PRODUCT } from "../../../constants/routeConstants";

declare module "./CarouselImageSlider.css";
import "./CarouselImageSlider.css";

export const sliderItems = [
    {
        id: "85",
        name: "1 Million",
        url: "https://i.ibb.co/dkpHPXQ/1million-ENG.jpg"
    },
    {
        id: "46",
        name: "Dior Sauvage",
        url: "https://i.ibb.co/C0vbNcy/dior-ENG.jpg"
    }
];

const CarouselImageSlider: FC = (): ReactElement => {
    return (
        <div className="hero-slider">
            <Carousel autoplay autoplaySpeed={5000} dots>
                {sliderItems.map((item) => (
                    <div key={item.id}>
                        <div className="carousel-item-wrapper">
                            <Link
                                to={`${PRODUCT}/${item.id}`}
                                className="carousel-link"
                            />

                            <img
                                src={item.url}
                                alt={item.name}
                                className="carousel-image"
                            />

                            <div className="carousel-overlay" />

                            <div className="carousel-content">
                                <span className="carousel-tag">
                                    Luxury Collection
                                </span>

                                <h1>{item.name}</h1>

                                <p>
                                    Discover premium fragrance crafted for
                                    elegance and style.
                                </p>

                                <button className="carousel-btn">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselImageSlider;