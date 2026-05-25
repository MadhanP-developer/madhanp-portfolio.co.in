import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { MouseEvent } from "react";

const projects = [
  {
    title: "Lumen Commerce",
    desc: "Headless e-commerce platform with sub-100ms checkout, multi-tenant catalogs and event-driven inventory sync.",
    stack: ["Spring Boot", "React", "PostgreSQL", "Kafka"],
    gradient: "from-cyan/30 to-purple/30",
  },
  {
    title: "Atlas Analytics",
    desc: "Real-time analytics dashboard ingesting 50M events/day with custom SQL builder and shareable cohorts.",
    stack: ["Java 21", "React", "ClickHouse", "Redis"],
    gradient: "from-purple/30 to-pink/30",
  },
  {
    title: "Halcyon Banking API",
    desc: "PCI-DSS compliant payments core with idempotent transfers, ledger reconciliation and OAuth2.",
    stack: ["Spring Security", "JWT", "MySQL", "Docker"],
    gradient: "from-pink/30 to-cyan/30",
  },
  {
    title: "Verse CMS",
    desc: "Block-based headless CMS with live collaboration, image transforms, and a typed REST + GraphQL API.",
    stack: ["Spring Boot", "React", "GraphQL", "S3"],
    gradient: "from-cyan/30 to-pink/30",
  },
];

function TiltCard({ p, i }: { p: typeof projects[number]; i: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className="group relative cursor-pointer"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-hero opacity-30 blur-sm transition-opacity group-hover:opacity-80" />
      <div className={`relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl`}>
        <div className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.gradient} blur-3xl transition-transform duration-700 group-hover:scale-125`} />

        <div style={{ transform: "translateZ(40px)" }} className="relative">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Project {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="text-2xl font-bold md:text-3xl">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-cyan hover:text-cyan">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-7 flex gap-4">
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan hover:underline">
              <FiExternalLink /> Live
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <FiGithub /> Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">Selected Work</p>
            <h2 className="text-4xl font-bold md:text-5xl">Projects that <span className="text-gradient">ship</span>.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">A handful of systems I've built end-to-end — from the schema up to the pixels.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => <TiltCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
