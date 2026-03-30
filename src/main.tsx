import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import ChristinaMemorial from "./TestPages/ChristinaMemorial";
import RinchoAcademy from "./TestPages/RinchoAcademy";
import RinchoAcademyLayout from "./TestPages/RinchoAcademyLayout";
import RinchoGallery from "./TestPages/RinchoGallery";
import RinchoBlog from "./TestPages/RinchoBlog";
import RinchoAdmission from "./TestPages/RinchoAdmission";
import RiverBelt from "./TestPages/RiverBelt";

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
        path: "admission",
        element: <RinchoAdmission />,
      },
    ],
  },
  {
    path: "/christina-memorial",
    element: <ChristinaMemorial />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
