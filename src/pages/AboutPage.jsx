import React from "react";
import About from "../components/About";
import History from "../components/History";
import AboutGallery from "../components/ui/AboutGallery";

const AboutPage = () => {
  return (
    <>
      <section className="-mt-36 bg-logo-bg">
        <div className="text-center my-8 container space-y-6">
          <h2 className="text-3xl">About Mithila Yatri Niwas</h2>
          <h3 className="text-xl leading-relaxed px-20">
            Mithila Yatri Niwas a luxurious hotel property in Janakpur is set at
            just 10 min walking distance from the famous Janakai Temple along
            the banks of Dashrath Lake.
          </h3>
          <p className="text-base text-center text-custom-black/80">
            Our Hotel is conveniently located, which allows a hassle free easy
            access by road, domestic airport and railway connectivity to Indian
            border. It is the only Hotel in Janakpur well equipped with
            ultramodern Amenities, Meetings and Events Venue, Spacious Parking
            along with a well-deserved peaceful & spiritual ambiance. Experience
            and immerse in Nepals religious, cultural and historical heritage,
            with all the modern comforts and amenities while avoiding the hustle
            and bustle of Janakpur. The in-house restaurant located at the
            ground floor of the hotel, offers finest Local, Indian and
            Continental cuisines to enhance your taste buds. Book your stay with
            confidence as we assure an enhanced spiritual experience with a most
            conformable and memorable stay at the most beautiful property in
            Janakpur.
          </p>
        </div>
        <AboutGallery />
      </section>
      <History />
    </>
  );
};

export default AboutPage;
