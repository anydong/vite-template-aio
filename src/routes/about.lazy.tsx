import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: () => {
    return <h1>ha</h1>;
  },
});
