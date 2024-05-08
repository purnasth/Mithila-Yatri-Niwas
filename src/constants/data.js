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
import Banner from "../components/ui/Banner";
import RoomAmenities from "../components/ui/RoomAmenities";
import MithilaThali from "../components/ui/MithilaThali";
import Reservation from "../components/ui/Reservation";

import Direction from "../components/Direction";
import Hero from "../components/Hero";
import Accommodation from "../components/Accommodation";
import About from "../components/About";
import Dine from "../components/Dine";
import Testimonials from "../components/Testimonials";
import Hall from "../components/Hall";
import History from "../components/History";
import PlacesToVisit from "../components/PlacesToVisit";
import PackageList from "../components/PackageList";

import mithila from "../assets/mithila.webp";
import mithilaNight from "../assets/mithila_night.webp";
import mithila2 from "../assets/mithila2.webp";
import mithila4 from "../assets/mithila4.webp";

import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import room4 from "../assets/rooms/room4.webp";
import room5 from "../assets/rooms/room5.webp";
import room6 from "../assets/rooms/room6.webp";
import hall1 from "../assets/halls/hall1.webp";
import hall2 from "../assets/halls/hall2.webp";
import exterior1 from "../assets/halls/exterior1.webp";
import exterior2 from "../assets/halls/exterior2.webp";
import exterior3 from "../assets/halls/exterior3.webp";
import lobby1 from "../assets/halls/lobby1.webp";
import dine1 from "../assets/dine/dine.webp";

import ushape from "../assets/setup/ushape.webp";
import classroom from "../assets/setup/classroom.webp";
import theatre from "../assets/setup/theatre.webp";
import round from "../assets/setup/round.webp";

export {
  logo,
  About,
  AboutGallery,
  Accommodation,
  Banner,
  BreadCrumb,
  Button,
  Dine,
  Direction,
  Hall,
  Hero,
  History,
  LearnMore,
  LocationDetails,
  MithilaThali,
  OffersSlider,
  PackageContent,
  PackageList,
  PackageSlider,
  PlacesToVisit,
  PlacesToVisitSlider,
  Reservation,
  RoomAmenities,
  Socials,
  SvgWave,
  Testimonials,
  TestimonialsSlider,
  mithila,
  mithilaNight,
};

import {
  FaInstagram,
  // FaTripadvisor,
  FaWhatsapp,
  FaUtensils,
  FaCoffee,
  FaGlassCheers,
  FaChalkboardTeacher,
  FaMusic,
  FaWineBottle,
  FaBeer,
  FaTemperatureHigh,
  FaWifi,
  FaTv,
  FaAirFreshener,
  FaMicrophone,
  FaVideo,
  FaMapPin,
  FaPrint,
  FaBed,
  FaBath,
} from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import {
  TbPhone,
  TbBrandFacebook,
  TbPencilQuestion,
  TbCalendarEvent,
  TbDeviceLandlinePhone,
} from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

import { FiUser } from "react-icons/fi";
import {
  MdAlternateEmail,
  MdOutlineBed,
  MdOutlineBrunchDining,
  MdTableChart,
  MdTableRestaurant,
  MdSpeaker,
} from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import {
  GiBowlOfRice,
  GiCandleLight,
  GiCookingPot,
  GiHotMeal,
  GiTowel,
  GiSlippers,
} from "react-icons/gi";
import { IoMdClock, IoMdResize } from "react-icons/io";
import { IoBed, IoPricetagSharp } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiProjectorScreenFill } from "react-icons/pi";
import { BsFillProjectorFill } from "react-icons/bs";

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
    title: "About Mithila Yatri Niwas",
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

export const dineContents = [
  {
    title: "Fine Dine Experience",
    subheading: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In pariatur odit reiciendis quae quod, accusamus quos, consectetur ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a deserunt voluptas alias aliquam vero expedita enim ab assumenda! Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut corrupti nemo facilis quos?",
    dineCategories: [
      {
        id: 1,
        title: "Bhojan Griha",
        description:
          "At Mithila Yatri Niwas we curate delicious food dishes made in state-of-art kitchen through experienced chefs, with an attempt to offer the best to all our guests. Serving Continental, Indian, Chinese and Local cuisines, the ingredients are fresh and each dish will embark you on a centuries-old traditional culinary journey.",
        booking: "/enquiry-form",
        image: [
          {
            src: dine1,
            alt: "Dine",
          },
          {
            src: dine1,
            alt: "Dine",
          },
          {
            src: dine1,
            alt: "Dine",
          },
        ],
        informations: [
          {
            title: "Informations",
            data: {
              Occupancy: { icon: HiMiniUserGroup, value: "65 pax" },
              Cuisine: { icon: GiBowlOfRice, value: "Multicuisine" },
              Timing: { icon: IoMdClock, value: "7:00 AM - 10:30 PM" },
            },
          },
        ],
        facilities: [
          {
            title: "Facilities",
            content: [
              "Complimentary welcome drink (non-alcoholic) upon arrival at the restaurant.",
              "Enjoy a selection of tea and coffee during your dining experience.",
              "Free high-speed internet access available throughout the restaurant.",
              "Stay hydrated with two 1000ml mineral water bottles provided per table every day.",
            ],
          },
        ],
        policies: [
          {
            title: "Policies",
            content: [
              "Children aged 0 - 4 years dining with parents receive complimentary meals.",
              "Children aged 5 - 10 years dining with parents receive a 50% discount on meals.",
              "Breakfast is available at USD $8 or INR 500 per person.",
            ],
          },
        ],
        dineAmenities: [
          { icon: MdTableChart, title: "Ample Seating" },
          { icon: FaUtensils, title: "Cutlery Provided" },
          { icon: FaGlassCheers, title: "Beverage Service" },
          { icon: FaChalkboardTeacher, title: "Menu Display" },
          { icon: FaMusic, title: "Background Music" },
          { icon: FaCoffee, title: "Coffee Station" },
          { icon: FaWineBottle, title: "Wine Selection" },
          { icon: FaBeer, title: "Beer on Tap" },
          { icon: GiCandleLight, title: "Ambiance Lighting" },
          { icon: FaTemperatureHigh, title: "Air Conditioner" },
          { icon: GiCookingPot, title: "Live Cooking" },
          { icon: GiHotMeal, title: "Hot Meal Counter" },
        ],
      },
    ],
  },
];

export const hallContents = [
  {
    title: "Occasions",
    subheading: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In pariatur odit reiciendis quae quod, accusamus quos, consectetur ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a deserunt voluptas alias aliquam vero expedita enim ab assumenda! Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut corrupti nemo facilis quos?",
    hallCategories: [
      {
        id: 1,
        title: "Sabha Hall",
        description:
          "Our Sabha hall is the perfect venue for seminars, workshops, meetings, conferences or any social celebrations. Equipped with all the modern technical requirements such as projectors, sound system etc. our dedicated team re committed to delight you at all times to ensure your every need is met to make your event truly memorable.",
        booking: "/enquiry-form",
        image: [
          {
            src: hall1,
            alt: "Sabha Hall",
          },
        ],
        informations: [
          {
            title: "Setup Style",
            data: {
              "U shape": { icon: ushape, value: "45 pax" },
              Classroom: {
                icon: classroom,
                value: "150 pax",
              },
              Theatre: { icon: theatre, value: "400 pax" },
              "Round Table": { icon: round, value: "180 pax" },
            },
          },
        ],
        facilities: [
          {
            title: "Facilities",
            content: [
              "Advanced audiovisual equipment including projectors and sound systems.",
              "Flexible seating arrangements to accommodate various event sizes and styles.",
              "Dedicated event management team to assist with all your requirements.",
              "High-speed internet access throughout the hall.",
              "Comfortable seating and climate control for all-season comfort.",
            ],
          },
        ],
        policies: [
          {
            title: "Policies",
            content: [
              "Reservation required in advance to secure the hall for your event.",
              "Cancellation policy: Please refer to our cancellation terms for details.",
              "Additional charges may apply for extra services requested beyond standard facilities.",
              "All event attendees must adhere to the venue rules and regulations.",
              "Damages to the hall or equipment will incur additional charges.",
            ],
          },
        ],
        hallAmenities: [
          { icon: FaWifi, title: "Wifi" },
          { icon: MdSpeaker, title: "PA System" },
          { icon: FaMicrophone, title: "Microphone" },
          { icon: FaVideo, title: "Video Conferencing" },
          { icon: MdTableRestaurant, title: "Furniture" },
          { icon: FaTv, title: "Computer/ Laptop" },
          { icon: FaAirFreshener, title: "Air Conditioner" },
          { icon: PiProjectorScreenFill, title: "Flip chart" },
          { icon: FaMapPin, title: "Soft (pin) board" },
          { icon: FaPrint, title: "Printing Service" },
          { icon: GiTowel, title: "Projector" },
          { icon: BsFillProjectorFill, title: "White Board" },
        ],
      },
      {
        id: 2,
        title: "PDR",
        description:
          "Our PDR hall is the perfect venue for seminars, workshops, meetings, conferences or any social celebrations. Equipped with all the modern technical requirements such as projectors, sound system etc. our dedicated team re committed to delight you at all times to ensure your every need is met to make your event truly memorable.",
        booking: "/enquiry-form",
        image: [
          {
            src: lobby1,
            alt: "PDR Hall",
          },
        ],
        informations: [
          {
            title: "Setup Style",

            data: {
              "U shape": { icon: ushape, value: "N/A pax" },
              Classroom: {
                icon: classroom,
                value: "12 pax",
              },
              Theatre: { icon: theatre, value: "24 pax" },
              "Round Table": { icon: round, value: "N/A pax" },
            },
          },
        ],
        facilities: [
          {
            title: "Facilities",
            content: [
              "Modern audiovisual equipment for presentations and meetings.",
              "Flexible seating arrangements suitable for small group discussions or presentations.",
              "Complimentary high-speed internet access for all attendees.",
              "Professional event coordination and support throughout your event.",
              "Comfortable and well-lit environment for productive meetings.",
            ],
          },
        ],
        policies: [
          {
            title: "Policies",
            content: [
              "Advance booking is recommended to secure the hall for your event.",
              "Any damages to the hall or equipment will be charged to the organizer.",
              "Outside catering may be permitted with prior approval and additional charges.",
              "Smoking and alcohol consumption may be restricted based on venue policies.",
              "Please adhere to the designated capacity limits for safety and comfort.",
            ],
          },
        ],
      },
    ],
  },
];

export const accommodationContents = [
  {
    title: "Accommodation",
    subheading: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In pariatur odit reiciendis quae quod, accusamus quos, consectetur ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a deserunt voluptas alias aliquam vero expedita enim ab assumenda! Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut corrupti nemo facilis quos?",
    roomsCategories: [
      {
        id: 1,
        title: "Deluxe Room",
        description:
          "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 18 Deluxe Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
        image: [
          {
            src: room1,
            alt: "Deluxe Room",
          },
        ],
        router: "/accommodation/deluxe-room",
        booking:
          "https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW",
        informations: [
          {
            title: "Informations",
            data: {
              "Total Rooms": { icon: IoBed, value: "18 rooms" },
              Price: { icon: IoPricetagSharp, value: "Starting USD 40" },
              "Room Size": { icon: IoMdResize, value: "205 sq. ft." },
              "Rate plan": { icon: GiBowlOfRice, value: "Bed & Breakfast" },
              "Check-in/out": { icon: IoMdClock, value: "1pm - 12 noon" },
            },
          },
        ],
        facilities: [
          {
            title: "Facilities",
            content: [
              "Welcome drink (non-alcoholic) on arrival.",
              "Tea/Coffee maker in room with sachet.",
              "Iron and Ironing board in the room on request.",
              "Free internet access throughout the stay in the room.",
              "Two mineral water bottles (1000ml) every day in the room.",
            ],
          },
        ],
        policies: [
          {
            title: "Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - USD $8/ INR 500.",
            ],
          },
        ],
        roomAmenities: [
          { icon: FaWifi, title: "Free Wi-Fi" },
          { icon: FaTv, title: "Flat-screen TV" },
          { icon: FaBed, title: "Comfortable Bed" },
          { icon: FaBath, title: "Private Bathroom" },
          { icon: MdTableRestaurant, title: "Furniture" },
          { icon: FaUtensils, title: "Dining Area" },
          { icon: FaAirFreshener, title: "Air Conditioning" },
          { icon: FaCoffee, title: "Coffee Maker" },
          { icon: GiSlippers, title: "Slippers" },
          { icon: TbDeviceLandlinePhone, title: "Telephone" },
          { icon: GiTowel, title: "Towel Service" },
          { icon: FaBottleWater, title: "Water Bottle" },
        ],
      },
      {
        id: 2,
        title: "Executive Room",
        description:
          "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 10 Executive Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
        image: [
          {
            src: room2,
            alt: "Deluxe Room",
          },
        ],
        router: "/accommodation/executive-suite",
        booking:
          "https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW",
        informations: [
          {
            title: "Informations",
            data: {
              "Total Rooms": { icon: IoBed, value: "10 rooms" },
              Price: { icon: IoPricetagSharp, value: "Starting USD 50" },
              "Room Size": { icon: IoMdResize, value: "215 sq. ft." },
              "Rate plan": { icon: GiBowlOfRice, value: "Bed & Breakfast" },
              "Check-in/out": { icon: IoMdClock, value: "1pm - 12 noon" },
            },
          },
        ],
        facilities: [
          {
            title: "Facilities",
            content: [
              "Welcome drink (non-alcoholic) on arrival.",
              "Tea/Coffee maker in room with sachet.",
              "Iron and Ironing board in the room on request.",
              "Free internet access throughout the stay in the room.",
              "Two mineral water bottles (1000ml) every day in the room.",
            ],
          },
        ],
        policies: [
          {
            title: "Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - USD $8/ INR 500.",
            ],
          },
        ],
        roomAmenities: [
          { icon: FaWifi, title: "Free Wi-Fi" },
          { icon: FaTv, title: "Flat-screen TV" },
          { icon: FaBed, title: "Comfortable Bed" },
          { icon: FaBath, title: "Private Bathroom" },
          { icon: MdTableRestaurant, title: "Furniture" },
          { icon: FaUtensils, title: "Dining Area" },
          { icon: FaAirFreshener, title: "Air Conditioning" },
          { icon: FaCoffee, title: "Coffee Maker" },
          { icon: GiSlippers, title: "Slippers" },
          { icon: TbDeviceLandlinePhone, title: "Telephone" },
          { icon: GiTowel, title: "Towel Service" },
          { icon: FaBottleWater, title: "Water Bottle" },
        ],
      },
      {
        id: 3,
        title: "Suite Room",
        description:
          "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 2 Suite Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
        image: [
          {
            src: room3,
            alt: "Deluxe Room",
          },
        ],
        router: "/accommodation/suite-room",
        booking:
          "https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW",
        informations: [
          {
            title: "Informations",
            data: {
              "Total Rooms": { icon: IoBed, value: "2 rooms" },
              Price: { icon: IoPricetagSharp, value: "Starting USD 60" },
              "Room Size": { icon: IoMdResize, value: "215 sq. ft." },
              "Rate plan": { icon: GiBowlOfRice, value: "Bed & Breakfast" },
              "Check-in/out": { icon: IoMdClock, value: "1pm - 12 noon" },
            },
          },
        ],
        facilities: [
          {
            title: "Facilities",
            content: [
              "Fruits Basket and VIP Amenities on room.",
              "Welcome drink (non-alcoholic) on arrival.",
              "Tea/Coffee maker in room with sachet.",
              "Iron and Ironing board in the room on request.",
              "Free internet access throughout the stay in the room.",
              "Two mineral water bottles (1000ml) every day in the room.",
            ],
          },
        ],
        policies: [
          {
            title: "Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - USD $8/ INR 500.",
            ],
          },
        ],
        roomAmenities: [
          { icon: FaWifi, title: "Free Wi-Fi" },
          { icon: FaTv, title: "Flat-screen TV" },
          { icon: FaBed, title: "Comfortable Bed" },
          { icon: FaBath, title: "Private Bathroom" },
          { icon: MdTableRestaurant, title: "Furniture" },
          { icon: FaUtensils, title: "Dining Area" },
          { icon: FaAirFreshener, title: "Air Conditioning" },
          { icon: FaCoffee, title: "Coffee Maker" },
          { icon: GiSlippers, title: "Slippers" },
          { icon: TbDeviceLandlinePhone, title: "Telephone" },
          { icon: GiTowel, title: "Towel Service" },
          { icon: FaBottleWater, title: "Water Bottle" },
        ],
      },
    ],
  },
];

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
    id: "janaki",
    title: "Janaki Mandir",
    description:
      "Dedicated to Goddess Sita, Janaki Mandir is the biggest temple in Nepal located in Janakpur. It is constructed at the place where Goddess Sita was born. The attraction is now considered as a religiously important monument and a heritage site but is still an active temple for devotees. Anybody seeking a slice of the legend of Ramayana must visit the divine Janaki Temple. <br/> The Janaki Mandir is an examplar of Hindu-Koiri Nepali architecture having a stunning white facade. The 3 storied temple is built entirely of stones and marbles, while the 60 rooms inside are adorned with Nepali flag, engravings, paintings, beautiful lattice windows and turrets. The Janaki temple is predominantly thronged by devotees during auspicious occasions and festivals like the Ram Navami, Vivah Panchami, Dashain, Deepavali, and Holi. Pilgrims come in from all around Nepal, Sri Lanka and India to worship the Goddess who is deemed an epitome of courage, purity, selflessness, dedication, loyalty and feminine virtues.",
    icon: "https://www.holidify.com/images/cmsuploads/compressed/Ram_Janaki_Temple,_Dhanusha_20181001160947.jpg",
  },
  {
    id: "ram-mandir",
    title: "Ram Mandir, Janakpur",
    description:
      "Ram Mandir is one of the oldest temples in Janakpur built in the late 1700s by Amar Singh Thapa, a Gorkhali General. The architecture of the temple is traditional pagoda-style like the other shrines in the region. The modestly quaint temple is flocked by pilgrims during the occasion of Ram Navami and Dashain which are sacred and important annual festivals dedicated to Lord Rama. The opulent temple is a perfect attraction for those interested in exploring ancient cultures and experiencing its divine vibe. <br/> The temple is a beautiful structure with a white facade and a golden pinnacle. The temple is dedicated to Lord Rama and is a popular pilgrimage site for Hindus. The temple is a part of the Ramayana Circuit and is visited by thousands of devotees every year. The temple is a must-visit for those interested in exploring the rich culture and heritage of Nepal.",
    icon: "https://www.holidify.com/images/cmsuploads/compressed/Ram_Mandir,_Janakpur-September_22,_2016-IMG_7648_20181001175901_20181001175919.jpg",
  },
  {
    id: "rolwaling-valley",
    title: "Rolwaling Valley",
    description:
      "Rolwaling Valley, between the Everest and Langtang Himalaya ranges, is the toughest and most thrilling trekking trail in Nepal. The valley has an abundance of alpine lakes, hanging glaciers, moraines, high pastures, waterfalls and imminent view of snowy peaks. Rich in varying flora and fauna, it is home to many endangered and globally threatened animals.",
    icon: "https://www.holidify.com/images/foreign/compressed/attr_123742.jpg",
  },
  {
    id: "ram-sita-vivah-mandap",
    title: "Ram Sita Vivah Mandap",
    description:
      "The place where Ram and Sita got married, Ram Janaki Vivah Mandap is visited by thousands of pilgrims to pay homage to Sita at the time of Vivah Panchami. The marriage day of Sita and Ram usually celebrated on the fifth day of the Shukla Paksha or waxing phase of moon in November/December. The mandap is a gorgeous structure made of marble located in the southwest region of the Janaki Mandir. It resembles a part of a palace with sturdy pillars, elegant arches and stunning domes. <br/> At the centre of the mandap, the legendary wedding ceremony is depicted. One can see idols of the couple, Goddess Sita and Lord Rama, sitting on a raised pedestal in the centre while some sages and their parents are seen seated on parallel pedestals facing each other. The idols are draped in colourful attires and give a sense of the ancient royal celebration. Devotees can offer their prayers and sit in complete silence to soak in the tranquil vibe of the temple. Those interested in getting a sneak peek into this epic union must visit the Ram Sita Vivah Mandap.",
    icon: "https://www.holidify.com/images/cmsuploads/compressed/Vivah_Mandap,_Janakpur-September_22,_2016-IMG_7419_20181001182754_20181001182810.jpg",
  },
  {
    id: "jaleshwar",
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

export const galleryImages = [
  {
    id: 1,
    url: mithila,
    alt: "External View of Mithila Yatri Niwas",
    category: "Exterior",
  },
  {
    id: 2,
    url: room1,
    alt: "A Room in Mithila Yatri Niwas",
    category: "Rooms",
  },
  {
    id: 3,
    url: mithilaNight,
    alt: "External View of Mithila Yatri Niwas",
    category: "Exterior",
  },
  {
    id: 4,
    url: room2,
    alt: "A Room in Mithila Yatri Niwas",
    category: "Rooms",
  },
  {
    id: 5,
    url: room3,
    alt: "A Room in Mithila Yatri Niwas",
    category: "Rooms",
  },
  {
    id: 6,
    url: hall1,
    alt: "A Hall in Mithila Yatri Niwas",
    category: "Halls",
  },
  {
    id: 7,
    url: lobby1,
    alt: "Lobby of Mithila Yatri Niwas",
    category: "Halls",
  },
  {
    id: 8,
    url: mithila2,
    alt: "External View of Mithila Yatri Niwas",
    category: "Exterior",
  },
  {
    id: 9,
    url: dine1,
    alt: "External View of Mithila Yatri Niwas",
    category: "Halls",
  },
  {
    id: 10,
    url: exterior1,
    alt: "External View of Mithila Yatri Niwas",
    category: "Halls",
  },
  {
    id: 11,
    url: room4,
    alt: "A Room in Mithila Yatri Niwas",
    category: "Rooms",
  },
  {
    id: 12,
    url: mithila4,
    alt: "External View of Mithila Yatri Niwas",
    category: "Exterior",
  },
  {
    id: 13,
    url: hall2,
    alt: "External View of Mithila Yatri Niwas",
    category: "Halls",
  },
  {
    id: 14,
    url: room5,
    alt: "A Room in Mithila Yatri Niwas",
    category: "Rooms",
  },
  {
    id: 15,
    url: room6,
    alt: "A Room in Mithila Yatri Niwas",
    category: "Rooms",
  },
];

export const contactFormFields = [
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

export const enquiryFormFields = [
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
