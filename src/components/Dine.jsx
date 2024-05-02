import React from "react";
import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import LearnMore from "./ui/LearnMore";
import DineGallery from "./ui/DineGallery";
import SvgWave from "./ui/SvgWave";

const Dine = () => {
  const foodsCategories = [
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
        <SvgWave/>
        <div className="containe r">
          <div className="">
            <div className="text-center mb-12 container max-w-6xl mx-auto">
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
            </div>
            <div className="">
              <DineGallery contents={foodsCategories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dine;
