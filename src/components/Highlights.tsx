import { motion } from "framer-motion";

const stats = [
  { value: "2", label: "Live production platforms" },
  { value: "500+", label: "Monthly visitors served" },
  { value: "200+", label: "Leads managed via CRM" },
  { value: "3×", label: "Growth in monthly leads" },
];

const tech = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "REST APIs",
  "Hibernate",
  "MySQL",
  "JavaScript",
  "Bootstrap 5",
  "Docker",
  "Git & GitHub",
  "Netlify",
  "CI/CD",
];

export function Highlights() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">
            By the numbers
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Production experience that <span className="text-gradient">delivers results</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Currently building and shipping real platforms as a Full Stack Developer at F&amp;P
            Homes.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card/40 p-6 text-center backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/50"
            >
              <p className="font-display text-4xl font-bold text-gradient md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-2.5"
        >
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm font-mono text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
