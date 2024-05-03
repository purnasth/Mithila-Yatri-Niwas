import React from "react";
import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import RoomSlider from "./ui/RoomSlider";
import LearnMore from "./ui/LearnMore";
import SvgWave from "./ui/SvgWave";

import { HiArrowLongRight } from "react-icons/hi2";
import Button from "./ui/Button";

const Accommodation = () => {
  const roomsCategories = [
    {
      id: 1,
      title: "Deluxe Room",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 18 Deluxe Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      icon: room1,
      router: "/accommodation/deluxe-room",
    },
    {
      id: 2,
      title: "Executive Room",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 10 Executive Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      icon: room2,
      router: "/accommodation/executive-suite",
    },
    {
      id: 3,
      title: "Suite Room",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 2 Suite Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      icon: room3,
      router: "/accommodation/suite-room",
    },
  ];

  const roomAmenities = [
    "Wi-Fi",
    "Air conditioning",
    "Bathrobe",
    "Coffee and tea set",
    "Desk",
    "Hairdryer",
    "Slippers",
    "Television",
    "Toiletries",
    "Twin bed/double bed",
  ];

  return (
    <>
      <section className="bg-alt-bg px-10 z-10">
        <SvgWave />
        <div
          // className={`absolute inset-0 h-full w-full bg-[url('https://img.freepik.com/premium-vector/simple-ornate-background-with-elegant-motifs_1442-34895.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714262400&semt=ais')] bg-repeat z-0 mix-blend-overlay opacity-35`}
          // className={`absolute inset-0 h-full w-full bg-[url('src/assets/graphics/hmm.png')] bg-repeat z-0 mix-blend-overlay opacity-35`}
          className={`absolute inset-0 h-full w-full bg-[url('src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-10 mix-blend-multiply opacity-20`}
        />
        {/* <section className="bg-gradient-to-t from-logo-bg to-alt-bg px-10"> */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl">Accommodation</h2>
              <p className="text-base text-gray-500 mt-4">
                With 30 immaculately designed rooms that are carefully planned
                to ensure soothing modern comfort, they all afford wonderful
                views of the Janaki Temple. Whether you're staying in our
                Presidential Suite or have booked a Standard Room your stay will
                be memorable and fulfilling as we strive to ensure the finest
                service and perfect thematic ambience that complements our
                sacred surroundings.
              </p>
              <h5 className="text-3xl mt-8 mb-6">Amenities</h5>
              <div className="flex items-start gap-20">
                <ul className="flex items-start justify-center flex-col gap-4">
                  {roomAmenities
                    .slice(0, Math.ceil(roomAmenities.length / 2))
                    .map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-center gap-4 text-gray-500"
                      >
                        <HiArrowLongRight />
                        {amenity}
                      </li>
                    ))}
                </ul>
                <ul className="flex items-start justify-center flex-col gap-4">
                  {roomAmenities
                    .slice(Math.ceil(roomAmenities.length / 2))
                    .map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-center gap-4 text-gray-500"
                      >
                        <HiArrowLongRight />
                        {amenity}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="my-8">
                <Button />
              </div>
              {/* <LearnMore
                text="Explore"
                primaryColor="bg-logo-clr"
                secondaryColor="bg-alt-logo-clr"
              /> */}
            </div>
            <div className="col-span-2 md:col-span-2">
              <RoomSlider contents={roomsCategories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;
