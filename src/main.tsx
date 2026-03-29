import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ChristinaMemorial from "./TestPages/ChristinaMemorial";
import RinchoAcademy from "./TestPages/RinchoAcademy";
import RiverBelt from "./TestPages/RiverBelt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RiverBelt />,
  },
  {
    path: "/rincho-academy",
    element: <RinchoAcademy />,
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
