import React from "react";
import Slider from "react-slick";
import { ProjectSlide } from "../ProjectSlide";

// conversor de formato do prismic para texto ou html
import { RichText } from "prismic-dom";

export function Carousel({ data }: any) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 5000,
        settings: {
          dots: false,
          infinite: true,
          speed: 900,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          dots: false,
          infinite: true,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          dots: false,
          infinite: true,
          speed: 900,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
        },
      },
    ],
  };

  const projects = data.results.map((project: any) => {
    return {
      slug: project.uid,
      title: RichText.asText(project.data.title),
      aboutText: RichText.asText(project.data.about),
      visitLink: project.data.link.url,
      technologies: project.data.technologies,
      imageUrl: project.data.projectimage.url,
    };
  });

  return (
    <Slider {...settings}>
      {projects.map((project: any) => {
        return (
          <ProjectSlide
            key={project.slug}
            title={project.title}
            aboutText={project.aboutText}
            visitLink={project.visitLink}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
          />
        );
      })}
    </Slider>
  );
}
