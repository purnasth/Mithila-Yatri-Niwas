import React from "react";
import PackageSlider from "../components/ui/PackageSlider";

import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import BreadCrumb from "../components/ui/BreadCrumb";
import RoomAmenities from "../components/ui/RoomAmenities";
import Reservation from "../components/ui/Reservation";

import { IoBed, IoPricetagSharp } from "react-icons/io5";
import { IoMdResize } from "react-icons/io";
import { GiBowlOfRice } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";

import PackageList from "../components/PackageList";

import dine1 from "../assets/dine/dine.webp";

import {
  FaWifi,
  FaTv,
  FaBed,
  FaBath,
  FaSwimmingPool,
  FaUtensils,
  FaParking,
  FaAirFreshener,
  FaCoffee,
  FaFireAlt,
  FaChild,
  FaWheelchair,
} from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { GiSlippers } from "react-icons/gi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { GiTowel } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";

import { HiMiniUserGroup } from "react-icons/hi2";

const DinePage = () => {
  const dineCategories = [
    {
      id: 1,
      title: "Bhojan Griha",
      description:
        "At Mithila Yatri Niwas we curate delicious food dishes made in state-of-art kitchen through experienced chefs, with an attempt to offer the best to all our guests. Serving Continental, Indian, Chinese and Local cuisines, the ingredients are fresh and each dish will embark you on a centuries-old traditional culinary journey.",
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
      details: [
        {
          capacity: 65,
          cuisine: "Multi-Cuisine",
          timing: "7:00 AM - 10:30 PM",
          capacityIcon: <HiMiniUserGroup />,
          cuisineIcon: <GiBowlOfRice />,
          timingIcon: <IoMdClock />,
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
    },
  ];

  const roomAmenities = [
    { icon: <FaWifi />, title: "Free Wi-Fi" },
    { icon: <FaTv />, title: "Flat-screen TV" },
    { icon: <FaBed />, title: "Comfortable Bed" },
    { icon: <FaBath />, title: "Private Bathroom" },
    { icon: <MdTableRestaurant />, title: "Furniture" },
    { icon: <FaUtensils />, title: "Dining Area" },
    // { icon: <FaParking />, title: "Free Parking" },
    { icon: <FaAirFreshener />, title: "Air Conditioning" },
    { icon: <FaCoffee />, title: "Coffee Maker" },
    // { icon: <FaFireAlt />, title: "Fireplace" },
    // { icon: <FaChild />, title: "Kids Play Area" },
    // { icon: <FaWheelchair />, title: "Wheelchair Accessible" },
    { icon: <GiSlippers />, title: "Slippers" },
    { icon: <TbDeviceLandlinePhone />, title: "Telephone" },
    { icon: <GiTowel />, title: "Towel Service" },
    { icon: <FaBottleWater />, title: "Water Bottle" },
  ];

  return (
    <>
      <div className="-mt-36">
        <PackageSlider
          contents={dineCategories}
          sizeClassName="w-full h-screen"
        />
        <BreadCrumb page="Dine" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-3xl">Fine Dine Experience</h2>
          <p className="text-base text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
        </div>

        <PackageList contents={dineCategories} />

        <RoomAmenities
          amenities={roomAmenities}
          amenitiesTitle="Dine Amenities"
        />

        <Reservation />
      </section>
    </>
  );
};

export default DinePage;
