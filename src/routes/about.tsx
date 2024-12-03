import { createFileRoute } from "@tanstack/react-router";

export interface AboutSearch {
  id: string;
}

export const Route = createFileRoute("/about")({
  params: {},
  validateSearch: (search: Record<string, unknown>): AboutSearch => {
    console.log("validateSearch");
    return { id: (search?.id as string) || "123" };
  },
  loader: async ({ params }) => {
    console.log("loader");
    console.log(params);
    return "about";
  },
});
