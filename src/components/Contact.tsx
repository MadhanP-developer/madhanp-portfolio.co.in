import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiSend,
  FiCheck,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiFileText,
} from "react-icons/fi";

const contactInfo = [
  {
    Icon: FiMail,
    label: "Email",
    value: "madhanp370@gmail.com",
    href: "mailto:madhanp370@gmail.com",
  },
  { Icon: FiPhone, label: "Phone", value: "+91 78100 99575", href: "tel:+917810099575" },
  { Icon: FiMapPin, label: "Location", value: "Chennai, Tamil Nadu, India", href: undefined },
];

const socials = [
  { Icon: FiGithub, label: "GitHub", href: "https://github.com/MadhanP-developer" },
  { Icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pmadhan-kumar" },
  { Icon: FiGlobe, label: "Portfolio", href: "https://madhanp-portfolio.co.in" },
  { Icon: FiMail, label: "Email", href: "mailto:madhanp370@gmail.com" },
  { Icon: FiPhone, label: "Call", href: "tel:+917810099575" },
  { Icon: FiFileText, label: "Resume", href: "/resume.pdf" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `Name: ${name}\nEmail: ${email}\nMobile: ${phone}\nSubject: ${subject}\n\n${message}`;
    window.location.href = `mailto:madhanp370@gmail.com?subject=${encodeURIComponent(
      subject ? `${subject} — from ${name}` : `Portfolio message from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    form.reset();
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl">
            <span className="text-gradient">Contact</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left — Send Message form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="relative rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-xl"
          >
            <h2 className="mb-6 text-2xl font-bold">
              <span className="text-gradient">Send Message</span>
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold">Your Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all placeholder:text-muted-foreground focus:border-cyan focus:outline-none focus:glow-cyan"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold">Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all placeholder:text-muted-foreground focus:border-cyan focus:outline-none focus:glow-cyan"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">Mobile Number</label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter your mobile number"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all placeholder:text-muted-foreground focus:border-cyan focus:outline-none focus:glow-cyan"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all placeholder:text-muted-foreground focus:border-cyan focus:outline-none focus:glow-cyan"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold">Message</label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all placeholder:text-muted-foreground focus:border-cyan focus:outline-none focus:glow-cyan"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                <input
                  required
                  name="consent"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-border accent-cyan"
                />
                <span>
                  I agree to be contacted about my message via email, phone, or WhatsApp. No spam —
                  I'll only reach out regarding your enquiry.
                </span>
              </label>

              <button
                type="submit"
                disabled={loading || sent}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-hero px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:glow-cyan disabled:opacity-80"
              >
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
                {sent ? (
                  <>
                    <FiCheck /> Message sent
                  </>
                ) : loading ? (
                  "Sending…"
                ) : (
                  <>
                    <FiSend className="transition-transform group-hover:translate-x-1" /> Send
                    Message
                  </>
                )}
              </button>
            </div>
          </motion.form>

          {/* Right — info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Get In Touch */}
            <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-xl">
              <h2 className="mb-6 text-2xl font-bold">
                <span className="text-gradient">Get In Touch</span>
              </h2>
              <ul className="space-y-4">
                {contactInfo.map(({ Icon, label, value, href }) => {
                  const inner = (
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-background/40 p-4 transition-all hover:border-cyan/60">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold">{label}</p>
                        <p className="truncate text-sm text-muted-foreground">{value}</p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
                        >
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Connect With Me */}
            <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-xl">
              <h2 className="mb-6 text-2xl font-bold">
                <span className="text-gradient">Connect With Me</span>
              </h2>
              <ul className="grid grid-cols-3 gap-4">
                {socials.map(({ Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      download={href === "/resume.pdf" ? true : undefined}
                      aria-label={label}
                      className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-background/40 p-5 text-muted-foreground transition-all hover:-translate-y-1 hover:border-cyan/60 hover:text-cyan hover:glow-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                      <span className="text-xs font-medium">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available for Projects */}
            <div className="rounded-3xl border border-border bg-card/40 p-8 text-center backdrop-blur-xl">
              <p className="inline-flex items-center gap-2 font-bold text-green-400">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px] shadow-green-400/70" />
                Available for Projects
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Currently open to new roles, freelance projects, and collaboration opportunities.
                Let's build something extraordinary together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
