import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { navLinks, logo, Button, Socials } from "../constants/data";

const Navbar = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [activePage, setActivePage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="hidden relative h-12 md:h-24 w-full md:flex items-center justify-between px-2 md:px-6 z-50 bg-custom-black/20 backdrop-blur-sm bg-gradient-to-t from-custom-white/40 to-transparent">
        <Socials />

        <h1>
          <a href="/">
            <img
              src={logo}
              alt="Mithila Yatri Niwas"
              className="w-20 h-12 md:w-32 md:h-24 p-1 object-contain transition-linear hover:scale-110 drop-shadow-lg"
            />
          </a>
        </h1>

        <Button
          title="Booking"
          router="https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW"
        />
      </header>

      <nav className="sticky top-0 h-12 bg-custom-black/30 backdrop-blur-sm md:border-t border-b border-custom-white/50 text-custom-white drop-shadow-lg z-50">
        <div className="flex md:hidden items-center justify-between pr-4">
          <a href="/">
            <img
              src={logo}
              alt="Mithila Yatri Niwas"
              className="w-20 h-12 p-1 object-contain transition-linear drop-shadow-lg bg-custom-white"
            />
          </a>
          <button className="relative p-2 " onClick={toggleMenu}>
            <IoIosMenu
              className={`text-2xl absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-linear duration-300 ${
                isMenuOpen ? "scale-100" : "scale-0"
              }`}
            />
            <IoMdClose
              className={`text-2xl absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-linear duration-300 ${
                isMenuOpen ? "scale-0" : "scale-100"
              }`}
            />
          </button>
        </div>

        <ul
          className={`p-6 md:p-0 bg-alt-logo-clr md:bg-transparent flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 h-auto md:h-full font-medium cursor-pointer tracking-wider transition-linear ${
            isMenuOpen ? "scale-x-0 md:scale-x-100" : "scale-x-100"
          }`}
        >
          <div className="md:hidden absolute inset-0 size-full bg-[url('/src/assets/graphics/flowers.png')] bg-contain bg-repeat mix-blend-multiply opacity-20 -z-20" />

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
