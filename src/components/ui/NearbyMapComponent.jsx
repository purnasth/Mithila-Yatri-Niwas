import React, { useState, useEffect } from "react";
import { nearbyLocations } from "../../constants/data";
import { Link } from "react-router-dom";

const NearbyMapComponent = () => {
  const [isMapOpen, setIsMapOpen] = useState(true);
  const [mapUrl, setMapUrl] = useState(nearbyLocations[0]?.map || "");
  const [selectedLocation, setSelectedLocation] = useState(
    nearbyLocations[0] || null
  );

  const openMapModal = (url, location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
  };

  const closeMapModal = () => {
    setIsMapOpen(false);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    openMapModal(location.map, location);
  };

  useEffect(() => {
    if (selectedLocation) {
      setMapUrl(selectedLocation.map);
    }
  }, [selectedLocation]);

  const totalLocations = nearbyLocations.length;
  const halfLocations = Math.ceil(totalLocations / 2);

  const leftLocations = nearbyLocations.slice(0, halfLocations);
  const rightLocations = nearbyLocations.slice(halfLocations);

  return (
    <div className="flex justify-between items-center flex-col lg:flex-row mt-20">
      <div className="w-full lg:w-1/5 order-1">
        <ul>
          {leftLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer text-left text-sm lg:text-base "
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <button
                className="font-body font-bold text-logo-clr"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
              >
                Get Direction
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-4/5 my-8 lg:m-0 lg:p-8 order-3 lg:order-2">
        {/* Embedded Google Map */}
        {isMapOpen && (
          <div className="relative bg-ivory w-full rounded-lg">
            {/* <span
                  className="absolute top-0 right-0 m-4 text-2xl cursor-pointer"
                  onClick={closeMapModal}
                >
                  &times;
                </span> */}
            <iframe
              title="Map"
              src={mapUrl}
              className="w-full h-64 md:h-96 lg:h-[60vh] rounded-lg shadow-lg"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
      <div className="w-full lg:w-1/5 order-2 lg:order-3">
        <ul>
          {rightLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer lg:text-right text-sm lg:text-base"
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <button
                className="font-body font-bold text-logo-clr"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
              >
                Get Direction
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NearbyMapComponent;
