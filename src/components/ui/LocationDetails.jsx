import React from "react";
import { GrLocation } from "react-icons/gr";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

const LocationDetails = () => {
  return (
    <>
      <ul className="col-span-1 flex flex-col gap-4">
        <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
          <GrLocation className="text-xl" />
          <a
            href="https://maps.app.goo.gl/aaeWHF1y7NZuPC7J8"
            target="_blank"
            rel="noopener"
          >
            Dasrath Talau, Janakpur Dham, Dhanusha
          </a>
        </li>

        <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
          <TbPhone className="text-xl" />
          <a href="tel:+97714229996" target="_blank" rel="noopener">
            +977-14229996
          </a>
        </li>
        <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
          <HiOutlineMail className="text-xl" />
          <a
            href="mailto:info@hotelmithilanepal.com"
            target="_blank"
            rel="noopener"
          >
            info@hotelmithilanepal.com
          </a>
        </li>
      </ul>
    </>
  );
};

export default LocationDetails;
