import React from "react";
import Hero from "../components/Hero";
import Accommodation from "../components/Accommodation";
import About from "../components/About";
import Dine from "../components/Dine";
import Testimonials from "../components/Testimonials";
import Hall from "../components/Hall";
import History from "../components/History";
import PlacesToVisit from "../components/PlacesToVisit";
import MithilaThali from "../components/ui/MithilaThali";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Direction /> */}
      {/* <Janaki /> */}
      <History />
      <Accommodation />
      <Dine />
      <MithilaThali />
      <Hall />
      <Testimonials />
      {/* <Offers /> */}
      <PlacesToVisit />
    </>
  );
};

export default Home;
