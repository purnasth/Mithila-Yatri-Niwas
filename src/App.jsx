import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Accommodation from "./components/Accommodation";
import About from "./components/About";
import Dine from "./components/Dine";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Offers from "./components/Offers";
import Hall from "./components/Hall";
import Janaki from "./components/Janaki";
import Direction from "./components/Direction";
import History from "./components/History";
import BackToTop from "./components/ui/BackToTop";
import WhatsApp from "./components/ui/WhatsApp";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Direction /> */}
      {/* <Janaki /> */}
      <History />
      <Accommodation />
      <Dine />
      <Hall />
      <Testimonials />
      <Offers />
      <Footer />
      <BackToTop />
      <WhatsApp />
    </>
  );
};

export default App;
