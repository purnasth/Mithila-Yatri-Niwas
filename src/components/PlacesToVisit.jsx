import React from "react";
import {
  SvgWave,
  PlacesToVisitSlider,
  placesToVistContents,
} from "../constants/data";

const PlacesToVisit = () => {
  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-alt-bg md:px-10">
        <SvgWave />
        <div className="absolute left-0 bottom-0 w-full h-16 bg-[url('/src/assets/logo-graphics.svg')] bg-contain bg-repeat-x mix-blend-luminosity opacity-80 -z-20" />
        <div className="text-center mb-12 container max-w-6xl mx-auto">
          <h2 className="text-3xl text-primary">Places to Visit</h2>
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
        <div className="px-3">
          <PlacesToVisitSlider
            contents={placesToVistContents}
            router="/places-to-visit"
          />
        </div>
      </section>
    </>
  );
};

export default PlacesToVisit;
