import React from "react";
import {
  aboutContents,
  SvgWave,
  AboutGallery,
  LearnMore,
} from "../constants/data";

const About = () => {
  const { text, galleryImages } = aboutContents;
  return (
    <>
      <section className="bg-logo-bg overflow-hidden">
        <SvgWave />
        <div className="absolute right-0 top-40 w-80 h-96 bg-[url('/src/assets/graphics/sitaram.png')] bg-contain bg-no-repeat mix-blend-overlay opacity-40 -z-10" />
        <div className="absolute left-0 bottom-0 w-full h-12 md:h-20 bg-[url('/src/assets/logo-graphics.svg')] bg-contain bg-repeat-x opacity-40 -z-20" />
        <div className="container">
          <div className="space-y-6 text-center text-custom-black">
            <h3 className="w-full md:w-3/4 mx-auto text-lg md:text-3xl leading-relaxed">
              {text.heading}
            </h3>
            <p className="w-full md:w-11/12 mx-auto text-sm md:text-lg text-justify md:text-center text-custom-black/80">
              {text.paragraph}
            </p>
          </div>

          <div className="mt-16">
            <AboutGallery images={galleryImages} />
          </div>

          <div className="flex items-center justify-center my-8">
            <LearnMore
              text="Explore"
              primaryColor="bg-alt-logo-clr"
              secondaryColor="bg-logo-clr"
              router="/about"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
