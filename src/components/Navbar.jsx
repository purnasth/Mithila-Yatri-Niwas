import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./ui/Button";
import { TbBrandFacebook } from "react-icons/tb";
import { FaTripadvisor } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const navLinks = [
    // {
    //   id: "home",
    //   title: "Home",
    //   link: "/home",
    // },
    // {
    //   id: "about",
    //   title: "About",
    //   link: "/about",
    // },
    {
      id: "accommodation",
      title: "Stay",
      link: "/accommodation",
      subLinks: [
        {
          id: "deluxeRoom",
          title: "Deluxe Rooms",
          link: "/accommodation/deluxe",
        },
        {
          id: "executiveSuite",
          title: "Executive Rooms",
          link: "/accommodation/executive-suite",
        },
        {
          id: "suiteRoom",
          title: "Suite Room",
          link: "/accommodation/suite-room",
        },
      ],
    },
    {
      id: "dining",
      title: "Dine",
      link: "/dining",
    },
    {
      id: "hall",
      title: "Occasions",
      link: "/hall",
      subLinks: [
        {
          id: "sabhaHall",
          title: "Sabha Hall",
          link: "/accommodation/sabha-hall",
        },
        {
          id: "pdr",
          title: "PDR",
          link: "/accommodation/pdr",
        },
      ],
    },
    {
      id: "gallery",
      title: "Gallery",
      link: "/gallery",
    },
    {
      id: "contact",
      title: "Contact",
      link: "/contact",
    },
  ];

  const toggleDropdown = (id, event) => {
    event.preventDefault();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <>
      <header className="relative h-24 w-full flex items-center justify-between px-6 z-50 bg-custom-black/20 backdrop-blur-sm">
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
        <h1>
          <a href="/">
            <img
              src={logo}
              alt="Mithila Yatri Niwas"
              className=" w-32 h-24 p-1 object-contain bg-custom-white/90"
            />
          </a>
        </h1>

        <Button />
      </header>

      <nav className="sticky top-0 h-12 bg-custom-black/30 backdrop-blur-sm border-t border-b border-custom-white/50 text-custom-white  drop-shadow-lg z-50">
        <ul className="flex items-center flex-wrap justify-center gap-20 h-full px-6 font-medium cursor-pointer tracking-wider">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              {link.subLinks ? (
                <div className="dropdown">
                  <a
                    href={link.link}
                    className="flex items-center transition-linear drop-shadow-lg hover:scale-125"
                    onClick={(e) => toggleDropdown(link.id, e)}
                  >
                    {link.title}
                    <RiArrowDropDownLine className="text-2xl" />
                  </a>
                  {openDropdownId === link.id && (
                    <ul className="bg-custom-black/50 backdrop-blur-sm absolute -left-1 mt-3 whitespace-nowrap overflow-hidden">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.id}>
                          <a
                            href={subLink.link}
                            className="inline-block text-sm w-full h-full px-4 py-3 transition-linear drop-shadow-lg hover:scale-110 border-t border-b border-custom-white/50"
                          >
                            {subLink.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={link.link}
                  className="inline-block transition-linear drop-shadow-lg hover:scale-125"
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
