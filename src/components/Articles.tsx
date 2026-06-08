import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certifications = [
  {
    title: "Java Full Stack Development",
    excerpt:
      "Certified in end-to-end Java full stack development — Spring Boot, REST APIs, databases, and building complete web applications.",
    tag: "Full Stack",
    issuer: "GUVI Geek Networks",
    date: "2025",
    accent: "from-cyan/30 to-purple/10",
  },
  {
    title: "Data Analytics & Python",
    excerpt:
      "Certified in data analytics and Python — data processing, analysis, and drawing actionable insights from datasets.",
    tag: "Analytics",
    issuer: "NoviTech R&D Pvt Ltd",
    date: "2025",
    accent: "from-purple/30 to-pink/10",
  },
];

export function Articles() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">
            Certifications
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Credentials I've <span className="text-gradient">earned</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Certifications that back up my hands-on full-stack and data work.
          </p>
        </motion.div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/50">
                <div
                  className={`relative h-32 overflow-hidden bg-gradient-to-br ${c.accent}`}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/80 to-transparent" />
                  <FiAward
                    className="absolute right-5 top-5 h-7 w-7 text-foreground/80"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
                    {c.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-cyan">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                    <span>{c.issuer}</span>
                    <span>{c.date}</span>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
