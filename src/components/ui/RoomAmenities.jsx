import React from "react";
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

const RoomAmenities = () => {
  const amenities = [
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
    <div className="container py-12 my-32 p-0">
      <h4 className="text-3xl text-center my-8">Room Amenities</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-24">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center flex-col gap-4 p-4">
            <span className="text-2xl text-alt-logo-clr">{amenity.icon}</span>
            <p>{amenity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomAmenities;
