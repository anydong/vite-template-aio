import { it, describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRouter, RouterProvider, createMemoryHistory } from "@tanstack/react-router";

import { routeTree } from "../../src/routeTree.gen";

describe("routes", () => {
  test("/", async ({ expect }) => {
    const memoryHistory = createMemoryHistory({
      initialEntries: ["/"], // Pass your initial url
    });

    const router = createRouter({ routeTree, history: memoryHistory });
    render(<RouterProvider router={router} />);
    console.log(screen.findByText("div"));

    expect(screen.getByRole("heading")).toBeDefined();
  });
});
