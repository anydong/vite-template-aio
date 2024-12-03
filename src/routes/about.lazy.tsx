import { createLazyFileRoute, getRouteApi } from "@tanstack/react-router";
import type { FC } from "react";

const { useSearch } = getRouteApi("/about");

const Component: FC = () => {
  const search = useSearch();
  return <div>about: {search.id}</div>;
};

export const Route = createLazyFileRoute("/about")({
  component: Component,
});
