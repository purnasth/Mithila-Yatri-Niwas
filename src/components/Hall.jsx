import React from "react";
import hall1 from "../assets/halls/hall1.webp";
import exterior3 from "../assets/halls/exterior2.webp";
import RoomSlider from "./ui/RoomSlider";
import SvgWave from "./ui/SvgWave";
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "./ui/Button";

const Hall = () => {
  const hallCategories = [
    {
      id: 1,
      title: "Sabha Hall",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 18 Deluxe Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      icon: hall1,
      router: "/hall#sabha-hall",
    },
    {
      id: 2,
      title: "PDR",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 10 Executive Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      icon: exterior3,
      router: "/hall#pdr",
    },
  ];

  const hallAmenities = [
    "Projector",
    "PA System",
    "Microphone",
    "video conferencing",
    "computer / laptop",
    "white board",
    "flip chart",
    "soft (pin) board",
    "printing services",
    "Air conditioner",
  ];

  return (
    <>
      <section className="bg-alt-bg px-10 overflow-hidden">
        <SvgWave />
        <div className="absolute right-0 top-64 w-80 h-96 bg-[url('/src/assets/graphics/ram.svg')] bg-contain bg-no-repeat mix-blend-overlay -z-10 opacity-70 -rotate-90" />

        {/* <section className="bg-gradient-to-t from-logo-bg to-alt-bg px-10"> */}
        <div className="containe r">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="home-accommodation col-span-2 md:col-span-2">
              <RoomSlider contents={hallCategories} />
            </div>
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl text-primary">Occasions</h2>
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
                  {hallAmenities
                    .slice(0, Math.ceil(hallAmenities.length / 2))
                    .map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-center gap-4 text-gray-500 capitalize"
                      >
                        <HiArrowLongRight />
                        {amenity}
                      </li>
                    ))}
                </ul>
                <ul className="flex items-start justify-center flex-col gap-4">
                  {hallAmenities
                    .slice(Math.ceil(hallAmenities.length / 2))
                    .map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-center gap-4 text-gray-500 capitalize"
                      >
                        <HiArrowLongRight />
                        {amenity}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="my-8">
                <Button title="Reserve" router="/enquiry-form#enquiry-form" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hall;
