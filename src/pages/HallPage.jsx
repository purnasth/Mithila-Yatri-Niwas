import React from "react";

import {
  hallContents,
  PackageSlider,
  BreadCrumb,
  RoomAmenities,
  Reservation,
  PackageList,
} from "../constants/data";

const HallPage = () => {
  const { title, description, hallCategories } = hallContents[0];

  return (
    <>
      <div className="responsive-banner">
        <PackageSlider
          contents={hallCategories}
          sizeClassName="w-full h-screen"
        />
        <BreadCrumb page="Occasions" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-base text-gray-500 mt-4">{description}</p>
        </div>

        <PackageList contents={hallCategories} />

        <RoomAmenities
          amenities={hallCategories[0].hallAmenities}
          amenitiesTitle="Hall Amenities"
        />

        <Reservation />
      </section>
    </>
  );
};

export default HallPage;
