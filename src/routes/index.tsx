import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Java Full Stack Developer — Portfolio" },
      { name: "description", content: "Portfolio of a Java Full Stack Developer crafting scalable web applications with Spring Boot, React, and modern cloud tooling." },
      { property: "og:title", content: "Java Full Stack Developer — Portfolio" },
      { property: "og:description", content: "Selected projects, skills and contact for a Java Full Stack Developer." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ParticleField />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <CTA />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
