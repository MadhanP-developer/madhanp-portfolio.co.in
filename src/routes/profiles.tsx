import { createFileRoute } from "@tanstack/react-router";
import { Profiles } from "@/components/Profiles";

export const Route = createFileRoute("/profiles")({
  component: Profiles,
  head: () => ({
    meta: [
      { title: "Profiles — Madhan P" },
      {
        name: "description",
        content: "Find Madhan P online — GitHub, LinkedIn, portfolio, and email.",
      },
    ],
    links: [{ rel: "canonical", href: "/profiles" }],
  }),
});
