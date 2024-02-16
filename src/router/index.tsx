/**
 * @description Router Config
 * @author Luo Wang
 */
import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "@/layout";
import LandingPage from "@/views/LandingPage/LandingPage";
import NotFound from "@/views/ErrorPages/404";
import Error403 from "@/views/ErrorPages/403";

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
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/403",
    element: <Error403 />,
  },
];

export default createBrowserRouter(routers);
