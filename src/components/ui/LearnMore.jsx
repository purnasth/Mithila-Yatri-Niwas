import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const Button = ({ text, primaryColor, secondaryColor }) => {
  return (
    <>
      <button
        className={`overflow-hidden rounded-full relative w-36 h-10 cursor-pointer flex items-center ${primaryColor} group hover:${secondaryColor} active:${primaryColor} transition-linear`}
      >
        <span className="text-custom-white font-semibold ml-8 transform group-hover:translate-x-20 transition-linear">
          {text}
        </span>
        <span
          className={`absolute right-0 h-full w-10 rounded-full ${primaryColor} group-hover:${secondaryColor} flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-linear`}
        >
          <CgArrowLongRight className="text-custom-white -ml-6 group-hover:ml-0 text-xl group-hover:text-2xl transition-linear" />
        </span>
      </button>
    </>
  );
};

export default Button;
