import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import NotFoundComponent from "./components/NotFound";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "@/locale";

import "./global.css";

// Create a new router instance
const router = createRouter({ routeTree, defaultNotFoundComponent: NotFoundComponent });

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
