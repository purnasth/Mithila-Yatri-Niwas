import React, { useState } from "react";
import { PackageSlider, PackageContent, Button } from "../constants/data";

const PackageList = ({ contents }) => {
  const [activeRoom, setActiveRoom] = useState(contents[0].title);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRoomClick = (roomTitle) => {
    setIsTransitioning(true);
    setActiveRoom(roomTitle);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };
  return (
    <>
      <div className="wrapper">
        <div className="sticky top-12 py-2 backdrop-blur-md filter-buttons flex items-center justify-center md:gap-8 mb-12 md:mb-24 z-50">
          {contents.map((room) => (
            <button
              className={`font-title px-6 py-2 transition-linear text-xs md:text-base uppercase tracking-wide text-custom-black hover:bg-custom-black/10 rounded-full ${
                activeRoom === room.title
                  ? "opacity-100 scale-100 font-bold"
                  : "opacity-50 scale-90 hover:opacity-80 font-semibold"
              } ${isTransitioning ? "transition-linear" : ""}`}
              key={room.id}
              onClick={() => handleRoomClick(room.title)}
            >
              {room.title}
            </button>
          ))}
        </div>
        <div
          className={`container transition-linear ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="grid grid-cols-5 gap-16">
            <div className="col-span-5 lg:col-span-2 order-2 lg:order-1">
              <PackageContent
                room={contents.find((room) => room.title === activeRoom)}
              />
            </div>
            <div className="col-span-5 lg:col-span-3 order-1 lg:order-2">
              <div className="sticky top-32 mx-3">
                <PackageSlider contents={contents} sizeClassName="size-full" />

                <div className="mt-12 mx-auto flex items-center justify-center">
                  <Button
                    title="Booking"
                    router={
                      contents.find((room) => room.title === activeRoom).booking
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageList;
