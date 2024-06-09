import React from "react";

import {
  accommodationContents,
  PackageSlider,
  BreadCrumb,
  RoomAmenities,
  Reservation,
  PackageList,
} from "../constants/data";

const AccommodationPage = () => {
  const { title, description, roomsCategories } = accommodationContents[0];
  const [activeRoom, setActiveRoom] = React.useState(roomsCategories[0]);

  const handleRoomClick = (roomId) => {
    const selectedRoom = roomsCategories.find((room) => room.id === roomId);
    setActiveRoom(selectedRoom);
  };

  return (
    <>
      <div className="responsive-banner relative overflow-hidden">
        <PackageSlider
          contents={roomsCategories}
          sizeClassName="w-full h-full lg:h-screen"
        />
        <BreadCrumb page="Accommodation" />
      </div>

      <section className="bg-custom-white">
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            {description}
          </p>
        </div>

        <PackageList
          contents={roomsCategories}
          onItemClick={handleRoomClick}
          type="room"
        />

        <RoomAmenities
          amenities={activeRoom.roomAmenities}
          amenitiesTitle="Room Amenities"
        />

        <Reservation />
      </section>
    </>
  );
};

export default AccommodationPage;
