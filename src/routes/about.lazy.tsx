import { createLazyFileRoute, useSearch } from "@tanstack/react-router";
import type { FC } from "react";

const Component: FC = () => {
  const search = useSearch({ strict: false });
  return <div>about: {search?.id}</div>;
};

export const Route = createLazyFileRoute("/about")({
  component: Component,
});
