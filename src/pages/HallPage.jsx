import React from "react";
import PackageSlider from "../components/ui/PackageSlider";

import BreadCrumb from "../components/ui/BreadCrumb";
import RoomAmenities from "../components/ui/RoomAmenities";
import Reservation from "../components/ui/Reservation";

import PackageList from "../components/PackageList";

import hall1 from "../assets/halls/hall1.webp";
import lobby1 from "../assets/halls/lobby1.webp";

import {
  FaWifi,
  FaTv,
  FaAirFreshener,
  FaMicrophone,
  FaVideo,
  FaMapPin,
  FaPrint,
} from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { MdSpeaker } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { PiProjectorScreenFill } from "react-icons/pi";
import { BsFillProjectorFill } from "react-icons/bs";

import ushape from "../assets/setup/ushape.webp";
import classroom from "../assets/setup/classroom.webp";
import theatre from "../assets/setup/theatre.webp";
import round from "../assets/setup/round.webp";

const HallPage = () => {
  const hallCategories = [
    {
      id: 1,
      title: "Sabha Hall",
      description:
        "Our Sabha hall is the perfect venue for seminars, workshops, meetings, conferences or any social celebrations. Equipped with all the modern technical requirements such as projectors, sound system etc. our dedicated team re committed to delight you at all times to ensure your every need is met to make your event truly memorable.",
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
    },
    {
      id: 2,
      title: "PDR",
      description:
        "Our PDR hall is the perfect venue for seminars, workshops, meetings, conferences or any social celebrations. Equipped with all the modern technical requirements such as projectors, sound system etc. our dedicated team re committed to delight you at all times to ensure your every need is met to make your event truly memorable.",
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
  ];

  const hallAmenities = [
    { icon: <FaWifi />, title: "Wifi" },
    { icon: <MdSpeaker />, title: "PA System" },
    { icon: <FaMicrophone />, title: "Microphone" },
    { icon: <FaVideo />, title: "Video Conferencing" },
    { icon: <MdTableRestaurant />, title: "Furniture" },
    { icon: <FaTv />, title: "Computer/ Laptop" },
    { icon: <FaAirFreshener />, title: "Air Conditioner" },
    { icon: <PiProjectorScreenFill />, title: "Flip chart" },
    { icon: <FaMapPin />, title: "Soft (pin) board" },
    { icon: <FaPrint />, title: "Printing Service" },
    { icon: <GiTowel />, title: "Projector" },
    { icon: <BsFillProjectorFill />, title: "White Board" },
  ];

  return (
    <>
      <div className="-mt-36">
        <PackageSlider
          contents={hallCategories}
          sizeClassName="w-full h-screen"
        />
        <BreadCrumb page="Occasions" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-3xl">Occasions</h2>
          <p className="text-base text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
        </div>

        <PackageList contents={hallCategories} />

        <RoomAmenities
          amenities={hallAmenities}
          amenitiesTitle="Hall Amenities"
        />

        <Reservation />
      </section>
    </>
  );
};

export default HallPage;
