import React from "react";
import { BreadCrumb } from "../../constants/data";

const Banner = ({ banner, page }) => {
  return (
    <div className="-mt-36 relative w-full h-screen">
      <img
        src={banner}
        alt="Mithila Yatri Niwas"
        className="w-full h-full object-cover"
      />
      <BreadCrumb page={page} />
    </div>
  );
};

export default Banner;
