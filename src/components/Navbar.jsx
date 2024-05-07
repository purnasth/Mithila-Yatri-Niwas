import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import { navLinks, logo, Button, Socials } from "../constants/data";

const Navbar = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [activePage, setActivePage] = useState(null);

  const toggleDropdown = (id, event) => {
    event.preventDefault();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const matchedLink = navLinks.find((link) => pathname.startsWith(link.link));
    if (matchedLink) {
      setActivePage(matchedLink.id);
    } else {
      setActivePage("");
    }
  }, [navLinks]);

  return (
    <>
      <header className="relative h-24 w-full flex items-center justify-between px-6 z-50 bg-custom-black/20 backdrop-blur-sm bg-gradient-to-t from-custom-white/40 to-transparent">
        <Socials />

        <h1>
          <a href="/">
            <img
              src={logo}
              alt="Mithila Yatri Niwas"
              className=" w-32 h-24 p-1 object-contain transition-linear hover:scale-110 drop-shadow-lg"
            />
          </a>
        </h1>

        <Button
          title="Booking"
          router="https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW"
        />
      </header>

      <nav className="sticky top-0 h-12 bg-custom-black/30 backdrop-blur-sm border-t border-b border-custom-white/50 text-custom-white  drop-shadow-lg z-50">
        <ul className="flex items-center flex-wrap justify-center gap-12 h-full font-medium cursor-pointer tracking-wider">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative ${activePage === link.id ? "active" : ""}`}
            >
              {link.subLinks ? (
                <div className="dropdown">
                  <a
                    href={link.link}
                    className={`font-title flex items-center transition-linear drop-shadow-lg hover:scale-110 px-3 py-1 rounded-full ${
                      activePage === link.id ? "bg-custom-black/40" : ""
                    }`}
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
                            className="font-title inline-block hover:bg-custom-black/50 text-sm w-full h-full px-4 py-3 transition-linear drop-shadow-lg hover:scale-110 border-t border-b border-custom-white/50"
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
                  className={`font-title inline-block transition-linear drop-shadow-lg hover:scale-110 px-3 py-1 rounded-full ${
                    activePage === link.id ? "bg-custom-black/40" : ""
                  }`}
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
