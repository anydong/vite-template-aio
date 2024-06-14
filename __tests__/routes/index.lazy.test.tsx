import { it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRouter, RouterProvider, createMemoryHistory } from "@tanstack/react-router";

import { routeTree } from "../../src/routeTree.gen";

describe("routes", () => {
  it("/", async ({ expect }) => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ["/"], // Pass your initial url
    });

    const router = createRouter({ routeTree, history: memoryHistory });
    render(<RouterProvider router={router} />);
    const element = screen.getByRole("heading", { level: 1 });
    expect(element).toBeDefined();
  });
});
