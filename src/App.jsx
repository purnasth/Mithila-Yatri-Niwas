import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Accommodation from "./components/Accommodation";
import About from "./components/About";
import Dine from "./components/Dine";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Accommodation />
      <Dine />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
