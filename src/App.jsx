import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Accommodation from "./components/Accommodation";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Accommodation />
    </>
  );
};

export default App;
