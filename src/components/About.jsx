import React from "react";
import AboutGallery from "./ui/AboutGallery";
import janakpur from "../assets/janakpur.webp";

const About = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-logo-bg to-alt-bg">
        <div className="container">
          <div class="space-y-6 text-center text-custom-black">
            <h3 class="w-3/4 mx-auto text-3xl leading-relaxed">
              Mithila Yatri Niwas a luxurious hotel property in Janakpur is set
              at just 10 min walking distance from the famous Janakai Temple
              along the banks of Dashrath Lake.
            </h3>
            <p class="w-11/12 mx-auto text-lg text-center text-custom-black/80">
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
            <div className="p-5 pb-0">
              <img
                src={janakpur}
                alt="Janaki Temple"
                className="w-full h-[60vh] object-cover shadow-md"
              />
            </div>
            <AboutGallery />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;