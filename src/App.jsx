import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Accommodation from "./components/Accommodation";
import About from "./components/About";
import Dine from "./components/Dine";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Accommodation />
      <Dine />
      <Testimonials />
    </>
  );
};

export default App;
