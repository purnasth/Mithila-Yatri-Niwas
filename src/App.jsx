import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Accommodation from "./components/Accommodation";
import About from "./components/About";
import Dine from "./components/Dine";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Hall from "./components/Hall";
import History from "./components/History";
import BackToTop from "./components/ui/BackToTop";
import WhatsApp from "./components/ui/WhatsApp";
import PlacesToVisit from "./components/PlacesToVisit";

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
      {/* <Offers /> */}
      <PlacesToVisit />
      <Footer />
      <BackToTop />
      <WhatsApp />
    </>
  );
};

export default App;
