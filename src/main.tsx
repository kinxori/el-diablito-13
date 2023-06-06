import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./../routes/home/Home";
import Error404 from "../routes/404 Error/404Error-page";
import "./🎨index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
    children: [
      { path: "", element: null },
      { path: "", element: null },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
