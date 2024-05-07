import React, { useState } from "react";

import Banner from "../components/ui/Banner";

import room1 from "../assets/rooms/room1.webp";
import room2 from "../assets/rooms/room2.webp";
import hall1 from "../assets/halls/hall1.webp";
import exterior1 from "../assets/halls/exterior1.webp";
import exterior2 from "../assets/halls/exterior2.webp";
import exterior3 from "../assets/halls/exterior3.webp";

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
import SvgWave from "../components/ui/SvgWave";

import mithila from "../assets/mithila.webp";
import dine from "../assets/dine/dine.webp";

import { HiMiniUserGroup } from "react-icons/hi2";
import { GiBowlOfRice } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";

const DineBackup = () => {
  const [activeCategory, setActiveCategory] = useState("Bhojan Griha");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const galleryImages = [
    {
      id: 1,
      url: exterior3,
      alt: "Exterior",
      category: "Bhojan Griha",
    },
    {
      id: 2,
      url: room1,
      alt: "Room Image",
      category: "Bhojan Griha",
    },
    {
      id: 3,
      url: exterior1,
      alt: "Exterior",
      category: "Bhojan Griha",
    },
    {
      id: 4,
      url: exterior2,
      alt: "Exterior",
      category: "Bhojan Griha",
    },

    {
      id: 5,
      url: hall1,
      alt: "Event Hall",
      category: "Bhojan Griha",
    },
    {
      id: 6,
      url: room2,
      alt: "Room",
      category: "Bhojan Griha",
    },
    {
      id: 7,
      url: room2,
      alt: "Room",
      category: "Mithila Griha",
    },
  ];

  const dineCategories = [
    {
      id: 1,
      title: "Dine",
      description:
        "At Mithila Yatri Niwas we curate delicious food dishes made in state-of-art kitchen through experienced chefs, with an attempt to offer the best to all our guests. Serving Continental, Indian, Chinese and Local cuisines, the ingredients are fresh and each dish will embark you on a centuries-old traditional culinary journey. With some of the most searched for and most appreciated Indian dishes on our menu, we are popular not just with Indians looking for good vegetarian food, but locals and tourists who would like to enjoy this culinary experience. The ambience and décor of our Restaurant suits the theme and celebrates the religious and cultural setting of our vicinity.",
      image: mithila,
      router: "/dine",
      children: [
        {
          id: 1,
          title: "Bhojan Griha",
          description:
            "At Mithila Yatri Niwas we curate delicious food dishes made in state-of-art kitchen through experienced chefs, with an attempt to offer the best to all our guests. Serving Continental, Indian, Chinese and Local cuisines, the ingredients are fresh and each dish will embark you on a centuries-old traditional culinary journey.",
          image: "",
          router: "/dine/bhojan-griha",
          details: [
            {
              capacity: 65,
              cuisine: "Multi-Cuisine",
              timing: "7:00 AM - 10:30 PM",
              capacityIcon: <HiMiniUserGroup />,
              cuisineIcon: <GiBowlOfRice />,
              timingIcon: <IoMdClock />,
            },
          ],
        },
      ],
    },
  ];

  const filteredImages = galleryImages.filter(
    (image) => image.category === activeCategory
  );

  const categories = [...new Set(galleryImages.map((image) => image.category))];

  const handleCategoryClick = (category) => {
    setIsTransitioning(true);
    setActiveCategory(category);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <>
      <Banner banner={dine} page="Dine" />
      <section>
        <SvgWave />
        <div className="text-center mb-16 container max-w-5xl mx-auto">
          <h2 className="text-3xl">Fine Dine Experience</h2>
          <p className="text-base text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
        </div>

        <div className="filter-buttons flex items-center justify-center gap-8 p-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`${
                activeCategory === category
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              } font-title font-bold text-custom-black uppercase px-6 py-2 transition-linear`}
            >
              {category}
            </button>
          ))}
        </div>
        <div
          classNames={` ${
            isTransitioning ? "translate-y-1/2" : "translate-y-0"
          }`}
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`group gallery-item overflow-hidden transition-all duration-200 ease-linear ${
                isTransitioning ? "scale-0" : "scale-100"
              }`}
              data-src={image.url}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="h-full mb-5 object-cover shadow-md cursor-pointer"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DineBackup;
