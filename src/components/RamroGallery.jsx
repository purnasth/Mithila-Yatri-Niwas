import React, { useState } from "react";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";

const RamroGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryImages = [
    {
      id: 1,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Exterior",
      category: "Exterior",
    },
    {
      id: 2,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "Dine",
      category: "Dine",
    },
    {
      id: 3,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Dine",
      category: "Dine",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "Stay",
      category: "Stay",
    },
    {
      id: 5,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Recreation",
      category: "Recreation",
    },
    {
      id: 6,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Exterior",
      category: "Exterior",
    },
    {
      id: 7,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Exterior",
      category: "Exterior",
    },
    {
      id: 8,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "Dine",
      category: "Dine",
    },
    {
      id: 9,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Dine",
      category: "Dine",
    },
    {
      id: 10,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Dine",
      category: "Dine",
    },
    {
      id: 11,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "Stay",
      category: "Stay",
    },
    {
      id: 12,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Recreation",
      category: "Recreation",
    },
    {
      id: 13,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Recreation",
      category: "Recreation",
    },
    {
      id: 14,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Exterior",
      category: "Exterior",
    },
    {
      id: 15,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Exterior",
      category: "Exterior",
    },
    {
      id: 16,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Exterior",
      category: "Exterior",
    },
    {
      id: 17,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Exterior",
      category: "Exterior",
    },
    {
      id: 18,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "Dine",
      category: "Dine",
    },
    {
      id: 19,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Dine",
      category: "Dine",
    },
    {
      id: 20,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Exterior",
      category: "Exterior",
    },
    {
      id: 21,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      category: "Stay",
      category: "Stay",
    },
    {
      id: 22,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Dine",
      category: "Dine",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

      const categories = ["All", ...new Set(galleryImages.map((image) => image.category))];


  return (
    <>
      <div className="filter-buttons flex items-center justify-center gap-8 p-8">
      {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-transparent text-blue-500"
            } px-4 py-2 rounded-md transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen, lgShare]}
        mode="lg-fade"
        elementClassNames="p-5 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&img:not(:first-child)]:mt-5 lg:[&img:not(:first-child)]:mt-8"
        options={{
          thumbnail: true,
          autoplay: true,
        }}
      >
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group gallery-item overflow-hidden"
            data-src={image.url}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full mb-5 object-cover shadow-md cursor-pointer"
            />
          </div>
        ))}
      </LightGallery>
    </>
  );
};

export default RamroGallery;