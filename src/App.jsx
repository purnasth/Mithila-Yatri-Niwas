import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/ui/BackToTop";
import WhatsApp from "./components/ui/WhatsApp";

import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Visit from "./pages/Visit";
import DinePage from "./pages/DinePage";
import AccommodationPage from "./pages/AccommodationPage";
import HallPage from "./pages/HallPage";
import EnquiryForm from "./components/ui/EnquiryForm";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/hall" element={<HallPage />} />
          <Route path="/dine" element={<DinePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/places-to-visit" element={<Visit />} />
          <Route path="/enquiry-form" element={<EnquiryForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BackToTop />
        <WhatsApp />
      </Router>
    </>
  );
};

export default App;
