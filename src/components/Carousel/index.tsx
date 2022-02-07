import React from "react";
import Slider from "react-slick";
import { ProjectSlide } from "../ProjectSlide";

export function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <ProjectSlide />
      <ProjectSlide />
      <ProjectSlide />
      <ProjectSlide />
      <ProjectSlide />
      <ProjectSlide />
    </Slider>
  );
}
