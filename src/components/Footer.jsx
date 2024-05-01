import React from "react";
import Socials from "./ui/Socials";
import logo from "../assets/logo.svg";
import mithila from "../assets/mithila.webp";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-alt-logo-clr">
      {/* <img
        src={mithila}
        alt="Mithila Yatri Niwas"
        className="absolute inset-0 -z-10 object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" /> */}

      {/* <div className="text-white relative overflow-hidden backdrop-blur-sm z-30"> */}
      <div className="text-white relative overflow-hidden backdrop-blur-sm z-30">
        <div className="container py-20 h-full">
          {/* First Row */}
          <div className="grid grid-cols-3 place-items-center px-8 mb-8">
            {/* Logo */}
            <div className="col-span-1 mb-4 md:mb-0 flex gap-8">
              <a href="/">
                <img
                  src={logo}
                  alt="Mithila Yatri Niwas"
                  className=" w-full h-40 p-1 object-contain bg-custom-white/90 rounded-xl"
                />
              </a>
              <a href="/">
                <img
                  src={logo}
                  alt="Mithila Yatri Niwas"
                  className=" w-full h-40 p-1 object-contain bg-custom-white/90 rounded-xl"
                />
              </a>
            </div>

            <div className="col-span-1">
              <Socials />
            </div>

            {/* Quick Links */}
            <div className="col-span-1 flex flex-col">
              <a href="#" className="mr-4">
                About Us
              </a>
              <a href="#" className="mr-4">
                Contact Us
              </a>
              <a href="#" className="mr-4">
                FAQs
              </a>
            </div>
          </div>
          {/* Horizontal Line */}
          <hr className="border-custom-white/50 mb-8" />
          {/* Second Row */}
          <div className="flex justify-center mb-8">
            <a href="#" className="mr-4">
              Terms & Conditions
            </a>
            <a href="#" className="mr-4">
              Privacy Policy
            </a>
            <a href="#">Child Policy</a>
          </div>
          {/* Third Row */}
          <div className="flex justify-center mb-8">
            <span className="mr-4">OTA:</span>
            <a href="#" className="mr-4">
              TripAdvisor
            </a>
            <a href="#" className="mr-4">
              Booking.com
            </a>
            <a href="#">Agoda</a>
          </div>

          <div className="flex justify-between px-8">
            <span>&copy; 2024 Mithila Yatri Niwas | All Rights Reserved </span>
            <span>
              Website by{" "}
              <a href="https://www.longtail.info/" target="_blank">
                Longtail e-media
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
