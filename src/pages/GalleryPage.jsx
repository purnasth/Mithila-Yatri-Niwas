import React, { useState } from "react";
import Banner from "../components/ui/Banner";
import mithila from "../assets/mithila.webp";
import SvgWave from "../components/ui/SvgWave";

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

import mithilaNight from "../assets/mithila_night.webp";
import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import room3 from "../assets/rooms/room3.webp";
import room4 from "../assets/rooms/room4.webp";
import room5 from "../assets/rooms/room5.webp";
import room6 from "../assets/rooms/room6.webp";

import hall1 from "../assets/halls/hall1.webp";
import hall2 from "../assets/halls/hall2.webp";

import lobby1 from "../assets/halls/lobby1.webp";

import exterior1 from "../assets/halls/exterior1.webp";
import dine1 from "../assets/dine/dine.webp";

import mithila2 from "../assets/mithila2.webp";
import mithila4 from "../assets/mithila4.webp";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      id: 1,
      url: mithila,
      alt: "External View of Mithila Yatri Niwas",
      category: "Exterior",
    },
    {
      id: 2,
      url: room1,
      alt: "A Room in Mithila Yatri Niwas",
      category: "Rooms",
    },
    {
      id: 3,
      url: mithilaNight,
      alt: "External View of Mithila Yatri Niwas",
      category: "Exterior",
    },
    {
      id: 4,
      url: room2,
      alt: "A Room in Mithila Yatri Niwas",
      category: "Rooms",
    },
    {
      id: 5,
      url: room3,
      alt: "A Room in Mithila Yatri Niwas",
      category: "Rooms",
    },
    {
      id: 6,
      url: hall1,
      alt: "A Hall in Mithila Yatri Niwas",
      category: "Halls",
    },
    {
      id: 7,
      url: lobby1,
      alt: "Lobby of Mithila Yatri Niwas",
      category: "Halls",
    },
    {
      id: 8,
      url: mithila2,
      alt: "External View of Mithila Yatri Niwas",
      category: "Exterior",
    },
    {
      id: 9,
      url: dine1,
      alt: "External View of Mithila Yatri Niwas",
      category: "Halls",
    },
    {
      id: 10,
      url: exterior1,
      alt: "External View of Mithila Yatri Niwas",
      category: "Halls",
    },
    {
      id: 11,
      url: room4,
      alt: "A Room in Mithila Yatri Niwas",
      category: "Rooms",
    },
    {
      id: 12,
      url: mithila4,
      alt: "External View of Mithila Yatri Niwas",
      category: "Exterior",
    },
    {
      id: 13,
      url: hall2,
      alt: "External View of Mithila Yatri Niwas",
      category: "Halls",
    },
    {
      id: 14,
      url: room5,
      alt: "A Room in Mithila Yatri Niwas",
      category: "Rooms",
    },
    {
      id: 15,
      url: room6,
      alt: "A Room in Mithila Yatri Niwas",
      category: "Rooms",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const categories = ["All", ...new Set(images.map((image) => image.category))];

  const handleCategoryClick = (category) => {
    setIsTransitioning(true);
    setActiveCategory(category);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <>
      <Banner banner={mithila} page="Gallery" />

      <section className="bg-logo-bg">
        <SvgWave />
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-3xl">Glimpse of Memory</h2>
          <p className="text-base text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
        </div>

        <div className="p-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`${
                activeCategory === category
                  ? // ? "bg-blue-200 text-blue-600"
                    // : "bg-transparent text-gray-700"
                    "text-custom-black"
                  : "text-custom-black/50"
              } font-title font-bold text-base py-2 px-4 rounded-md uppercase transition-linear hover:text-custom-black hover:bg-custom-black/5`}
            >
              {category}
            </button>
          ))}
        </div>

        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen, lgShare]}
          mode="lg-fade"
          elementClassNames={`w-full grid grid-cols-2 lg:grid-cols-4 gap-4 transition-linear ${
            isTransitioning ? "translate-y-1/2" : "translate-y-0"
          }`}
          options={{
            thumbnail: true,
            autoplay: true,
          }}
        >
          {filteredImages.map((image) => (
            <a
              key={image.id}
              className={`group gallery-item overflow-hidden transition-all duration-200 ease-linear ${
                isTransitioning ? "scale-0" : "scale-100"
              }`}
              data-src={image.url}
            >
              <img
                className="w-full h-72 object-cover transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer shadow-lg"
                src={image.url}
                alt={image.alt}
              />
            </a>
          ))}
        </LightGallery>
      </section>
    </>
  );
};

export default GalleryPage;
