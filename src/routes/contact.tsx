import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Madhan P" },
      {
        name: "description",
        content: "Get in touch with Madhan P — Java Full Stack Developer based in Chennai, India.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});
