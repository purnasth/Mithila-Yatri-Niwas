import React from "react";
import room1 from "../../assets/rooms/room1.webp";
import room2 from "../../assets/rooms/room2.webp";
import hall1 from "../../assets/halls/hall1.webp";
import exterior1 from "../../assets/halls/exterior1.webp";
import exterior2 from "../../assets/halls/exterior2.webp";
import exterior3 from "../../assets/halls/exterior3.webp";

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

const AboutGallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: exterior3,
      alt: "Exterior",
    },
    {
      id: 2,
      url: room1,
      alt: "Room Image",
    },
    {
      id: 3,
      url: exterior1,
      alt: "Exterior",
    },
    {
      id: 4,
      url: exterior2,
      alt: "",
    },

    {
      id: 5,
      url: hall1,
      alt: "Event Hall",
    },
    {
      id: 6,
      url: room2,
      alt: "Room",
    },
  ];

  return (
    <>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen, lgShare]}
        mode="lg-fade"
        elementClassNames="p-5 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&img:not(:first-child)]:mt-5 lg:[&img:not(:first-child)]:mt-8"
        options={{
          thumbnail: true,
          autoplay: true,
        }}
      >
        {galleryImages.map((image) => (
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

export default AboutGallery;
