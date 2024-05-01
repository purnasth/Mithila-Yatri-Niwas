import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { FaTripadvisor } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <div className="flex gap-5 w-24">
        <a href="">
          <TbBrandFacebook className="text-xl text-custom-white hover:text-logo-clr transition-linear hover:scale-125 drop-shadow-lg" />
        </a>
        <a href="">
          <FaInstagram className="text-xl text-custom-white hover:text-logo-clr transition-linear hover:scale-125 drop-shadow-lg" />
        </a>
        <a href="">
          <FaTripadvisor className="text-xl text-custom-white hover:text-logo-clr transition-linear hover:scale-125 drop-shadow-lg" />
        </a>
      </div>
    </>
  );
};

export default Socials;
