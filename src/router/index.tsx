import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "@/layout";
import LandingPage from "@/views/LandingPage/LandingPage";

const routers = [
  {
    path: "/",
    element: <Navigate to="/landing" />,
  },
  {
    id: "layout",
    element: <Layout />,
    children: [{ path: "landing", element: <LandingPage /> }],
  },
];

export default createBrowserRouter(routers);
