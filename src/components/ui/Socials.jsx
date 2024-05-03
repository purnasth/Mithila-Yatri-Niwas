import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
// import { FaTripadvisor } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
  return (
    <>
      <div className="flex gap-5">
        <a
          href="https://www.facebook.com/MithilaYatriNiwas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandFacebook className="text-xl text-custom-white hover:text-logo-clr transition-linear hover:scale-125 drop-shadow-lg" />
        </a>
        <a
          href="https://instagram.com/mithilayatriniwas?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl text-custom-white hover:text-logo-clr transition-linear hover:scale-125 drop-shadow-lg" />
        </a>
        {/* <a href="" target="_blank"
              rel="noopener noreferrer">
          <FaTripadvisor className="text-xl text-custom-white hover:text-logo-clr transition-linear hover:scale-125 drop-shadow-lg" />
        </a> */}
        <a href="tel:+9779820113410" target="_blank" rel="noopener noreferrer">
          <TbPhone className="text-xl text-custom-white hover:text-logo-clr transition-linear hover:scale-125 drop-shadow-lg" />
        </a>
        {/* <a
          href="mailto:info@hotelmithilanepal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail className="text-xl text-custom-white hover:text-logo-clr transition-linear hover:scale-125 drop-shadow-lg" />
        </a> */}
      </div>
    </>
  );
};

export default Socials;
