import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Visit from "./pages/Visit";
import DinePage from "./pages/DinePage";
import AccommodationPage from "./pages/AccommodationPage";
import HallPage from "./pages/HallPage";
import DineBackup from "./pages/DineBackup";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/accommodation", element: <AccommodationPage /> },
  { path: "/hall", element: <HallPage /> },
  { path: "/dine", element: <DinePage /> },
  { path: "/dining", element: <DineBackup /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/places-to-visit", element: <Visit /> },
  { path: "*", element: <NotFound /> },
]);

// DineComponent.jsx DinePage.jsx
