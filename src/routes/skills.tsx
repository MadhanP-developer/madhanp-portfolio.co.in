import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/Skills";

export const Route = createFileRoute("/skills")({
  component: Skills,
  head: () => ({
    meta: [
      { title: "Skills — Madhan P" },
      {
        name: "description",
        content:
          "Technical skills of Madhan P — Java, Spring Boot, Spring Security, REST APIs, MySQL, JavaScript, and more.",
      },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
});
