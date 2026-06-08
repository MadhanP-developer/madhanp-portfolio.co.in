import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Madhan P" },
      {
        name: "description",
        content:
          "About Madhan P — a Java Full Stack Developer at F&P Homes, MCA 2025 graduate based in Chennai.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});
