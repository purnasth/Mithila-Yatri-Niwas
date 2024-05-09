import React from "react";
import { aboutContents } from "../../constants/data";
import {
  LightGallery,
  lgZoom,
  lgVideo,
  lgThumbnail,
  lgFullscreen,
  lgShare,
} from "../../constants/library";

const AboutGallery = () => {
  const { galleryImages } = aboutContents;

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
