import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FiArrowRight, FiExternalLink, FiMonitor } from "react-icons/fi";

const featured = [
  {
    title: "FirstBrick Main Website",
    category: "Real Estate · Full-Stack",
    desc: "Flagship real estate platform serving 500+ monthly visitors — full stack from Spring Boot REST APIs to MySQL and CI/CD deployment.",
    stack: ["Java", "Spring Boot", "MySQL"],
    live: "https://firstbrick.in",
    gradient: "from-cyan/30 to-purple/30",
  },
  {
    title: "FirstBrick CRM",
    category: "CRM · Full-Stack",
    desc: "A full-featured CRM managing 200+ leads across 3 agent roles — secured with Spring Security and JWT authentication.",
    stack: ["Spring Security", "JWT", "MySQL"],
    live: "https://crm.firstbrick.in",
    gradient: "from-pink/30 to-cyan/30",
  },
];

export function FeaturedWork() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Featured <span className="text-gradient">projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A look at what I've recently built and shipped to production.
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm font-medium backdrop-blur transition-all hover:border-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          >
            View all projects
            <FiArrowRight
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/50"
            >
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title} live site`}
                className={`relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
              >
                <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
                <FiMonitor
                  className="h-14 w-14 text-foreground/40 transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/80 to-transparent"
                  aria-hidden="true"
                />
              </a>

              <div className="flex flex-1 flex-col p-7">
                <p className="font-mono text-xs text-muted-foreground">{p.category}</p>
                <h3 className="mt-2 text-2xl font-bold">
                  <span className="text-gradient">{p.title}</span>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan hover:underline"
                >
                  <FiExternalLink /> Visit live site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
