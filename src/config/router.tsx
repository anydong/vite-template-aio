import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import BasicLayout from "../layouts/BasicLayout";

const App = lazy(() => import("../pages/App"));

const LoginPage = lazy(() => import("../pages/auth/login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
