import React from "react";
import { aboutContents, AboutGallery, History } from "../constants/data";

const AboutPage = () => {
  const { title, heading, paragraph } = aboutContents.text;
  return (
    <>
      <section className="-mt-36 bg-logo-bg">
        <div className="text-center my-8 container space-y-6">
          <h2 className="text-3xl">{title}</h2>
          <h3 className="text-xl leading-relaxed px-20">{heading}</h3>
          <p className="text-base text-center text-custom-black/80">
            {paragraph}
          </p>
        </div>
        <AboutGallery />
      </section>
      <History />
    </>
  );
};

export default AboutPage;
