import { motion } from "framer-motion";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

const articles = [
  {
    title: "Designing Resilient Spring Boot Microservices",
    excerpt: "Patterns for retries, circuit breakers, and graceful degradation across a distributed Java stack.",
    tag: "Architecture",
    readTime: "8 min read",
    date: "May 2026",
    href: "#",
    accent: "from-cyan/30 to-purple/10",
  },
  {
    title: "Streaming Data with Kafka and Project Reactor",
    excerpt: "Building reactive pipelines that stay backpressure-safe while moving millions of events.",
    tag: "Backend",
    readTime: "12 min read",
    date: "Apr 2026",
    href: "#",
    accent: "from-purple/30 to-pink/10",
  },
  {
    title: "A Pragmatic Guide to React Performance",
    excerpt: "Profiling, memoization, and the small habits that keep large React apps feeling instant.",
    tag: "Frontend",
    readTime: "6 min read",
    date: "Mar 2026",
    href: "#",
    accent: "from-pink/30 to-cyan/10",
  },
];

export function Articles() {
  return (
    <section id="articles" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">Writing</p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Notes from the <span className="text-gradient">craft</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Long-form essays on system design, Java internals, and shipping React at scale.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm font-medium backdrop-blur transition-all hover:border-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          >
            All articles
            <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </motion.div>

        <ul className="grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <a
                href={a.href}
                aria-label={`${a.title} — ${a.readTime}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${a.accent}`} aria-hidden="true">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/80 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
                    {a.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-cyan">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <FiClock className="h-3.5 w-3.5" aria-hidden="true" /> {a.readTime}
                    </span>
                    <span>{a.date}</span>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
