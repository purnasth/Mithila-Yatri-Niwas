import React from "react";

import {
  accommodationContents,
  Button,
  SvgWave,
  RoomSlider,
} from "../constants/data";

const Accommodation = () => {
  const { title: accommodationTitle, description: accommodationDescription } =
    accommodationContents[0];

  const { roomAmenities } = accommodationContents[0].roomsCategories[0];
  return (
    <>
      <section className="bg-alt-bg px-10 z-10">
        <SvgWave />
        <div
          // className={`absolute inset-0 h-full w-full bg-[url('https://img.freepik.com/premium-vector/simple-ornate-background-with-elegant-motifs_1442-34895.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714262400&semt=ais')] bg-repeat z-0 mix-blend-overlay opacity-35`}
          // className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/hmm.png')] bg-repeat z-0 mix-blend-overlay opacity-35`}
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-10 mix-blend-multiply opacity-20`}
        />
        {/* <section className="bg-gradient-to-t from-logo-bg to-alt-bg px-10"> */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl">{accommodationTitle}</h2>
              <p className="text-base text-gray-500 mt-4">
                {accommodationDescription}
              </p>

              <h5 className="text-3xl mt-8 mb-6">Amenities</h5>
              <div className="flex items-start gap-20 h-60 overflow-y-auto ">
                <ul className="flex items-start justify-center flex-col gap-4">
                  {roomAmenities.map(({ icon: Icon, title }) => (
                    <li
                      key={title}
                      className="flex items-center gap-4 text-gray-500 capitalize"
                    >
                      {typeof Icon === "function" ? (
                        <Icon className="text-xl mr-2" />
                      ) : (
                        <img
                          src={Icon}
                          alt={title}
                          className="w-8 h-8 mr-2 p-1"
                        />
                      )}
                      {title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-8">
                <Button
                  title="Booking"
                  router="https://www.mithilayatriniwas.com/result.php?hotel_code=gBRaLW"
                />
              </div>
              {/* <LearnMore
                text="Explore"
                primaryColor="bg-logo-clr"
                secondaryColor="bg-alt-logo-clr"
              /> */}
            </div>
            <div className="home-accommodation col-span-2 md:col-span-2">
              <RoomSlider contents={accommodationContents[0].roomsCategories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;
