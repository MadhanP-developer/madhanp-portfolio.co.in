import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiBookOpen } from "react-icons/fi";

const timeline = [
  { icon: FiBriefcase, year: "2024 — Now", title: "Java Full Stack Developer", body: "Building production-grade Spring Boot + React apps." },
  { icon: FiBookOpen, year: "2022 — 2024", title: "MCA, Computer Applications", body: "Specialized in distributed systems & cloud architecture." },
  { icon: FiAward, year: "2019 — 2022", title: "BCA — First Class with Distinction", body: "Foundations in DSA, OOP, databases & web." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">About</p>
          <h2 className="text-4xl font-bold md:text-5xl">A developer who treats <span className="text-gradient">code as craft</span>.</h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr,1.3fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-fit"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-hero opacity-50 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border bg-card md:h-80 md:w-80">
              <div className="absolute inset-0 bg-gradient-hero opacity-20" />
              <div className="grid-bg absolute inset-0 opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold text-gradient">
                JFS
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              I architect end-to-end systems where Java backends meet React frontends. My focus: clean APIs, considered UX, and shipping software that scales without falling over at 3am.
            </motion.p>

            <div className="mt-10 space-y-4">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan/60 hover:glow-cyan"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{item.year}</p>
                        <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
