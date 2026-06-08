import { FiGithub, FiLinkedin, FiGlobe, FiMail } from "react-icons/fi";

const socials = [
  { Icon: FiGithub, href: "https://github.com/MadhanP-developer", label: "GitHub" },
  { Icon: FiLinkedin, href: "https://www.linkedin.com/in/pmadhan-kumar", label: "LinkedIn" },
  { Icon: FiGlobe, href: "https://madhanp-portfolio.co.in", label: "Portfolio" },
  { Icon: FiMail, href: "mailto:madhanp370@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Madhan P — Java Full Stack Developer. Built with intent.
        </p>
        <ul className="flex gap-3">
          {socials.map(({ Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:scale-110 hover:border-cyan hover:text-cyan hover:glow-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
