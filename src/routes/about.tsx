import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const aboutSearchSchema = z.object({
  id: z.string().optional().default("123").catch("123"),
});

export type AboutSearch = z.infer<typeof aboutSearchSchema>;

export const Route = createFileRoute("/about")({
  validateSearch: aboutSearchSchema,
  loader: async ({ params }) => {
    console.log("loader");
    console.log(params);
    return "about";
  },
});
