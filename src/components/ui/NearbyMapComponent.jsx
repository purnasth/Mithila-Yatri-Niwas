import React, { useState, useEffect } from "react";

const NearbyMapComponent = () => {
  const nearbyLocations = [
    {
      name: "Airport",
      distance: "1.8km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Gadhi Mai",
      distance: "5.6km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d113698.23358256779!2d84.89524728553098!3d27.059544645031096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eca934d6b2d40b%3A0xbd0542d8b9c9c42d!2sGadhimai%20Temple%2C%20Mahagadhimai%2044405!3m2!1d26.993407299999998!2d85.047285!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325470591!5m2!1sen!2snp",
    },
    {
      name: "Parsa National Park",
      distance: "10km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Raxaul India Border",
      distance: "23km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Churiya Mai",
      distance: "25km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Shahid Smarak",
      distance: "40km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Bharat Tal",
      distance: "60km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Janaki Mandir",
      distance: "139km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
  ];

  const [isMapOpen, setIsMapOpen] = useState(true); // Initially true to show the map
  const [mapUrl, setMapUrl] = useState(nearbyLocations[0]?.map || ""); // Default to the map of the first location
  const [selectedLocation, setSelectedLocation] = useState(
    nearbyLocations[0] || null
  ); // Default to the first location

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
    // Update map URL when selected location changes
    if (selectedLocation) {
      setMapUrl(selectedLocation.map);
    }
  }, [selectedLocation]);

  const totalLocations = nearbyLocations.length;
  const halfLocations = Math.ceil(totalLocations / 2);

  const leftLocations = nearbyLocations.slice(0, halfLocations);
  const rightLocations = nearbyLocations.slice(halfLocations);

  return (
    <div className="flex justify-between items-center mt-20">
      <div className="w-1/5">
        <ul>
          {leftLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer text-left"
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <a
                href="#"
                className="text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
              >
                Get Direction
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-4/5 p-8">
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
              className="w-full h-[60vh] rounded-lg shadow-lg"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
      <div className="w-1/5">
        <ul>
          {rightLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer text-right"
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <a
                href="#"
                className="text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
              >
                Get Direction
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NearbyMapComponent;
