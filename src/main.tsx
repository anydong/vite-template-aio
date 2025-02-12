import { RouterProvider, createRouter } from "@tanstack/react-router";
import qs from "query-string";
import React from "react";
import ReactDOM from "react-dom/client";

import "@ant-design/v5-patch-for-react-19";

import NotFoundComponent from "./components/NotFound";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// 加载 i18next
import "./locale";

// 加载全局 css
import "./main.css";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundComponent,
  parseSearch: qs.parse,
  stringifySearch: (value) => {
    return `?${qs.stringify(value)}`;
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
