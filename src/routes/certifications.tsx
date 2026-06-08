import { createFileRoute } from "@tanstack/react-router";
import { Articles } from "@/components/Articles";

export const Route = createFileRoute("/certifications")({
  component: Articles,
  head: () => ({
    meta: [
      { title: "Certifications — Madhan P" },
      {
        name: "description",
        content:
          "Certifications earned by Madhan P — Java Full Stack Development (GUVI) and Data Analytics & Python (NoviTech).",
      },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
});
