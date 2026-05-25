import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend, FiCheck } from "react-icons/fi";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr,1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">Contact</p>
          <h2 className="text-4xl font-bold md:text-5xl">Let's <span className="text-gradient">talk</span>.</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Drop a note about your project, role, or just to say hi. I read every message.
          </p>
          <div className="mt-8 space-y-2 font-mono text-sm text-muted-foreground">
            <p><span className="text-cyan">{">"}</span> hello@example.com</p>
            <p><span className="text-cyan">{">"}</span> linkedin.com/in/yourname</p>
            <p><span className="text-cyan">{">"}</span> github.com/yourname</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="relative rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-xl"
        >
          <div className="space-y-5">
            {[
              { name: "name", label: "Your name", type: "text" },
              { name: "email", label: "Email address", type: "email" },
              { name: "subject", label: "Subject", type: "text" },
            ].map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">{f.label}</label>
                <input
                  required
                  name={f.name}
                  type={f.type}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all focus:border-cyan focus:outline-none focus:glow-cyan"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all focus:border-cyan focus:outline-none focus:glow-cyan"
              />
            </motion.div>

            <button
              type="submit"
              disabled={loading || sent}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-hero px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-80"
            >
              <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              {sent ? (<><FiCheck /> Message sent</>) : loading ? "Sending…" : (<>Send message <FiSend className="transition-transform group-hover:translate-x-1" /></>)}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
