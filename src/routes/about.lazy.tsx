import { createLazyFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

const Component: FC = () => {
  return <div>about</div>;
};

export const Route = createLazyFileRoute("/about")({
  component: Component,
});
