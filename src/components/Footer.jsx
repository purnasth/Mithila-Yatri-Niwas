import React from "react";
import {
  footerMenuItems,
  logo,
  LocationDetails,
  Socials,
  otaLinks,
  footerTerms,
  sister,
  author,
  currentYear,
} from "../constants/data";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-alt-logo-clr z-10">
      {/* <img
        src={mithila}
        alt="Mithila Yatri Niwas"
        className="absolute inset-0 -z-10 object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" /> */}

      {/* <div className="text-white relative overflow-hidden backdrop-blur-sm z-30"> */}
      {/* <div className="absolute inset-0 size-full bg-[url('https://as2.ftcdn.net/v2/jpg/03/75/84/95/1000_F_375849552_wcE7DBipdqataw3aNPUDRdUSmW3kI6p5.jpg')] bg-contain bg-repeat mix-blend-darken opacity-80 -z-20" /> */}
      <div className="absolute inset-0 size-full bg-[url('/src/assets/graphics/flowers.png')] bg-contain bg-repeat mix-blend-multiply opacity-10 -z-20" />

      <div className="text-white relative overflow-hidden z-30">
        <div className="container pt-20 pb-8 h-full">
          <div className="grid grid-cols-3 place-items-center px-8">
            <LocationDetails />

            <div className="col-span-1 flex items-center justify-center flex-col gap-10">
              <a href="/">
                <img
                  src={logo}
                  alt="Mithila Yatri Niwas"
                  className=" w-full h-48 p-1 object-contain rounded-xl"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(38%) hue-rotate(254deg) brightness(110%) contrast(110%)",
                  }}
                />
              </a>
              <Socials />
            </div>

            <div className="col-span-1 flex flex-col items-end justify-end gap-4">
              <ul className="flex gap-8">
                {footerMenuItems.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.router}
                      className="relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                    >
                      {typeof item.icon === "function" ? (
                        <item.icon className="text-xl mr-2" />
                      ) : (
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="w-12 h-12 mb-2"
                        />
                      )}

                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-start gap-8">
                {footerMenuItems.slice(3, 4).map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.router}
                      className="relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                    >
                      <item.icon />
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-start gap-8">
                {footerMenuItems.slice(4, 6).map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.router}
                      className="relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                    >
                      <item.icon />
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-16"> */}
          <div className="flex items-center justify-center gap-12 py-16">
            {otaLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 flex items-center justify-center"
                aria-label={link.alt}
                title={link.alt}
              >
                <img
                  src={link.imgSrc}
                  alt={link.alt}
                  className="w-32 h-9 object-contain bg-white rounded-full shadow-md px-4 py-2"
                />
              </a>
            ))}
          </div>

          <div className="flex justify-center items-center gap-16 mb-12">
            {footerTerms.map((link, index) => (
              <a
                key={index}
                href={link.router}
                className="relative group text-custom-white hover:text-white underline transition-linear  hover:scale-105"
              >
                {link.text}
                {/* <div className="mt-1 absolute h-[2px] rounded-full w-4 bg-custom-white/20 group-hover:bg-custom-white -translate-y-1 origin-left group-hover:w-12 transition-linear" /> */}
              </a>
            ))}
          </div>

          <hr className="border-custom-white/50 mb-4" />

          <div className="text-center mb-8">
            <p>
              Our Affiliations / Sister concerns: &nbsp;
              <a
                href="https://streampeak.com.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                {sister}
              </a>
            </p>
          </div>

          <div className="flex justify-between">
            <span>
              &copy; {currentYear} Mithila Yatri Niwas | All Rights Reserved{" "}
            </span>
            <span>
              Website by: &nbsp;
              <a
                href="https://www.longtail.info/"
                target="_blank"
                className="font-bold"
              >
                {author}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
