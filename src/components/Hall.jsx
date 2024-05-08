import React from "react";
import { hallContents, Button, SvgWave, RoomSlider } from "../constants/data";

const Hall = () => {
  const { title: occasionTitle, description: occasionDescription } =
    hallContents[0];

  const { hallAmenities } = hallContents[0].hallCategories[0];

  return (
    <>
      <section className="bg-alt-bg px-10 overflow-hidden">
        <SvgWave />
        <div className="absolute right-0 top-64 w-80 h-96 bg-[url('/src/assets/graphics/ram.svg')] bg-contain bg-no-repeat mix-blend-overlay -z-10 opacity-70 -rotate-90" />

        <div className="containe r">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="home-accommodation col-span-2 md:col-span-2">
              <RoomSlider contents={hallContents[0].hallCategories} />
            </div>
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h2 className="text-3xl text-primary">{occasionTitle}</h2>
              <p className="text-base text-gray-500 mt-4">
                {occasionDescription}
              </p>
              <h5 className="text-3xl mt-8 mb-6">Amenities</h5>
              <div className="flex items-start gap-20 h-60 overflow-y-auto ">
                <ul className="flex items-start justify-center flex-col gap-4">
                  {hallAmenities.map(({ icon: Icon, title }) => (
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
                <Button title="Reserve" router="/enquiry-form#enquiry-form" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hall;
