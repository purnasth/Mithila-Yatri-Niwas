import React from "react";
import hall1 from "../assets/halls/hall1.webp";
import exterior3 from "../assets/halls/exterior2.webp";
import RoomSlider from "./ui/RoomSlider";
import LearnMore from "./ui/LearnMore";
import SvgWave from "./ui/SvgWave";

const Hall = () => {
  const hallCategories = [
    {
      id: 1,
      title: "Sabha Hall",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 18 Deluxe Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      icon: hall1,
      router: "/hall/sabha-hall",
    },
    {
      id: 2,
      title: "PDR",
      description:
        "Comfortable and homely for relaxation with view of our garden, the lake or the Janaki Temple some distance away. All our 10 Executive Rooms are designed keeping in mind your needs but nothing in excess. These rooms are opulently designed and decorated for comfort of our guests.",
      icon: exterior3,
      router: "/hall/pdr",
    },
  ];

  return (
    <>
      <section className="bg-alt-bg px-10">
        <SvgWave />
        {/* <section className="bg-gradient-to-t from-logo-bg to-alt-bg px-10"> */}
        <div className="containe r">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="col-span-2 md:col-span-2">
              <RoomSlider contents={hallCategories} />
            </div>
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl text-primary">Occassions</h2>
              <p className="text-base text-gray-500 mt-4">
                With 30 immaculately designed rooms that are carefully planned
                to ensure soothing modern comfort, they all afford wonderful
                views of the Janaki Temple. Whether you're staying in our
                Presidential Suite or have booked a Standard Room your stay will
                be memorable and fulfilling as we strive to ensure the finest
                service and perfect thematic ambience that complements our
                sacred surroundings.
              </p>
              <LearnMore
                text="Explore"
                primaryColor="bg-logo-clr"
                secondaryColor="bg-alt-logo-clr"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hall;
