import React from "react";
import mithila from "../assets/mithila.webp";
import SvgWave from "./ui/SvgWave";

import { HiMiniUserGroup } from "react-icons/hi2";
import { GiBowlOfRice } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import Button from "./ui/Button";

const Dine = () => {
  const dineCategories = [
    {
      id: 1,
      title: "Dine",
      description:
        "At Mithila Yatri Niwas we curate delicious food dishes made in state-of-art kitchen through experienced chefs, with an attempt to offer the best to all our guests. Serving Continental, Indian, Chinese and Local cuisines, the ingredients are fresh and each dish will embark you on a centuries-old traditional culinary journey. With some of the most searched for and most appreciated Indian dishes on our menu, we are popular not just with Indians looking for good vegetarian food, but locals and tourists who would like to enjoy this culinary experience. The ambience and décor of our Restaurant suits the theme and celebrates the religious and cultural setting of our vicinity.",
      image: mithila,
      router: "/dine",
      children: [
        {
          id: 1,
          title: "Bhojan Griha",
          description:
            "At Mithila Yatri Niwas we curate delicious food dishes made in state-of-art kitchen through experienced chefs, with an attempt to offer the best to all our guests. Serving Continental, Indian, Chinese and Local cuisines, the ingredients are fresh and each dish will embark you on a centuries-old traditional culinary journey.",
          image: "",
          router: "/dine/bhojan-griha",
          details: [
            {
              capacity: 65,
              cuisine: "Multi-Cuisine",
              timing: "7:00 AM - 10:30 PM",
              capacityIcon: <HiMiniUserGroup />,
              cuisineIcon: <GiBowlOfRice />,
              timingIcon: <IoMdClock />,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {/* <section className="bg-logo-bg px-10">
        <SvgWave/>
        <div className="containe r">
          <div className="">
            <div className="text-center mb-12 container max-w-6xl mx-auto">
              <h2 className="text-3xl text-primary">Dine</h2>
              <p className="text-base text-gray-500 mt-4">
                At Mithila Yatri Niwas we curate delicious food dishes made in
                state-of-art kitchen through experienced chefs, with an attempt
                to offer the best to all our guests. Serving Continental,
                Indian, Chinese and Local cuisines, the ingredients are fresh
                and each dish will embark you on a centuries-old traditional
                culinary journey. With some of the most searched for and most
                appreciated Indian dishes on our menu, we are popular not just
                with Indians looking for good vegetarian food, but locals and
                tourists who would like to enjoy this culinary experience. The
                ambience and décor of our Restaurant suits the theme and
                celebrates the religious and cultural setting of our vicinity.
              </p>
            </div>
            <div className="">
              <DineGallery contents={foodsCategories} />
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-logo-bg px-10 pb-8">
        <SvgWave />
        <div>
          {dineCategories.map((dine) => (
            <div
              className="text-center mb-12 container max-w-6xl mx-auto"
              key={dine.id}
            >
              <h2 className="text-3xl text-custom-black">{dine.title}</h2>
              <p className="text-base text-gray-600 mt-4">{dine.description}</p>
            </div>
          ))}
          <div className="container mt-28">
            {dineCategories[0].children.map((child) => (
              <div
                key={child.id}
                // className="flex items-center justify-center gap-0"
                className="grid grid-cols-2 gap-0 translate-x-8"
              >
                <img
                  src={mithila}
                  alt="Mithila Yatri Niwas"
                  // className="w-[42rem] h-[32rem] object-cover rounded-xl shadow-md"
                  className="w-full h-[28rem] object-cover rounded-xl shadow-md scale-110"
                />
                {/* <div className="flex flex-col bg-custom-white p-12 rounded-xl shadow-md -translate-x-8"> */}
                <div className="my-auto h-auto bg-custom-white p-12 rounded-xl shadow-md -translate-x-8">
                  <h3 className="text-3xl text-custom-black">{child.title}</h3>
                  <p className="text-base text-gray-600 mt-4 text-justify">
                    {child.description}
                  </p>
                  <ul>
                    {child.details.map((detail, index) => (
                      <li
                        key={`${detail.type}-${index}`}
                        className="flex items-center justify-between mt-8"
                      >
                        {[
                          {
                            icon: detail.capacityIcon,
                            text: `${detail.capacity} pax`,
                          },
                          { icon: detail.cuisineIcon, text: detail.cuisine },
                          { icon: detail.timingIcon, text: detail.timing },
                        ].map((item, innerIndex) => (
                          <span
                            key={`${detail.type}-${innerIndex}`}
                            className="flex items-center justify-center gap-2"
                          >
                            {item.icon}
                            {item.text}
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>

                  <hr className="border-custom-black/20 mt-4" />

                  <div className="mt-4 translate-y-2 flex items-center justify-between">
                    <Button title="Reserve" router="#" />

                    <a
                      href=""
                      className="flex items-center justify-center gap-2 group"
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
