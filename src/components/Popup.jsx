import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import popup from "../assets/popup/popup.webp";

const popupImages = [popup];

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closePopup = () => setIsOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm z-50"
      onClick={closePopup}
    >
      <div
        className="relative overflow-hidden size-auto max-w-3xl p-8 mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 text-white text-4xl"
          onClick={closePopup}
        >
          &times;
        </button>
        {popupImages.length === 1 ? (
          <img
            src={popupImages[0]}
            alt="Popup"
            className="size-full aspect-square shadow object-cover"
          />
        ) : (
          <Slider {...settings}>
            {popupImages.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="size-full aspect-square shadow object-cover"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Popup;