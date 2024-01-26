import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Loading from "@/components/Loading";

import router from "@/router.tsx";

import "@/config/dayjs.ts";
import "@/locale";

import "antd/dist/reset.css";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </React.StrictMode>,
);
