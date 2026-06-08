import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/Projects";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Madhan P" },
      {
        name: "description",
        content:
          "Projects by Madhan P — live real estate web platforms and a CRM lead management system built with Java, Spring Boot, and MySQL.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});
