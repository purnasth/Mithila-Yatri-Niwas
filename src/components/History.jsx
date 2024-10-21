import React from "react";
import { withDataFetching } from "../constants/data";

const History = ({ data: historyContent }) => {
  return (
    <>
      <div className="relative h-auto bg-logo-bg">
        <section className="z-10 text-custom-black pt-24 pb-48 md:pt-32 md:pb-96">
          <div dangerouslySetInnerHTML={{ __html: historyContent.html }} />
        </section>
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/texture.avif')] bg-cover bg-center bg-no-repeat z-0 mix-blend-darken opacity-50`}
        />
        <div
          className={`absolute bottom-0 h-96 w-full bg-[url('/src/assets/sketch.webp')] bg-contain bg-bottom bg-repeat-x z-0 mix-blend-multiply`}
        />
      </div>
    </>
  );
};

const transformHistory = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return historyContent;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_history.php",
  transformHistory
)(History);
