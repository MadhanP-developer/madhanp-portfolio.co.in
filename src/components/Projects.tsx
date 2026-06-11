import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FiEye, FiGithub, FiExternalLink, FiMonitor, FiArrowRight } from "react-icons/fi";

type Status = "Live" | "Development";

const projects: {
  title: string;
  category: string;
  year: string;
  status: Status;
  desc: string;
  stack: string[];
  live: string;
  code: string;
  gradient: string;
}[] = [
  {
    title: "FirstBrick Main Website",
    category: "Real Estate · Full-Stack",
    year: "2026",
    status: "Live",
    desc: "The flagship real estate platform serving 500+ monthly visitors. I own the full stack — HTML5/CSS3/JavaScript frontend, Spring Boot REST APIs, MySQL schema design, and CI/CD deployment via Netlify.",
    stack: ["Java", "Spring Boot", "REST APIs", "MySQL", "JavaScript", "Netlify"],
    live: "https://firstbrick.in",
    code: "https://github.com/MadhanP-developer",
    gradient: "from-cyan/30 to-purple/30",
  },
  {
    title: "FirstBrick Landing Pages",
    category: "Web Development",
    year: "2026",
    status: "Live",
    desc: "10+ conversion-optimised campaign landing pages (subfolder architecture) for projects like Godrej Azure and Shriram Park 63 — contributing to a 3× increase in monthly lead inquiries.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Netlify"],
    live: "https://firstbrickhomes.in",
    code: "https://github.com/MadhanP-developer",
    gradient: "from-purple/30 to-pink/30",
  },
  {
    title: "FirstBrick CRM",
    category: "CRM · Full-Stack",
    year: "2026",
    status: "Live",
    desc: "A full-featured CRM managing 200+ leads across 3 agent roles — centralising pipeline tracking, agent assignment, and automated lead capture from landing pages. Secured with Spring Security and JWT authentication.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
    live: "https://crm.firstbrick.in",
    code: "https://github.com/MadhanP-developer",
    gradient: "from-pink/30 to-cyan/30",
  },
  {
    title: "Signature Living Interiors",
    category: "Interior Design · Web Development",
    year: "2026",
    status: "Live",
    desc: "A luxury interior-design studio website for a South India brand — featuring before/after project galleries, tiered pricing packages, a four-step design process, client testimonials, and consultation/quote contact forms across city-specific landing pages.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Netlify"],
    live: "https://signature-living-interiors.netlify.app/",
    code: "https://github.com/MadhanP-developer",
    gradient: "from-purple/30 to-cyan/30",
  },
  {
    title: "My Portfolio Website",
    category: "Web Development",
    year: "2026",
    status: "Live",
    desc: "This portfolio — an animated, multi-page site featuring a 3D hero scene, an interactive particle field, and smooth page transitions. Built with React, TanStack Router, and Tailwind CSS.",
    stack: ["React", "TanStack Router", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    live: "https://madhanp-portfolio.co.in/",
    code: "https://github.com/MadhanP-developer",
    gradient: "from-cyan/30 to-pink/30",
  },
];

const statusStyle: Record<Status, string> = {
  Live: "border-green-500/40 bg-green-500/10 text-green-400",
  Development: "border-amber-500/40 bg-amber-500/10 text-amber-400",
};

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/50"
    >
      {/* Preview area */}
      <a
        href={p.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${p.title} live site`}
        className={`relative grid h-52 place-items-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
      >
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <FiMonitor
          className="h-16 w-16 text-foreground/40 transition-transform duration-500 group-hover:scale-110"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/80 to-transparent"
          aria-hidden="true"
        />
      </a>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-bold">
          <span className="text-gradient">{p.title}</span>
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
          <span>{p.category}</span>
          <span>•</span>
          <span>{p.year}</span>
          <span
            className={`rounded-full border px-2 py-0.5 font-semibold ${statusStyle[p.status]}`}
          >
            {p.status}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold text-muted-foreground">Technologies Used:</p>
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center gap-6 border-t border-border pt-5 text-sm font-semibold">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <FiEye /> Preview
          </a>
          <a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <FiGithub /> Code
          </a>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-cyan hover:underline"
          >
            <FiExternalLink /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Showcasing innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Want to see more projects or collaborate on something amazing?
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Let's Work Together{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://github.com/MadhanP-developer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:border-cyan hover:glow-cyan"
            >
              <FiGithub /> View All on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
