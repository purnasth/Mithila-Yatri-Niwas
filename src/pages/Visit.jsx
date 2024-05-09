import React from "react";
import { placesToVistContents, Direction } from "../constants/data";

const Visit = () => {
  return (
    <>
      <section className="bg-logo-bg responsive-banner">
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-10 mix-blend-multiply opacity-20`}
        />
        <div className="container">
          <div className="text-center my-16 max-w-5xl mx-auto">
            <h2 className="text-3xl">Places To Visit</h2>
            <p className="text-base text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              pariatur odit reiciendis quae quod, accusamus quos, consectetur
              ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt
              a deserunt voluptas alias aliquam vero expedita enim ab assumenda!
              Beatae, mollitia qui unde temporibus dolorum architecto maiores,
              ut corrupti nemo facilis quos?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 pt-8">
            {placesToVistContents.map((offer, index) => (
              <div
                key={offer.id}
                id={offer.id}
                className={`flex items-center justify-center gap-16 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <img
                    src={offer.icon}
                    alt={offer.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="flex-1 px-4 h-80 overflow-y-auto">
                  <h3 className="text-xl font-medium mb-2 sticky top-0 pt-4 pb-2 bg-logo-bg">
                    {offer.title}
                  </h3>
                  {offer.description.split("<br/>").map((paragraph, index) => (
                    <p key={index} className="text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Direction />
    </>
  );
};

export default Visit;
