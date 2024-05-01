import React from "react";
import TestimonialsSlider from "./ui/TestimonialsSlider";
import LearnMore from "./ui/LearnMore";
import tripadvisor from "../assets/tripadvisor.webp";
import booking from "../assets/booking.webp";

const Testimonials = () => {
  const roomsCategories = [
    {
      id: 1,
      author: "Jas Family",
      location: "Chigwell, United Kingdom",
      description:
        "Best place to stay in Janakpur   Best hotel in Janakpur to stay while visiting alone or with family. Very nice room at reasonable price with good view of town and naturally built ponds in its surrounding. Peaceful colour of the structure enhanced our mind for calmness and pleasure. Food is served at the best quality in the restaurant. Very attentive and helpful staffs everywhere, specially the manager at the front Desk Mr Bishan, who is very friendly, welcoming and professional. Thank you Mithila Yatri Niwas for making our stay like at our own home.",
      icon: tripadvisor,
    },
    {
      id: 2,
      author: "Anna-Maria",
      location: "Finland",
      description:
        "Buffet breakfast was available, also a lot of good options on the dinner. Location was good. The room was clean, spacious and room service was working fine. AC worked well and the bathroom was clean. The view from my big window was really lovely.",
      icon: booking,
    },
    {
      id: 3,
      author: "Jas Family",
      location: "Chigwell, United Kingdom",
      description:
        "Best place to stay in Janakpur   Best hotel in Janakpur to stay while visiting alone or with family. Very nice room at reasonable price with good view of town and naturally built ponds in its surrounding. Peaceful colour of the structure enhanced our mind for calmness and pleasure. Food is served at the best quality in the restaurant. Very attentive and helpful staffs everywhere, specially the manager at the front Desk Mr Bishan, who is very friendly, welcoming and professional. Thank you Mithila Yatri Niwas for making our stay like at our own home.",
      icon: tripadvisor,
    },
  ];

  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-alt-bg px-10">
        <div className="containe r">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl text-primary">Testimonials</h2>
              <p className="text-base text-gray-500 mt-4">
                Experience and immerse in Nepal's religious, cultural and
                historical heritage, with all the modern comforts and amenities
                while avoiding the hustle and bustle of Janakpur.
              </p>
              <LearnMore
                text="Explore"
                primaryColor="bg-logo-clr"
                secondaryColor="bg-alt-logo-clr"
              />
            </div>
            <div className="col-span-2 md:col-span-2">
              {/* <RoomSlider contents={roomsCategories} /> */}

              <TestimonialsSlider contents={roomsCategories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
