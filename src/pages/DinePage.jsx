import React from "react";
import {
  withDataFetching,
  PackageSlider,
  BreadCrumb,
  RoomAmenities,
  Reservation,
  PackageList,
} from "../constants/data";
import { Link } from "react-router-dom";
import Meta from "../utils/Meta";

const DinePage = ({ data: dineContents }) => {
  const {
    title,
    description,
    menuPdf,
    dineCategories,
    meta_keywords,
    meta_description,
  } = dineContents[0];
  const { menu } = dineCategories[0];
  const [activeDine, setActiveDine] = React.useState(dineCategories[0]);

  const handleDineClick = (dineId) => {
    const selectedDine = dineCategories.find((dine) => dine.id === dineId);
    setActiveDine(selectedDine);
  };

  return (
    <>
      <Meta
        title={`${title} - Mithila Yatri Niwas`}
        keywords={meta_keywords}
        description={meta_description}
      />
      <div className="responsive-banner relative overflow-hidden">
        <PackageSlider
          contents={dineCategories}
          sizeClassName="w-full h-full lg:h-screen"
        />
        <BreadCrumb page="Dine" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            {description}
          </p>
          <div className="mt-8 w-full">
            <a
              href={menu}
              className="font-title text-custom-white bg-alt-logo-clr hover:bg-logo-clr px-6 py-2 rounded-full transition-linear group"
              target="_blank"
              download
            >
              View Menu
            </a>
          </div>
        </div>

        <PackageList
          contents={dineCategories}
          onItemClick={handleDineClick}
          type="dine"
        />

        <RoomAmenities
          amenities={activeDine.dineAmenities}
          amenitiesTitle="Dine Amenities"
        />

        <Reservation />
      </section>
    </>
  );
};

const transformDineContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return dineContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_dine.php",
  transformDineContents
)(DinePage);
