import React, { useState, useEffect } from "react";

const NearbyMapComponent = () => {
  const nearbyLocations = [
    {
      name: "Janaki Temple",
      distance: "400m",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1781.70616029953!2d85.92244138865854!3d26.73121534418898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec40069de3d507%3A0x5e9842f10a951d7f!2sJanaki%20Temple%2C%20Janaki%20chok%2C%20Janakpur!3m2!1d26.7303858!2d85.9255589!5e0!3m2!1sen!2snp!4v1714641820034!5m2!1sen!2snp",
    },
    {
      name: "Ganga Sagar",
      distance: "1km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3563.4389448151937!2d85.92354142528828!3d26.730365326756306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec4007f3532d19%3A0x42a8839df3243056!2sGanga%20Sagar%2C%20Janakpur!3m2!1d26.728684299999998!2d85.9301352!5e0!3m2!1sen!2snp!4v1714642006000!5m2!1sen!2snp",
    },
    {
      name: "Railway Station",
      distance: "1.9km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7126.805001126306!2d85.92439654246047!3d26.731528857022216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec3f3b04567a43%3A0x9eac0f6f96daa44c!2sJanakpurdham%20Railway%20Station%2C%20Janakpur!3m2!1d26.733862799999997!2d85.93695559999999!5e0!3m2!1sen!2snp!4v1714641955309!5m2!1sen!2snp",
    },
    {
      name: "Janakpur Airport",
      distance: "4.4km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14254.776502965655!2d85.91469190244248!3d26.722217028176132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec407231231aa1%3A0xab58893c40e1b844!2sJanakpur%20Airport%2C%20Janakpur!3m2!1d26.711423!2d85.9238786!5e0!3m2!1sen!2snp!4v1714642074225!5m2!1sen!2snp",
    },
    {
      name: "Ram Mandir",
      distance: "900m",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3563.453335365392!2d85.92191032521768!3d26.72990587675653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec6aa7178b2099%3A0x409b43633a40308c!2sRam%20Janki%20Mandir%2C%20Janakpur%2045600!3m2!1d26.728321299999998!2d85.9270694!5e0!3m2!1sen!2snp!4v1714909635965!5m2!1sen!2snp",
    },
    {
      name: "Ram Sita Vivah Mandap",
      distance: "350m",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1781.7041110251569!2d85.92215268864092!3d26.731346194188955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec4004272d21b3%3A0x9d53eac3f112f3cb!2sShree%20Ram%20Janaki%20Biwah%20Mandap%2C%20PWJF%2B9XQ%2C%20Janakpur%2045600!3m2!1d26.7308986!2d85.9249777!5e0!3m2!1sen!2snp!4v1714910137389!5m2!1sen!2snp",
    },
    {
      name: "Jaleshwar",
      distance: "2.5km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7126.93387405459!2d85.926136792178!3d26.729471607027143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec3fe9d84d90b5%3A0xa9a97ee9216804d1!2sJaleshwar%2C%20Janakpur!3m2!1d26.727146599999998!2d85.9406745!5e0!3m2!1sen!2snp!4v1714910233145!5m2!1sen!2snp",
    },
    {
      name: "Ganga Sagar",
      distance: "1km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3563.4389448151937!2d85.92354142528828!3d26.730365326756306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec4007f3532d19%3A0x42a8839df3243056!2sGanga%20Sagar%2C%20Janakpur!3m2!1d26.728684299999998!2d85.9301352!5e0!3m2!1sen!2snp!4v1714642006000!5m2!1sen!2snp",
    },
    {
      name: "Dhanusha Dham",
      distance: "3.7km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28502.863123107087!2d85.90349842046005!3d26.748910661658073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec6bae3cea9a5f%3A0x5797e7156d6c5ad8!2sDhanusha%20Dham%20To%20Way%2C%20Janakpur!3m2!1d26.7627621!2d85.9293596!5e0!3m2!1sen!2snp!4v1714910403541!5m2!1sen!2snp",
    },
    {
      name: "Ratna Sagar Temple",
      distance: "2.3km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7126.454603238048!2d85.91324694217909!3d26.737121657008814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39ec414cff7d8891%3A0xb626d6ab90442f61!2sMithila%20Yatri%20Niwas%2C%20Janakpur!3m2!1d26.732046399999998!2d85.9219169!4m5!1s0x39ec6aa9c2e7013f%3A0x991420bd3f1e596b!2sRatna%20Sagar%20Temple%2C%20Janakpur!3m2!1d26.740272299999997!2d85.9161153!5e0!3m2!1sen!2snp!4v1714910523542!5m2!1sen!2snp",
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
                className="font-body font-bold text-logo-clr"
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
