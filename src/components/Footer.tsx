import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCodepen } from "react-icons/fi";
import { SiLeetcode, SiHackerrank, SiDevdotto } from "react-icons/si";
import { motion } from "framer-motion";

const socials = [
  { Icon: FiGithub, href: "#", label: "GitHub" },
  { Icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { Icon: FiTwitter, href: "#", label: "Twitter" },
  { Icon: FiMail, href: "mailto:hello@example.com", label: "Email" },
];

const profiles = [
  { Icon: FiGithub, label: "GitHub", stat: "240+ stars", href: "#" },
  { Icon: SiLeetcode, label: "LeetCode", stat: "520 solved", href: "#" },
  { Icon: SiHackerrank, label: "HackerRank", stat: "Java • 5★", href: "#" },
  { Icon: SiDevdotto, label: "Dev.to", stat: "12 articles", href: "#" },
  { Icon: FiCodepen, label: "CodePen", stat: "28 pens", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-cyan">Find me elsewhere</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {profiles.map((p, i) => (
              <motion.a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan/60"
              >
                <p.Icon className="mb-3 h-6 w-6 text-muted-foreground transition-colors group-hover:text-cyan" />
                <p className="font-semibold">{p.label}</p>
                <p className="font-mono text-xs text-muted-foreground">{p.stat}</p>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} — Java Full Stack Developer. Built with intent.</p>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:scale-110 hover:border-cyan hover:text-cyan hover:glow-cyan"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
