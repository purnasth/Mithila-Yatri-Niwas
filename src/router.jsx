import { createBrowserRouter } from "react-router-dom";
import Accommodation from "./components/Accommodation";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/accommodation", element: <Accommodation /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
]);
