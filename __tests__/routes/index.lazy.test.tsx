import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { createRouter, RouterProvider, createMemoryHistory } from "@tanstack/react-router";

import { routeTree } from "../../src/routeTree.gen";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"], // Pass your initial url
});

test("/", () => {
  const router = createRouter({ routeTree, history: memoryHistory });

  const { getByRole } = render(<RouterProvider router={router} />);

  expect(getByRole("heading")).toBeDefined();
});
