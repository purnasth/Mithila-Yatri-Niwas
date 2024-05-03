import React from "react";
import AboutGallery from "./ui/AboutGallery";
import SvgWave from "./ui/SvgWave";
import LearnMore from "./ui/LearnMore";

const About = () => {
  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg"> */}
      <section className="bg-logo-bg overflow-hidden">
        <SvgWave />
        <div className="absolute right-0 top-40 w-80 h-96 bg-[url('src/assets/graphics/sitaram.png')] bg-contain bg-no-repeat mix-blend-overlay -z-10" />
        <div className="absolute left-0 bottom-0 w-full h-20 bg-[url('src/assets/logo-graphics.svg')] bg-contain bg-repeat-x opacity-40 -z-20" />
        <div className="container">
          <div className="space-y-6 text-center text-custom-black">
            <h3 className="w-3/4 mx-auto text-3xl leading-relaxed">
              Mithila Yatri Niwas a luxurious hotel property in Janakpur is set
              at just 10 min walking distance from the famous Janakai Temple
              along the banks of Dashrath Lake.
            </h3>
            <p className="w-11/12 mx-auto text-lg text-center text-custom-black/80">
              Our Hotel is conveniently located, which allows a hassle free easy
              access by road, domestic airport and railway connectivity to
              Indian border. It is the only Hotel in Janakpur well equipped with
              ultramodern Amenities, Meetings and Events Venue, Spacious Parking
              along with a well-deserved peaceful & spiritual ambiance.
              Experience and immerse in Nepals religious, cultural and
              historical heritage, with all the modern comforts and amenities
              while avoiding the hustle and bustle of Janakpur. The in-house
              restaurant located at the ground floor of the hotel, offers finest
              Local, Indian and Continental cuisines to enhance your taste buds.
              Book your stay with confidence as we assure an enhanced spiritual
              experience with a most conformable and memorable stay at the most
              beautiful property in Janakpur.
            </p>
          </div>

          <div className="mt-16">
            <AboutGallery />
          </div>

          <div className="flex items-center justify-center p-0">
            <LearnMore
              text="Explore"
              primaryColor="bg-alt-logo-clr"
              secondaryColor="bg-logo-clr"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
