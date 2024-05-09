import React from "react";

import {
  dineContents,
  mithila,
  SvgWave,
  Button,
  CgArrowLongRight,
} from "../constants/data";

const Dine = () => {
  return (
    <>
      <section className="bg-logo-bg md:px-10 pb-8">
        <SvgWave />
        <div>
          {dineContents.map((dine) => (
            <div
              className="text-center mb-12 container max-w-6xl mx-auto"
              key={dine.title}
            >
              <h2 className="text-3xl text-custom-black">{dine.title}</h2>
              <p className="text-base text-gray-600 mt-4">{dine.description}</p>
            </div>
          ))}
          <div className="container mt-16 lg:mt-28">
            {dineContents[0].dineCategories.map((child) => (
              <div
                key={child.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:translate-x-8 lg:px-8"
              >
                <img
                  src={mithila}
                  alt="Mithila Yatri Niwas"
                  className="w-full h-64 md:h-96 lg:h-[28rem] object-cover rounded-xl shadow-md lg:scale-110"
                />
                <div className="scale-90 lg:scale-100 my-auto h-auto bg-custom-white px-4 py-8 md:p-10 lg:p-12 rounded-xl shadow-md -translate-y-8 lg:translate-y-0 lg:-translate-x-8">
                  <h3 className="text-2xl md:text-3xl text-custom-black">
                    {child.title}
                  </h3>
                  <p className="text-sm md:text-sm lg:text-base text-gray-600 mt-4 text-justify">
                    {child.description}
                  </p>
                  <ul>
                    {child.informations.map((infoCategory, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mt-6 py-2"
                      >
                        {Object.entries(infoCategory.data).map(
                          ([infoKey, infoValue]) => (
                            <span
                              className="flex items-center md:gap-1 text-xs md:text-base"
                              key={infoKey}
                            >
                              {typeof infoValue.icon === "function" ? (
                                <infoValue.icon className="text-sm md:text-xl mr-2" />
                              ) : (
                                <img
                                  src={infoValue.icon}
                                  alt={infoKey}
                                  className="w-8 h-8 mr-2 p-1"
                                />
                              )}
                              {/* <span className="font-bold">{infoKey}: </span> */}
                              {infoValue.value}
                            </span>
                          )
                        )}
                      </li>
                    ))}
                  </ul>

                  <hr className="border-custom-black/20 mt-4" />

                  <div className="mt-4 translate-y-2 flex items-center justify-between">
                    <Button
                      title="Reserve"
                      router="/enquiry-form#enquiry-form"
                    />

                    <a
                      href="/dine"
                      className="text-sm md:text-base flex items-center justify-center gap-2 group"
                    >
                      Explore More
                      <CgArrowLongRight className="text-custom-black text-2xl group-hover:text-xl transition-linear" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dine;
