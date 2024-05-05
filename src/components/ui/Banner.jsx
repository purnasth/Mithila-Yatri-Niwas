import React from "react";
import BreadCrumb from "./BreadCrumb";

const Banner = ({ banner }) => {
  return (
    <div className="-mt-36 relative w-full h-screen">
      <img
        src={banner}
        alt="Mithila Yatri Niwas"
        className="w-full h-full object-cover"
      />
      <BreadCrumb page="Contact" />
    </div>
  );
};

export default Banner;
