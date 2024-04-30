import React from "react";
import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import RoomSlider from "./ui/RoomSlider";
import LearnMore from "./ui/LearnMore";

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

  return (
    <>
      <section className="bg-gradient-to-t from-logo-bg to-alt-bg p-10">
        <div className="containe r">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl text-primary">Accommodation</h2>
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
