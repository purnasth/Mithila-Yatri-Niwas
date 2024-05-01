import React from "react";
import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import RoomSlider from "./ui/RoomSlider";
import LearnMore from "./ui/LearnMore";

const Dine = () => {
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
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-logo-bg px-10">
        <div className="containe r">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl text-primary">Dine</h2>
              <p className="text-base text-gray-500 mt-4">
                At Mithila Yatri Niwas we curate delicious food dishes made in
                state-of-art kitchen through experienced chefs, with an attempt
                to offer the best to all our guests. Serving Continental,
                Indian, Chinese and Local cuisines, the ingredients are fresh
                and each dish will embark you on a centuries-old traditional
                culinary journey. With some of the most searched for and most
                appreciated Indian dishes on our menu, we are popular not just
                with Indians looking for good vegetarian food, but locals and
                tourists who would like to enjoy this culinary experience. The
                ambience and décor of our Restaurant suits the theme and
                celebrates the religious and cultural setting of our vicinity.
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

export default Dine;
