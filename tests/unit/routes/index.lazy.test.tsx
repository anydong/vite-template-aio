import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import { routeTree } from "../../../src/routeTree.gen";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"], // Pass your initial url
});

test("/", () => {
  const router = createRouter({ routeTree, history: memoryHistory });

  const { getByRole } = render(<RouterProvider router={router} />);

  expect(getByRole("heading")).toBeDefined();
});
