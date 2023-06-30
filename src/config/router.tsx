import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import BasicLayout from "../layouts/BasicLayout";

const App = lazy(() => import("../pages/App"));

const LoginPage = lazy(() => import("../pages/auth/login"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
