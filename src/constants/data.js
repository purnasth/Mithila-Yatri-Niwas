import logo from "../assets/logo.svg";
import SvgWave from "../components/ui/SvgWave";
import AboutGallery from "../components/ui/AboutGallery";
import LearnMore from "../components/ui/LearnMore";

import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import hall1 from "../assets/halls/hall1.webp";
import exterior1 from "../assets/halls/exterior1.webp";
import exterior2 from "../assets/halls/exterior2.webp";
import exterior3 from "../assets/halls/exterior3.webp";

export {
  logo,
  SvgWave,
  AboutGallery,
  LearnMore,
  room1,
  room2,
  hall1,
  exterior1,
  exterior2,
  exterior3,
};

import { FaInstagram, FaTripadvisor } from "react-icons/fa";
import { TbPhone, TbBrandFacebook } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

export const navLinks = [
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
    // subLinks: [
    //   {
    //     id: "deluxeRoom",
    //     title: "Deluxe Rooms",
    //     link: "/accommodation/deluxe",
    //   },
    //   {
    //     id: "executiveSuite",
    //     title: "Executive Rooms",
    //     link: "/accommodation/executive-suite",
    //   },
    //   {
    //     id: "suiteRoom",
    //     title: "Suite Room",
    //     link: "/accommodation/suite-room",
    //   },
    // ],
  },
  {
    id: "dining",
    title: "Dine",
    link: "/dine",
  },
  {
    id: "hall",
    title: "Occasions",
    link: "/hall",
    // subLinks: [
    //   {
    //     id: "sabhaHall",
    //     title: "Sabha Hall",
    //     link: "/hall/sabha-hall",
    //   },
    //   {
    //     id: "pdr",
    //     title: "PDR",
    //     link: "/hall/pdr",
    //   },
    // ],
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

export const socialLinks = [
  {
    icon: TbBrandFacebook,
    title: "Facebook",
    url: "https://www.facebook.com/MithilaYatriNiwas",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    url: "https://instagram.com/mithilayatriniwas?igshid=MzRlODBiNWFlZA==",
  },
  {
    icon: TbPhone,
    title: "Contact Number",
    url: "tel:+9779820113410",
  },
  // {
  //   icon: HiOutlineMail,
  //   title: "Email Address",
  //   url: "mailto:info@hotelmithilanepal.com",
  // },
  // {
  //   icon: FaTripadvisor,
  //   title: "Tripadvisor",
  //   url: "https://www.tripadvisor.com/Hotel_Review-g424939-d24969555-Reviews-Mithila_Yatri_Niwas-Janakpur_Janakpur_Zone_Central_Region.html",
  // },
];

export const aboutContents = {
  text: {
    heading:
      "Mithila Yatri Niwas a luxurious hotel property in Janakpur is set at just 10 min walking distance from the famous Janakai Temple along the banks of Dashrath Lake.",
    paragraph:
      "Our Hotel is conveniently located, which allows a hassle-free easy access by road, domestic airport, and railway connectivity to the Indian border. It is the only Hotel in Janakpur well-equipped with ultramodern Amenities, Meetings and Events Venue, Spacious Parking along with a well-deserved peaceful & spiritual ambiance. Experience and immerse in Nepal's religious, cultural, and historical heritage, with all the modern comforts and amenities while avoiding the hustle and bustle of Janakpur. The in-house restaurant located at the ground floor of the hotel, offers finest Local, Indian and Continental cuisines to enhance your taste buds. Book your stay with confidence as we assure an enhanced spiritual experience with a most comfortable and memorable stay at the most beautiful property in Janakpur.",
  },
  galleryImages: [
    {
      id: 1,
      url: exterior3,
      alt: "Exterior",
    },
    {
      id: 2,
      url: room1,
      alt: "Room Image",
    },
    {
      id: 3,
      url: exterior1,
      alt: "Exterior",
    },
    {
      id: 4,
      url: exterior2,
      alt: "",
    },
    {
      id: 5,
      url: hall1,
      alt: "Event Hall",
    },
    {
      id: 6,
      url: room2,
      alt: "Room",
    },
  ],
};
