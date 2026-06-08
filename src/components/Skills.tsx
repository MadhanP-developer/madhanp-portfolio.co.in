import { motion } from "framer-motion";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  FiGlobe,
  FiServer,
  FiDatabase,
  FiTool,
  FiCode,
  FiZap,
  FiLayers,
  FiSmartphone,
  FiCoffee,
  FiBox,
  FiShield,
  FiGrid,
  FiGitBranch,
  FiPackage,
  FiSend,
  FiUploadCloud,
  FiUsers,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";

type Skill = { name: string; level: number; Icon: IconType };
type Category = { label: string; Icon: IconType; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Frontend Development",
    Icon: FiGlobe,
    skills: [
      { name: "HTML5 / CSS3", level: 95, Icon: FiCode },
      { name: "JavaScript (ES6+)", level: 90, Icon: FiZap },
      { name: "Bootstrap 5", level: 88, Icon: FiLayers },
      { name: "Responsive Web Design", level: 92, Icon: FiSmartphone },
    ],
  },
  {
    label: "Backend Development",
    Icon: FiServer,
    skills: [
      { name: "Java", level: 90, Icon: FiCoffee },
      { name: "Spring Boot", level: 88, Icon: FiBox },
      { name: "REST APIs", level: 88, Icon: FiServer },
      { name: "Spring Security / JWT", level: 82, Icon: FiShield },
      { name: "Hibernate ORM", level: 80, Icon: FiLayers },
    ],
  },
  {
    label: "Database & Storage",
    Icon: FiDatabase,
    skills: [
      { name: "MySQL", level: 90, Icon: FiDatabase },
      { name: "SQL", level: 88, Icon: FiDatabase },
      { name: "Schema Design", level: 85, Icon: FiGrid },
      { name: "PostgreSQL", level: 80, Icon: FiDatabase },
    ],
  },
  {
    label: "Tools & DevOps",
    Icon: FiTool,
    skills: [
      { name: "Git & GitHub", level: 90, Icon: FiGitBranch },
      { name: "Postman", level: 85, Icon: FiSend },
      { name: "Netlify / CI-CD", level: 85, Icon: FiUploadCloud },
      { name: "Agile / Scrum", level: 85, Icon: FiUsers },
      { name: "Maven", level: 82, Icon: FiPackage },
      { name: "Docker", level: 78, Icon: FiBox },
    ],
  },
];

const stats = [
  { Icon: FiCode, value: "Fresher", label: "Production Project Experience" },
  { Icon: FiBriefcase, value: "10+ Projects", label: "Completed Web Applications" },
  { Icon: FiAward, value: "2 Certifications", label: "Industry-Recognized Credentials" },
];

function SkillBar({ skill, i }: { skill: Skill; i: number }) {
  const { name, level, Icon } = skill;
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-3 font-semibold">
          <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
          {name}
        </span>
        <span className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-background/60">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-hero"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [active, setActive] = useState(0);
  const category = categories[active];

  return (
    <section id="skills" className="relative py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl">
            <span className="text-gradient">Skills</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-14 grid grid-cols-2 gap-2 rounded-2xl border border-border bg-card/40 p-2 backdrop-blur md:grid-cols-4">
          {categories.map((c, i) => {
            const TabIcon = c.Icon;
            const isActive = i === active;
            return (
              <button
                key={c.label}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                  isActive
                    ? "border border-cyan/40 bg-background/60 text-foreground glow-cyan"
                    : "border border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <TabIcon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">{c.label}</span>
                <span className="sm:hidden">{c.label.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active category card */}
        <motion.div
          key={category.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
              <category.Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold md:text-3xl">
              <span className="text-gradient">{category.label}</span>
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
            {category.skills.map((s, i) => (
              <SkillBar key={s.name} skill={s} i={i} />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => {
            const StatIcon = s.Icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-border bg-card/40 p-8 text-center backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan/50"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
                  <StatIcon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="mt-5 font-display text-2xl font-bold">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
