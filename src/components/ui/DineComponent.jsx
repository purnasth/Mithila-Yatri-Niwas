import React from "react";
import Button from "./Button";

const DineComponent = ({ dineCategories }) => {
  return (
    <>
      <section className="">
        <div className="container bg-logo-bg p-16">
          {dineCategories.map((category) => (
            <div key={category.id} className="grid grid-cols-5 gap-16">
              <div className="col-span-2 text-center md:text-left">
                {category.children.map((child) => (
                  <div className="" key={child.id}>
                    <h3 className="text-3xl text-custom-black">
                      {child.title}
                    </h3>
                    <p className="text-base text-gray-600 mt-4 text-justify">
                      {child.description}
                    </p>
                    <h4 className="text-3xl text-custom-black mt-8">
                      Informations
                    </h4>
                    <ul>
                      {child.details.map((detail, index) => (
                        <li
                          key={`${detail.type}-${index}`}
                          className="flex items-left justify-left mt-8 flex-col gap-2"
                        >
                          {[
                            {
                              icon: detail.capacityIcon,
                              text: `${detail.capacity} pax`,
                            },
                            {
                              icon: detail.cuisineIcon,
                              text: detail.cuisine,
                            },
                            { icon: detail.timingIcon, text: detail.timing },
                          ].map((item, innerIndex) => (
                            <span
                              key={`${detail.type}-${innerIndex}`}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              {item.icon}
                              {item.text}
                            </span>
                          ))}
                        </li>
                      ))}
                    </ul>

                    <hr className="border-custom-black/20 mt-4" />

                    <div className="mt-12">
                      <Button title="Reserve" router="#" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-3 h-[70vh]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DineComponent;
