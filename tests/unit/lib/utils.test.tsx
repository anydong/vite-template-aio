import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("Tailwind CSS", async () => {
  it("twMerge", () => {
    const result = cn("flex", "flex-col");
    expect(result).toBe("flex flex-col");
  });
});
