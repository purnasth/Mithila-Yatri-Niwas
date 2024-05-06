import React from "react";

const RoomAmenities = ({ amenities, amenitiesTitle }) => {
  return (
    <div className="container py-12 my-32 p-0">
      <h4 className="text-3xl text-center my-8">{amenitiesTitle}</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-24">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center flex-col gap-4 p-4">
            <span className="text-2xl text-alt-logo-clr">{amenity.icon}</span>
            <p>{amenity.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomAmenities;
