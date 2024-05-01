import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = ({ contents }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {contents.map(({ id, author, location, description, icon }) => (
        <div key={id} className="p-4 h-96 overflow-x-hidden overflow-y-scroll">
          <img
            src={icon}
            alt={author}
            className="size-20 rounded-full object-cover mx-auto"
          />
          <div className="mt-4 text-center space-y-3">
            <p className="text-sm text-gray-600">{description}</p>
            <h3 className="text-lg font-medium">{author}</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
