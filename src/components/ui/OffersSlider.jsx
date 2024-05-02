import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongRight } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";

const OffersSlider = ({ contents }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
      {contents.map(({ id, title, description, icon, router, price }) => (
        <div
          key={id}
          className="relative overflow-hidden w-full h-[80vh] group shadow-lg"
        >
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 scale-x-[5] group-hover:scale-x-[1] transition-all ease-in-out duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#c6cfd5"
                fillOpacity="1"
                d="M0,160L20,170.7C40,181,80,203,120,202.7C160,203,200,181,240,170.7C280,160,320,160,360,176C400,192,440,224,480,245.3C520,267,560,277,600,288C640,299,680,309,720,277.3C760,245,800,171,840,149.3C880,128,920,160,960,165.3C1000,171,1040,149,1080,133.3C1120,117,1160,107,1200,117.3C1240,128,1280,160,1320,154.7C1360,149,1400,107,1420,85.3L1440,64L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
              ></path>
            </svg>
          </div>
          <h4 className="font-body absolute left-1/2 -translate-x-1/2 w-auto z-10 mt-0 px-6 py-2 text-center font-bold text-custom-white bg-logo-clr flex items-center justify-center rounded-full group-hover:text-custom-black group-hover:bg-transparent transition-all ease-in-out duration-500">
            <MdAttachMoney className="text-lg" />
            Price: &nbsp; &nbsp; Rs. {price} /-
          </h4>

          <img
            src={icon}
            alt={title}
            className="w-full h-full transition duration-700 ease-in-out transform group-hover:scale-150 object-cover"
          />
          <div className="absolute bottom-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] w-full h-1/2 transition-linear group-hover:h-full" />
          <div className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] text-custom-white text-center transition-all duration-700 ease-in-out transform translate-y-3/4 group-hover:translate-y-0">
            <div className="p-4">
              <h3 className="text-3xl font-medium mb-64 group-hover:mb-0 transition-all duration-300">
                {title}
              </h3>
              <p className="text-custom-white my-8">{description}</p>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-alt-logo-clr hover:bg-logo-clr px-6 py-3 w-32 mx-auto rounded-full transition-linear group z-50"
              >
                Book
                <CgArrowLongRight />
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default OffersSlider;
