import React from "react";
import { withDataFetching, AboutGallery, History } from "../constants/data";

const AboutPage = ({ data: aboutContents }) => {
  const { title, heading, paragraph } = aboutContents.text;
  return (
    <>
      <section className="responsive-banner bg-logo-bg">
        <div className="text-center md:my-8 container space-y-6 mb-16">
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          <h3 className="text-base md:text-xl leading-relaxed md:px-20">
            {heading}
          </h3>
          <p className="text-sm md:text-base text-justify md:text-center text-custom-black/80">
            {paragraph}
          </p>
        </div>
        <AboutGallery />
      </section>
      <History />
    </>
  );
};

const transformAboutContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return aboutContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_aboutus.php",
  transformAboutContents
)(AboutPage);
