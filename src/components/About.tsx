import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  FiAward,
  FiBriefcase,
  FiBookOpen,
  FiMapPin,
  FiMail,
  FiDownload,
  FiServer,
  FiLayout,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

const quickFacts = [
  { Icon: FiBriefcase, label: "Role", value: "Java Full Stack Developer" },
  { Icon: FiMapPin, label: "Location", value: "Chennai, Tamil Nadu, India" },
  { Icon: FiBookOpen, label: "Education", value: "MCA, 2025 · CGPA 7.96" },
  { Icon: FiCheckCircle, label: "Availability", value: "Open to opportunities" },
];

const stats = [
  { value: "2", label: "Live production platforms" },
  { value: "200+", label: "Leads managed via CRM" },
  { value: "10+", label: "Campaign landing pages" },
  { value: "3×", label: "Growth in monthly leads" },
];

const services = [
  {
    Icon: FiServer,
    title: "Backend Engineering",
    body: "Designing secure, scalable REST APIs and data layers with Java, Spring Boot, Spring Security, JWT, and Hibernate ORM.",
  },
  {
    Icon: FiLayout,
    title: "Frontend Development",
    body: "Building responsive, accessible interfaces with HTML5, CSS3, JavaScript (ES6+), and Bootstrap 5 — focused on real user experience.",
  },
  {
    Icon: FiLayers,
    title: "Full-Stack Delivery",
    body: "Owning features end-to-end — MySQL schema design, deployment, and CI/CD in an Agile, cross-functional environment.",
  },
];

const experience = [
  {
    role: "Full Stack Developer",
    org: "F&P Homes Private Limited · Chennai",
    period: "Jan 2026 — Present",
    points: [
      "Engineered and maintain 2 live production platforms (firstbrick.in, firstbrickhomes.in) serving 500+ monthly visitors — owning the full stack from frontend to Spring Boot REST APIs, MySQL schema design, and CI/CD deployment via Netlify.",
      "Designed and launched a full-featured CRM (crm.firstbrick.in) managing 200+ leads across 3 agent roles — centralising pipeline tracking, agent assignment, and automated lead capture; secured with Spring Security and JWT.",
      "Architected and deployed 10+ conversion-optimised campaign landing pages for projects including Godrej Azure and Shriram Park 63 — driving a 3× increase in monthly lead inquiries.",
    ],
  },
];

const education = [
  {
    Icon: FiBookOpen,
    degree: "Master of Computer Applications (MCA)",
    school: "Periyar Maniammai Institute of Science and Technology, Thanjavur",
    period: "2025 · CGPA 7.96",
    detail:
      "Coursework in Data Structures & Algorithms, DBMS, Web Technologies, Software Engineering, OOP, and Computer Networks.",
  },
  {
    Icon: FiAward,
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Mass College of Arts and Science, Kumbakonam",
    period: "2023 · CGPA 8.9",
    detail: "Strong foundations in programming, databases, and web technologies.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl">
            <span className="text-gradient">About</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Get to know the developer behind the code
          </p>
        </motion.div>

        {/* Intro: avatar + facts | bio */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr,1.3fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-hero opacity-50 blur-2xl" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-border bg-card md:h-64 md:w-64">
                <div className="absolute inset-0 bg-gradient-hero opacity-20" />
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold text-gradient">
                  MP
                </div>
              </div>
            </div>

            <ul className="w-full space-y-3">
              {quickFacts.map(({ Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="truncate text-sm font-semibold">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">Who I Am</p>
            <h2 className="text-4xl font-bold md:text-5xl">
              A developer who ships <span className="text-gradient">end to end</span>.
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Madhan, a Java Full Stack Developer based in Chennai with hands-on production
                experience. At F&P Homes I independently own the full stack — building and deploying
                live real estate platforms, a CRM managing 200+ leads, and 10+ conversion-focused
                landing pages in an Agile, CI/CD environment.
              </p>
              <p>
                I'm an MCA 2025 graduate who enjoys turning real business problems into reliable
                software — from clean database schemas and secure APIs to responsive interfaces. I
                care about shipping work that performs in production and delivers measurable
                results.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card/40 p-4 text-center backdrop-blur"
                >
                  <p className="font-display text-2xl font-bold text-gradient">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <FiMail /> Get in touch
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:border-cyan hover:glow-cyan"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* What I Do */}
        <div className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold md:text-4xl"
          >
            What I <span className="text-gradient">do</span>
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl border border-border bg-card/40 p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/50"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold md:text-4xl"
          >
            <span className="text-gradient">Experience</span>
          </motion.h2>
          <div className="mt-10 space-y-6">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">
                      <FiBriefcase className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {e.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <FiCheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold md:text-4xl"
          >
            <span className="text-gradient">Education</span>
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {education.map((ed, i) => {
              const Icon = ed.Icon;
              return (
                <motion.div
                  key={ed.degree}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl border border-border bg-card/40 p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-snug">{ed.degree}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{ed.school}</p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-cyan">
                        {ed.period}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">{ed.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
