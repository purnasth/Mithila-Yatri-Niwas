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
import MithilaThali from "./components/ui/MithilaThali";
import GalleryPage from "./pages/GalleryPage";

const App = () => {
  return (
    // <>
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   {/* <Direction /> */}
    //   {/* <Janaki /> */}
    //   <History />
    //   <Accommodation />
    //   <Dine />
    //   <MithilaThali />
    //   <Hall />
    //   <Testimonials />
    //   {/* <Offers /> */}
    //   <PlacesToVisit />
    //   <Footer />
    //   <BackToTop />
    //   <WhatsApp />
    // </>
    <>
      <Navbar />
      <GalleryPage />
      <Footer />
    </>
  );
};

export default App;
