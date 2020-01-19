import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import './SliderWrapper.css'
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const SliderWrapper = ({children}) => {
    return (
        <Slider {...settings} className="slider-wrapper__carousel">
            {children}
        </Slider>
    )
}
export default SliderWrapper;
