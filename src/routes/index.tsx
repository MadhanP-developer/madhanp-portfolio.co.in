import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { FeaturedWork } from "@/components/FeaturedWork";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Madhan P — Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Madhan P, a Java Full Stack Developer building and deploying scalable web platforms with Java, Spring Boot, REST APIs, and MySQL.",
      },
      { property: "og:title", content: "Madhan P — Java Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Selected projects, experience, skills and contact for Madhan P, a Java Full Stack Developer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://madhanp-portfolio.co.in/" },
      { property: "og:image", content: "https://madhanp-portfolio.co.in/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Madhan P — Java Full Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Java · Spring Boot · REST APIs · MySQL — selected projects, experience and skills.",
      },
      { name: "twitter:image", content: "https://madhanp-portfolio.co.in/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Madhan P",
          jobTitle: "Java Full Stack Developer",
          email: "mailto:madhanp370@gmail.com",
          telephone: "+91-7810099575",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
          },
          worksFor: { "@type": "Organization", name: "F&P Homes Private Limited" },
          description:
            "Java Full Stack Developer building and deploying scalable web platforms with Java, Spring Boot, REST APIs, and MySQL.",
          knowsAbout: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "REST APIs",
            "Hibernate",
            "JavaScript",
            "MySQL",
          ],
          sameAs: [
            "https://github.com/MadhanP-developer",
            "https://www.linkedin.com/in/pmadhan-kumar",
            "https://madhanp-portfolio.co.in",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedWork />
      <CTA />
    </>
  );
}
