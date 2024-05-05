import { createBrowserRouter } from "react-router-dom";
import Accommodation from "./components/Accommodation";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Visit from "./pages/Visit";
import DinePage from "./pages/DinePage";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/accommodation", element: <Accommodation /> },
  { path: "/dine", element: <DinePage /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/places-to-visit", element: <Visit /> },
  { path: "*", element: <NotFound /> },
]);

// DineComponent.jsx DinePage.jsx