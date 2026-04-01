import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import ChristinaMemorial from "./TestPages/ChristinaMemorial";
import RinchoAcademy from "./TestPages/RinchoAcademy";
import RinchoAcademyLayout from "./TestPages/RinchoAcademyLayout";
import RinchoGallery from "./TestPages/RinchoGallery";
import RinchoBlog from "./TestPages/RinchoBlog";
import RinchoBlogPost from "./TestPages/RinchoBlogPost";
import RinchoAdmission from "./TestPages/RinchoAdmission";
import RinchoEvents from "./TestPages/RinchoEvents";
import RinchoEventDetails from "./TestPages/RinchoEventDetails";
import RiverBelt from "./TestPages/RiverBelt";
import Pilgrim from "./TestPages/Pilgrim";

import PilgrimEvents from "./TestPages/PilgrimEvents";
import PilgrimEventGallery from "./TestPages/PilgrimEventGallery";
import PilgrimServices from "./TestPages/PilgrimServices";

import RichMount from "./TestPages/RichMount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RiverBelt />,
  },
  {
    path: "/rincho-academy",
    element: <RinchoAcademyLayout />,
    children: [
      {
        index: true,
        element: <RinchoAcademy />,
      },
      {
        path: "gallery",
        element: <RinchoGallery />,
      },
      {
        path: "blog",
        element: <RinchoBlog />,
      },
      {
        path: "blog/:slug",
        element: <RinchoBlogPost />,
      },
      {
        path: "events",
        element: <RinchoEvents />,
      },
      {
        path: "events/:slug",
        element: <RinchoEventDetails />,
      },
      {
        path: "admission",
        element: <RinchoAdmission />,
      },
    ],
  },
  {
    path: "/christina-memorial",
    element: <ChristinaMemorial />,
  },
  {
    path: "/pilgrim",
    element: <Pilgrim />,
  },
  {
    path: "/pilgrim/events",
    element: <PilgrimEvents />,
  },
  {
    path: "/pilgrim/events/:slug",
    element: <PilgrimEventGallery />,
  },
  {
    path: "/pilgrim/services",
    element: <PilgrimServices />,
  },
  {
    path: "/rich-mount",
    element: <RichMount />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
