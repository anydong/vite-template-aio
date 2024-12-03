import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    console.log("beforeLoad");
  },
  loader: () => {
    console.log("loader");
    return "about";
  },
});
