import React from "react";
import TestimonialsSlider from "./ui/TestimonialsSlider";
import LearnMore from "./ui/LearnMore";
import OffersSlider from "./ui/OffersSlider";
import SvgWave from "./ui/SvgWave";

const Offers = () => {
  const offersContents = [
    {
      id: 1,
      title: "For Couple",
      description: "1 night Package MAP plan",
      icon: "https://w0.peakpx.com/wallpaper/42/851/HD-wallpaper-jai-shri-ram-janaki-shri-ram-sita-vishnu-lord-lakshman-hanuman-ramayan-god.jpg",
      price: "7500",
    },
    {
      id: 2,
      title: "For Couple",
      description: "1 night Package MAP plan",
      icon: "https://w0.peakpx.com/wallpaper/42/851/HD-wallpaper-jai-shri-ram-janaki-shri-ram-sita-vishnu-lord-lakshman-hanuman-ramayan-god.jpg",
      price: "7500",
    },
    {
      id: 3,
      title: "For Couple",
      description: "1 night Package MAP plan",
      icon: "https://w0.peakpx.com/wallpaper/42/851/HD-wallpaper-jai-shri-ram-janaki-shri-ram-sita-vishnu-lord-lakshman-hanuman-ramayan-god.jpg",
      price: "7500",
    },
  ];

  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-alt-bg px-10">
        <SvgWave/>
        <div className="text-center mb-12 container max-w-6xl mx-auto">
          <h2 className="text-3xl text-primary">Offers</h2>
          <p className="text-base text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
          {/* <LearnMore
              text="Explore"
              primaryColor="bg-logo-clr"
              secondaryColor="bg-alt-logo-clr"
            /> */}
        </div>
        <div className="">
          <OffersSlider contents={offersContents} />
        </div>
      </section>
    </>
  );
};

export default Offers;
