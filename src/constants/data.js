import logo from "./assets/logo.svg";

export { logo };

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/home",
  },
  {
    id: "about",
    title: "About",
    link: "/about",
  },
  {
    id: "restaurants",
    title: "Restaurant & Bars",
    link: "/restaurants",
  },
  {
    id: "recreation",
    title: "Recreation",
    link: "/recreation",
  },
  // {
  //   id: "facilities",
  //   title: "Facilities",
  //   link: "/facilities",
  // },
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

export const navLinksRooms = [
  {
    id: 1,
    title: "Rooms & Suites",
    link: "/accommodation",
    subLinks: [
      {
        id: "deluxeRoom",
        title: "Deluxe Rooms",
        link: "/accommodation/deluxe",
      },
      {
        id: "superDeluxeRoom",
        title: "Super Deluxe Rooms",
        link: "/accommodation/super-deluxe",
      },
      {
        id: "premiumRoom",
        title: "Premium Rooms",
        link: "/accommodation/premium",
      },
      {
        id: "juniorSuite",
        title: "Junior Suite",
        link: "/accommodation/junior-suite",
      },
      {
        id: "executiveSuite",
        title: "Executive Rooms",
        link: "/accommodation/executive-suite",
      },
    ],
  },
];

export const navLinksEvents = [
  {
    id: 1,
    title: "Conference & Events",
    link: "/events",
    subLinks: [
      {
        id: "janakiHall",
        title: "Janaki Hall",
        link: "/events#janakiHall",
      },
      {
        id: "jyamireHall",
        title: "Jyamire Hall",
        link: "/events#jyamireHall",
      },
      {
        id: "narayaniHall",
        title: "Narayani Hall",
        link: "/events#narayaniHall",
      },
      {
        id: "balmikiHall",
        title: "Balmiki Hall",
        link: "/events#balmikiHall",
      },
    ],
  },
];
