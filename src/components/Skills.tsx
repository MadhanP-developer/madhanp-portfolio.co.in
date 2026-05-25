import { motion } from "framer-motion";

const groups = [
  { label: "Backend", color: "cyan", items: ["Java 21", "Spring Boot", "Spring Security", "REST", "JPA / Hibernate", "MySQL", "PostgreSQL"] },
  { label: "Frontend", color: "purple", items: ["React", "TypeScript", "Tailwind", "HTML5", "CSS3", "Framer Motion"] },
  { label: "Tools & Cloud", color: "pink", items: ["Git", "GitHub Actions", "Docker", "Linux", "AWS", "Postman"] },
  { label: "Concepts", color: "cyan", items: ["OOP", "System Design", "DSA", "Microservices", "CI/CD", "Testing"] },
];

const colorMap: Record<string, string> = {
  cyan: "hover:border-cyan hover:text-cyan hover:glow-cyan",
  purple: "hover:border-purple hover:text-purple hover:glow-purple",
  pink: "hover:border-pink hover:text-pink hover:glow-pink",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">Toolkit</p>
          <h2 className="text-4xl font-bold md:text-5xl">The <span className="text-gradient">stack</span> I build with.</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: gi * 0.08 }}
              className="rounded-3xl border border-border bg-card/40 p-7 backdrop-blur"
            >
              <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-muted-foreground">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.08 + i * 0.04 }}
                    className={`cursor-default rounded-full border border-border bg-background/50 px-4 py-2 text-sm font-medium transition-all ${colorMap[g.color]}`}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
