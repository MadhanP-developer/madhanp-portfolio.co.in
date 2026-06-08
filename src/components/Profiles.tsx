import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiArrowUpRight } from "react-icons/fi";

const profiles = [
  {
    Icon: FiGithub,
    label: "GitHub",
    handle: "@MadhanP-developer",
    blurb: "Code & projects",
    href: "https://github.com/MadhanP-developer",
    accent: "cyan" as const,
  },
  {
    Icon: FiLinkedin,
    label: "LinkedIn",
    handle: "in/pmadhan-kumar",
    blurb: "Let's connect",
    href: "https://www.linkedin.com/in/pmadhan-kumar",
    accent: "purple" as const,
  },
  {
    Icon: FiGlobe,
    label: "Portfolio",
    handle: "madhanp-portfolio.co.in",
    blurb: "More about me",
    href: "https://madhanp-portfolio.co.in",
    accent: "pink" as const,
  },
  {
    Icon: FiMail,
    label: "Email",
    handle: "madhanp370@gmail.com",
    blurb: "Drop a message",
    href: "mailto:madhanp370@gmail.com",
    accent: "cyan" as const,
  },
];

const accentClass: Record<"cyan" | "purple" | "pink", string> = {
  cyan: "text-cyan group-hover:glow-cyan",
  purple: "text-purple group-hover:glow-purple",
  pink: "text-pink group-hover:glow-pink",
};

export function Profiles() {
  return (
    <section id="profiles" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">Profiles</p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Find me <span className="text-gradient">online</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The best places to see my work and get in touch.
          </p>
        </motion.div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p, i) => (
            <motion.li
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.label} — ${p.handle}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/40 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-hero opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />

                <div className="flex items-start justify-between">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl border border-border bg-background/40 transition-all ${accentClass[p.accent]}`}
                  >
                    <p.Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <FiArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-8">
                  <p className="font-display text-xl font-bold text-foreground">{p.label}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {p.blurb}
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="truncate font-mono text-xs text-muted-foreground">{p.handle}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
