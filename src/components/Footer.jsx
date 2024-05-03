import React from "react";
import Socials from "./ui/Socials";
import logo from "../assets/logo.svg";

import { GrLocation } from "react-icons/gr";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBrunchDining } from "react-icons/md";
import { TbCalendarEvent } from "react-icons/tb";

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
      <div className="absolute inset-0 size-full bg-[url('src/assets/graphics/flowers.png')] bg-contain bg-repeat mix-blend-multiply opacity-10 -z-20" />

      <div className="text-white relative overflow-hidden z-30">
        <div className="container pt-20 pb-8 h-full">
          <div className="grid grid-cols-3 place-items-center px-8">
            <ul className="col-span-1 flex flex-col gap-4">
              <li className="flex items-center justify-start gap-2 text-custom-white hover:text-white transition-linear">
                <GrLocation className="text-xl" />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="font-body"
                >
                  Dasrath Talau, Janakpur Dham, Dhanusha
                </a>
              </li>

              <li className="flex items-center justify-start gap-2 text-custom-white hover:text-white transition-linear">
                <TbPhone className="text-xl" />
                <a
                  href="tel:+97714229996"
                  target="_blank"
                  rel="noopener"
                  className="font-body"
                >
                  +977-14229996
                </a>
              </li>
              <li className="flex items-center justify-start gap-2 text-custom-white hover:text-white transition-linear">
                <HiOutlineMail className="text-xl" />
                <a
                  href="mailto:info@hotelmithilanepal.com"
                  target="_blank"
                  rel="noopener"
                  className="font-body"
                >
                  info@hotelmithilanepal.com
                </a>
              </li>
            </ul>

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
                <li>
                  <a
                    href="#"
                    className="font-body relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                  >
                    <MdOutlineBed /> Deluxe
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-body relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                  >
                    <MdOutlineBed /> Executive
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-body relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                  >
                    <MdOutlineBed /> Suite
                  </a>
                </li>
              </ul>
              <ul className="flex items-center justify-start gap-8">
                <li>
                  <a
                    href="#"
                    className="font-body relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                  >
                    <MdOutlineBrunchDining />
                    Bhojan Griha
                    {/* <div className="mt-1 absolute h-[2px] rounded-full w-4 bg-custom-white/20 group-hover:bg-custom-white -translate-y-1 origin-left group-hover:w-12 transition-linear" /> */}
                  </a>
                </li>
              </ul>
              <ul className="flex items-center justify-start gap-8">
                <li>
                  <a
                    href="#"
                    className="font-body relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                  >
                    <TbCalendarEvent />
                    Sabha Hall
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-body relative group text-custom-white hover:text-white hover:scale-110 transition-linear flex items-center gap-2"
                  >
                    <TbCalendarEvent />
                    PDR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-16"> */}
          <div className="flex items-center justify-center gap-12 py-16">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              aria-label="Booking.com"
            >
              <img
                src="https://www.purnashrestha.com.np/babermahalvilas/svg/bookingcom.svg"
                alt="Booking.com"
                className="w-32 h-8 object-cover bg-white rounded-full shadow-md px-4 py-2"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 flex items-center justify-center"
              aria-label="Tripadvisor Booking"
            >
              <img
                src="https://www.purnashrestha.com.np/babermahalvilas/svg/tripadvisor.svg"
                alt="Tripadvisor"
                className="w-32 h-8 object-cover bg-white rounded-full shadow-md px-4 py-2"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 flex items-center justify-center"
              aria-label="Agoda Booking"
            >
              <img
                src="https://seekvectorlogo.com/wp-content/uploads/2021/12/agoda-vector-logo-2021.png"
                alt="Agoda"
                className="w-32 h-8 object-contain bg-white rounded-full shadow-md px-4 py-1"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 flex items-center justify-center"
              aria-label="Expedia Booking"
            >
              <img
                src="https://www.purnashrestha.com.np/babermahalvilas/svg/expedia.svg"
                alt="Expedia"
                className="w-32 h-8 object-cover bg-white rounded-full shadow-md px-4 py-2"
              />
            </a>
          </div>

          {/* <div className="flex justify-between mb-12"> */}
          <div className="flex justify-center items-center gap-16 mb-12">
            <a
              href="#"
              className="relative group font-body text-custom-white hover:text-white transition-linear underline"
            >
              Terms & Conditions
              {/* <div className="mt-1 absolute h-[2px] rounded-full w-4 bg-custom-white/20 group-hover:bg-custom-white -translate-y-1 origin-left group-hover:w-12 transition-linear" /> */}
            </a>
            <a
              href="#"
              className="relative group font-body text-custom-white hover:text-white transition-linear underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="relative group font-body text-custom-white hover:text-white transition-linear underline"
            >
              Child Policy
            </a>
          </div>

          <hr className="border-custom-white/50 mb-4" />

          <div className="text-center mb-8">
            <p>
              Our Affiliations / Sister concerns: &nbsp;
              <a href="#" className="font-body font-bold">
                Stream Peak International Ptd. Ltd.
              </a>
            </p>
          </div>

          <div className="flex justify-between">
            <span>&copy; 2024 Mithila Yatri Niwas | All Rights Reserved </span>
            <span>
              Website by: &nbsp;
              <a
                href="https://www.longtail.info/"
                target="_blank"
                className="font-body font-bold underline"
              >
                Longtail e-media
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
