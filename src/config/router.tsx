import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import BasicLayout from "../layouts/BasicLayout";

const App = lazy(() => import("../pages/App"));

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
]);

export default router;
