import React from "react";
import NearbyMapComponent from "./ui/NearbyMapComponent";
import SvgWave from "./ui/SvgWave";

const Direction = () => {
  return (
    <>
      <section className="bg-alt-bg">
        <SvgWave />
        <div className="text-center mb-12 container max-w-6xl mx-auto">
          <h2 className="text-3xl">Nearby Location</h2>
          <p className="text-base text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
        </div>
        <NearbyMapComponent />
      </section>
    </>
  );
};

export default Direction;
