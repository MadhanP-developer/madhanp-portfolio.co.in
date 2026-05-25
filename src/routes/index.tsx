import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Articles } from "@/components/Articles";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Profiles } from "@/components/Profiles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Java Full Stack Developer — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of a Java Full Stack Developer crafting scalable web applications with Spring Boot, React, and modern cloud tooling.",
      },
      { property: "og:title", content: "Java Full Stack Developer — Portfolio" },
      {
        property: "og:description",
        content: "Selected projects, writing, profiles and contact for a Java Full Stack Developer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Java Full Stack Developer — Portfolio" },
      {
        name: "twitter:description",
        content: "Spring Boot · React · Cloud — selected projects, writing and profiles.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Java Full Stack Developer",
          jobTitle: "Java Full Stack Developer",
          description:
            "Crafting scalable web applications with Spring Boot, React, and modern cloud tooling.",
          knowsAbout: [
            "Java",
            "Spring Boot",
            "React",
            "TypeScript",
            "PostgreSQL",
            "AWS",
            "Microservices",
          ],
          sameAs: [
            "https://github.com",
            "https://linkedin.com",
            "https://leetcode.com",
            "https://dev.to",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ParticleField />
      <div className="relative z-10">
        <Nav />
        <main id="main">
          <Hero />
          <About />
          <CTA />
          <Articles />
          <Projects />
          <Skills />
          <Profiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
