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
import hall1 from "../assets/halls/hall1.webp";
import exterior1 from "../assets/halls/exterior1.webp";

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
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/400872394.jpg?k=3d5fe966b858609f19785203da96a89ae71e046b1440c5eb3f4a225eb5077705&o=&hp=1 ",
      alt: "External View of Mithila Yatri Niwas",
      category: "Exterior",
    },
    {
      id: 9,
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/448009684.jpg?k=608bc2007704b2653474c37e56bb9b3f5385607eec90691e88f4eed09cde0204&o=&hp=1",
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
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/384889349.jpg?k=7d4d9b688ad1555ef55d8cc2e31163bfb4bb9f8d71fb6b31f0f6f8410598892e&o=&hp=1",
      alt: "A Room in Mithila Yatri Niwas",
      category: "Rooms",
    },
    {
      id: 12,
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/400872398.jpg?k=8b2fd1d79723d3658edd06b335e6c1baad7196c9005ac0b53a6342e0725952ac&o=&hp=1",
      alt: "External View of Mithila Yatri Niwas",
      category: "Exterior",
    },
    {
      id: 13,
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/400673143.jpg?k=7a099a12d9a48157025b95f1ea518247a4014864cfffae120290bc3b80ed03bf&o=&hp=1",
      alt: "External View of Mithila Yatri Niwas",
      category: "Halls",
    },
    {
      id: 14,
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/400872324.jpg?k=175cf774869ef98d7282df2eedb499ccc3d794461d91e69e0b1f0fca0e1639f5&o=&hp=1",
      alt: "A Room in Mithila Yatri Niwas",
      category: "Rooms",
    },
    {
      id: 15,
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/400872318.jpg?k=7fabf9a73030c43eb25cc5d1abc81660338ad00d91a095e1c6820c52a2e91163&o=&hp=1",
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
