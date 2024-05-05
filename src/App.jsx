import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/ui/BackToTop";
import WhatsApp from "./components/ui/WhatsApp";

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
      <BackToTop />
      <WhatsApp />
    </>
  );
};

export default App;
