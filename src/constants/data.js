import logo from "../assets/logo.svg";
import SvgWave from "../components/ui/SvgWave";
import AboutGallery from "../components/ui/AboutGallery";
import LearnMore from "../components/ui/LearnMore";
import BreadCrumb from "../components/ui/BreadCrumb";
import Button from "../components/ui/Button";
import LocationDetails from "../components/ui/LocationDetails";
import Socials from "../components/ui/Socials";
import OffersSlider from "../components/ui/OffersSlider";
import PackageContent from "../components/ui/PackageContent";
import PackageSlider from "../components/ui/PackageSlider";
import PlacesToVisitSlider from "../components/ui/PlacesToVisitSlider";
import TestimonialsSlider from "../components/ui/TestimonialsSlider";

import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import hall1 from "../assets/halls/hall1.webp";
import exterior1 from "../assets/halls/exterior1.webp";
import exterior2 from "../assets/halls/exterior2.webp";
import exterior3 from "../assets/halls/exterior3.webp";

export {
  logo,
  SvgWave,
  AboutGallery,
  LearnMore,
  BreadCrumb,
  Button,
  LocationDetails,
  Socials,
  OffersSlider,
  PackageContent,
  PackageSlider,
  PlacesToVisitSlider,
  TestimonialsSlider,
  room1,
  room2,
  room3,
  hall1,
  exterior1,
  exterior2,
  exterior3,
};

import { FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";
import {
  TbPhone,
  TbBrandFacebook,
  TbPencilQuestion,
  TbCalendarEvent,
} from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

import { FiUser } from "react-icons/fi";
import {
  MdAlternateEmail,
  MdOutlineBed,
  MdOutlineBrunchDining,
} from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import expedia from "../assets/ota/expedia.webp";
import tripadvisor from "../assets/ota/tripadvisor.webp";
import bookingcom from "../assets/ota/bookingcom.webp";
import agoda from "../assets/ota/agoda.webp";

import { CgArrowLongRight } from "react-icons/cg";

export { CgArrowLongRight, FaWhatsapp };

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

export const locationDetails = [
  {
    title: "Dasrath Talau, Janakpur Dham, Dhanusha",
    icon: GrLocation,
    url: "https://maps.app.goo.gl/aaeWHF1y7NZuPC7J8",
  },
  {
    title: "+977-14229996",
    icon: TbPhone,
    url: "tel:+97714229996",
  },
  {
    title: "info@hotelmithilanepal.com",
    icon: HiOutlineMail,
    url: "mailto:info@hotelmithilanepal.com",
  },
];

export const nearbyLocations = [
  {
    name: "Janaki Temple",
    distance: "400m",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1781.70616029953!2d85.92244138865854!3d26.73121534418898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec40069de3d507%3A0x5e9842f10a951d7f!2sJanaki%20Temple%2C%20Janaki%20chok%2C%20Janakpur!3m2!1d26.7303858!2d85.9255589!5e0!3m2!1sen!2snp!4v1714641820034!5m2!1sen!2snp",
  },
  {
    name: "Ganga Sagar",
    distance: "1km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3563.4389448151937!2d85.92354142528828!3d26.730365326756306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec4007f3532d19%3A0x42a8839df3243056!2sGanga%20Sagar%2C%20Janakpur!3m2!1d26.728684299999998!2d85.9301352!5e0!3m2!1sen!2snp!4v1714642006000!5m2!1sen!2snp",
  },
  {
    name: "Railway Station",
    distance: "1.9km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7126.805001126306!2d85.92439654246047!3d26.731528857022216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec3f3b04567a43%3A0x9eac0f6f96daa44c!2sJanakpurdham%20Railway%20Station%2C%20Janakpur!3m2!1d26.733862799999997!2d85.93695559999999!5e0!3m2!1sen!2snp!4v1714641955309!5m2!1sen!2snp",
  },
  {
    name: "Janakpur Airport",
    distance: "4.4km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14254.776502965655!2d85.91469190244248!3d26.722217028176132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec407231231aa1%3A0xab58893c40e1b844!2sJanakpur%20Airport%2C%20Janakpur!3m2!1d26.711423!2d85.9238786!5e0!3m2!1sen!2snp!4v1714642074225!5m2!1sen!2snp",
  },
  {
    name: "Ram Mandir",
    distance: "900m",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3563.453335365392!2d85.92191032521768!3d26.72990587675653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec6aa7178b2099%3A0x409b43633a40308c!2sRam%20Janki%20Mandir%2C%20Janakpur%2045600!3m2!1d26.728321299999998!2d85.9270694!5e0!3m2!1sen!2snp!4v1714909635965!5m2!1sen!2snp",
  },
  {
    name: "Ram Sita Vivah Mandap",
    distance: "350m",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1781.7041110251569!2d85.92215268864092!3d26.731346194188955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec4004272d21b3%3A0x9d53eac3f112f3cb!2sShree%20Ram%20Janaki%20Biwah%20Mandap%2C%20PWJF%2B9XQ%2C%20Janakpur%2045600!3m2!1d26.7308986!2d85.9249777!5e0!3m2!1sen!2snp!4v1714910137389!5m2!1sen!2snp",
  },
  {
    name: "Jaleshwar",
    distance: "2.5km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7126.93387405459!2d85.926136792178!3d26.729471607027143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec3fe9d84d90b5%3A0xa9a97ee9216804d1!2sJaleshwar%2C%20Janakpur!3m2!1d26.727146599999998!2d85.9406745!5e0!3m2!1sen!2snp!4v1714910233145!5m2!1sen!2snp",
  },
  {
    name: "Ganga Sagar",
    distance: "1km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3563.4389448151937!2d85.92354142528828!3d26.730365326756306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec4007f3532d19%3A0x42a8839df3243056!2sGanga%20Sagar%2C%20Janakpur!3m2!1d26.728684299999998!2d85.9301352!5e0!3m2!1sen!2snp!4v1714642006000!5m2!1sen!2snp",
  },
  {
    name: "Dhanusha Dham",
    distance: "3.7km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28502.863123107087!2d85.90349842046005!3d26.748910661658073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec6bae3cea9a5f%3A0x5797e7156d6c5ad8!2sDhanusha%20Dham%20To%20Way%2C%20Janakpur!3m2!1d26.7627621!2d85.9293596!5e0!3m2!1sen!2snp!4v1714910403541!5m2!1sen!2snp",
  },
  {
    name: "Ratna Sagar Temple",
    distance: "2.3km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7126.454603238048!2d85.91324694217909!3d26.737121657008814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec6aa9c2e7013f%3A0x991420bd3f1e596b!2sRatna%20Sagar%20Temple%2C%20Janakpur!3m2!1d26.740272299999997!2d85.9161153!5e0!3m2!1sen!2snp!4v1714910523542!5m2!1sen!2snp",
  },
];

export const footerMenuItems = [
  { icon: MdOutlineBed, text: "Deluxe", router: "#" },
  { icon: MdOutlineBed, text: "Executive", router: "#" },
  { icon: MdOutlineBed, text: "Suite", router: "#" },
  { icon: MdOutlineBrunchDining, text: "Bhojan Griha", router: "#" },
  { icon: TbCalendarEvent, text: "Sabha Hall", router: "#" },
  { icon: TbCalendarEvent, text: "PDR", router: "#" },
];

export const footerTerms = [
  { text: "Terms & Conditions", router: "#" },
  { text: "Privacy Policy", router: "#" },
  { text: "Child Policy", router: "#" },
];

export const sister = "Stream Peak International Pvt. Ltd.";
export const currentYear = new Date().getFullYear();
export const author = "Longtail e-media";

export const otaLinks = [
  {
    href: "https://www.booking.com/hotel/np/mithila-yatri-niwas.en-gb.html?aid=356980&label=gog235jc-1DCAsoqwFCE21pdGhpbGEteWF0cmktbml3YXNIM1gDaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKml9OxBsACAdICJDgzYWY5MGYzLWFmMDAtNDg4ZS1iNDJlLTNhYzdmYjQwMzY1NNgCBOACAQ&sid=92d4f646b70df7ccf9096a36f66af01e&dist=0&keep_landing=1&sb_price_type=total&type=total&",
    imgSrc: bookingcom,
    alt: "Booking.com",
  },
  {
    href: "https://www.tripadvisor.com/Hotel_Review-g424939-d24969555-Reviews-Mithila_Yatri_Niwas-Janakpur_Janakpur_Zone_Central_Region.html",
    imgSrc: tripadvisor,
    alt: "Tripadvisor",
  },
  {
    href: "https://www.agoda.com/dasrath-talau-janakpur-dham-dhanusha/hotel/janakpur-np.html",
    imgSrc: agoda,
    alt: "Agoda",
  },
  {
    href: "https://www.expedia.com/Janakpur-Hotels-Mithila-Yatri-Niwas.h83936278.Hotel-Information?",
    imgSrc: expedia,
    alt: "Expedia",
  },
];

export const offersContents = [
  {
    id: 1,
    title: "For Couple",
    description: "1 night Package MAP plan",
    icon: room1,
    price: "7500",
  },
  {
    id: 2,
    title: "For Couple",
    description: "1 night Package MAP plan",
    icon: room2,
    price: "7500",
  },
  {
    id: 3,
    title: "For Couple",
    description: "1 night Package MAP plan",
    icon: room3,
    price: "7500",
  },
];

export const placesToVistContents = [
  {
    id: 1,
    title: "Janaki Mandir",
    description:
      "Dedicated to Goddess Sita, Janaki Mandir is the biggest temple in Nepal located in Janakpur. It is constructed at the place where Goddess Sita was born. The attraction is now considered as a religiously important monument and a heritage site but is still an active temple for devotees. Anybody seeking a slice of the legend of Ramayana must visit the divine Janaki Temple. ",
    icon: "https://www.holidify.com/images/cmsuploads/compressed/Ram_Janaki_Temple,_Dhanusha_20181001160947.jpg",
  },
  {
    id: 2,
    title: "Ram Mandir, Janakpur",
    description:
      "Ram Mandir is one of the oldest temples in Janakpur built in the late 1700s by Amar Singh Thapa, a Gorkhali General. The architecture of the temple is traditional pagoda-style like the other shrines in the region. The modestly quaint temple is flocked by pilgrims during the occasion of Ram Navami and Dashain which are sacred and important annual festivals dedicated to Lord Rama. The opulent temple is a perfect attraction for those interested in exploring ancient cultures and experiencing its divine vibe.",
    icon: "https://www.holidify.com/images/cmsuploads/compressed/Ram_Mandir,_Janakpur-September_22,_2016-IMG_7648_20181001175901_20181001175919.jpg",
  },
  {
    id: 3,
    title: "Rolwaling Valley",
    description:
      "Rolwaling Valley, between the Everest and Langtang Himalaya ranges, is the toughest and most thrilling trekking trail in Nepal. The valley has an abundance of alpine lakes, hanging glaciers, moraines, high pastures, waterfalls and imminent view of snowy peaks. Rich in varying flora and fauna, it is home to many endangered and globally threatened animals.",
    icon: "https://www.holidify.com/images/foreign/compressed/attr_123742.jpg",
  },
  {
    id: 4,
    title: "Ram Sita Vivah Mandap",
    description:
      "The place where Ram and Sita got married, Ram Janaki Vivah Mandap is visited by thousands of pilgrims to pay homage to Sita at the time of Vivah Panchami. The marriage day of Sita and Ram usually celebrated on the fifth day of the Shukla Paksha or waxing phase of moon in November/December. The mandap is a gorgeous structure made of marble located in the southwest region of the Janaki Mandir. It resembles a part of a palace with sturdy pillars, elegant arches and stunning domes. <br/> At the centre of the mandap, the legendary wedding ceremony is depicted. One can see idols of the couple, Goddess Sita and Lord Rama, sitting on a raised pedestal in the centre while some sages and their parents are seen seated on parallel pedestals facing each other. The idols are draped in colourful attires and give a sense of the ancient royal celebration. Devotees can offer their prayers and sit in complete silence to soak in the tranquil vibe of the temple. Those interested in getting a sneak peek into this epic union must visit the Ram Sita Vivah Mandap.",
    icon: "https://www.holidify.com/images/cmsuploads/compressed/Vivah_Mandap,_Janakpur-September_22,_2016-IMG_7419_20181001182754_20181001182810.jpg",
  },
  {
    id: 5,
    title: "Jaleshwar",
    description:
      "Jaleswar is a small municipality in Nepal, named after the holy temple of Jaleshwarnath Mahadev, dedicated to Lord Shiva. The small-town borders India with Bihar. During the months of Shravan that is July and August, devotees from all over the world flock here to pay their respects to the Lord and his Consort, Parvati. From historical sites and cultural attractions to parks and beaches, the city has something to offer to all its visitors. <br/> Since Jaleshwar revolves only around the Jaleshwarnath Temple, the transport facilities withing the temple are also quite functional and comprehensive. Visiting the temple is a hassle-free experience as the buses also go to big cities like Kathmandu and Birgunj and connect to the main Janakpur city regularly. There are also many small eateries in the town and vegetarian restaurants are a majority in this little temple town. ",
    icon: "https://www.holidify.com/images/cmsuploads/compressed/Jaleshwar1_20191021123356_20191021123418.jpg",
  },
];

export const testimonialsContent = [
  {
    id: 1,
    author: "Jas Family",
    location: "Chigwell, United Kingdom",
    description:
      "Best place to stay in Janakpur   Best hotel in Janakpur to stay while visiting alone or with family. Very nice room at reasonable price with good view of town and naturally built ponds in its surrounding. Peaceful colour of the structure enhanced our mind for calmness and pleasure. Food is served at the best quality in the restaurant. Very attentive and helpful staffs everywhere, specially the manager at the front Desk Mr Bishan, who is very friendly, welcoming and professional. Thank you Mithila Yatri Niwas for making our stay like at our own home.",
    icon: tripadvisor,
  },
  {
    id: 2,
    author: "Anna-Maria",
    location: "Finland",
    description:
      "Buffet breakfast was available, also a lot of good options on the dinner. Location was good. The room was clean, spacious and room service was working fine. AC worked well and the bathroom was clean. The view from my big window was really lovely.",
    icon: bookingcom,
  },
  {
    id: 3,
    author: "Jas Family",
    location: "Chigwell, United Kingdom",
    description:
      "Best place to stay in Janakpur   Best hotel in Janakpur to stay while visiting alone or with family. Very nice room at reasonable price with good view of town and naturally built ponds in its surrounding. Peaceful colour of the structure enhanced our mind for calmness and pleasure. Food is served at the best quality in the restaurant. Very attentive and helpful staffs everywhere, specially the manager at the front Desk Mr Bishan, who is very friendly, welcoming and professional. Thank you Mithila Yatri Niwas for making our stay like at our own home.",
    icon: tripadvisor,
  },
];

export const formFields = [
  {
    id: "event",
    type: "text",
    label: "Event Title",
    icon: TbCalendarEvent,
  },
  {
    id: "event-date",
    type: "date",
    label: "Event Date",
    icon: TbCalendarEvent,
  },
  { id: "name", type: "text", label: "Full Name", icon: FiUser },
  {
    id: "email",
    type: "email",
    label: "Email address",
    icon: MdAlternateEmail,
  },
  { id: "phone", type: "tel", label: "Phone Number", icon: TbPhone },
  { id: "address", type: "text", label: "Address", icon: GrLocation },
  {
    id: "subject",
    type: "text",
    label: "Subject",
    icon: TbPencilQuestion,
  },
  {
    id: "message",
    type: "textarea",
    label: "Message",
    icon: HiOutlineMail,
  },
];
