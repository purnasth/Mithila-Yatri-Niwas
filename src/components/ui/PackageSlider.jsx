import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PackageSlider = ({ contents, sizeClassName }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="accmmodation">
      <Slider {...settings}>
        {contents.map(({ id, title, icon }) => (
          <div key={id} className={`overflow-hidden group ${sizeClassName}`}>
            <img
              src={icon}
              alt={title}
              className="w-full h-full transition duration-700 ease-in-out transform group-hover:scale-105 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PackageSlider;
