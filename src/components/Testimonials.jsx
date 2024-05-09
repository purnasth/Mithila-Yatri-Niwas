import React from "react";

import {
  testimonialsContent,
  SvgWave,
  LearnMore,
  TestimonialsSlider,
} from "../constants/data";

const Testimonials = () => {
  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-logo-bg px-10">
        <SvgWave />
        <div className="containe r">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl text-primary">Testimonials</h2>
              <p className="text-base text-gray-500 mt-4 mb-8">
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
              <TestimonialsSlider contents={testimonialsContent} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
