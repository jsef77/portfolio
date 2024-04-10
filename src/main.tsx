import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/portfolio//*",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline /> <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
