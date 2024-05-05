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

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      id: 1,
      url: "http://purnadrive.rf.gd/uploads/img1.jpg",
      alt: "",
      category: "Mockup",
    },
    {
      id: 2,
      url: "http://purnadrive.rf.gd/uploads/img2.jpg",
      alt: "",
      category: "Android",
    },
    {
      id: 3,
      url: "http://purnadrive.rf.gd/uploads/img3.jpg",
      alt: "",
      category: "Mockup",
    },
    {
      id: 4,
      url: "http://purnadrive.rf.gd/uploads/img4.jpg",
      alt: "",
      category: "Android",
    },
    {
      id: 5,
      url: "http://purnadrive.rf.gd/uploads/img5.jpg",
      alt: "",
      category: "Android",
    },
    {
      id: 6,
      url: "http://purnadrive.rf.gd/uploads/img6.jpg",
      alt: "",
      category: "Web",
    },
    {
      id: 7,
      url: "http://purnadrive.rf.gd/uploads/img7.jpg",
      alt: "",
      category: "Mockup",
    },
    {
      id: 8,
      url: "http://purnadrive.rf.gd/uploads/img8.jpg",
      alt: "",
      category: "Design",
    },
    {
      id: 9,
      url: "http://purnadrive.rf.gd/uploads/img9.jpg",
      alt: "",
      category: "Web",
    },
    {
      id: 10,
      url: "http://purnadrive.rf.gd/uploads/img10.jpg",
      alt: "",
      category: "Web",
    },
    {
      id: 11,
      url: "http://purnadrive.rf.gd/uploads/img11.jpg",
      alt: "",
      category: "Android",
    },
    {
      id: 12,
      url: "http://purnadrive.rf.gd/uploads/img12.jpg",
      alt: "",
      category: "Mockup",
    },
    {
      id: 13,
      url: "http://purnadrive.rf.gd/uploads/img13.jpg",
      alt: "",
      category: "Design",
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
                className="w-full h-72 object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer"
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
