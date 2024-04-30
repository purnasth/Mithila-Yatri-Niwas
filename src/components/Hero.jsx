import React, { useRef } from "react";
// import bgVideo from "https://www.mithilayatriniwas.com/template/cms/images/video.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  function startVideo() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <div className="relative top-0 w-full h-full lg:h-screen overflow-hidden -mt-36">
      {/* <div className="overlay absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.25)]"></div> */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster=""
        onClick={startVideo}
      >
        <source
          src="https://www.mithilayatriniwas.com/template/cms/images/video.mp4"
          type="video/mp4"
        />
        A video of Mithila Yatri Niwas where you can see the beautiful
        infrastructure of the resort and the heritage of Janaki Temple.
      </video>
    </div>
  );
};

export default Hero;
