import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-12 backdrop-blur md:p-16">
          <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-cyan opacity-30 blur-3xl animate-blob" />
          <div
            className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-pink opacity-30 blur-3xl animate-blob"
            style={{ animationDelay: "-6s" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <h2 className="text-4xl font-bold md:text-6xl">
              Let's build <span className="text-gradient">something great</span> together
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              I'm open to full-time roles and freelance projects. Have an idea or an opportunity?
              I'd love to hear about it.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Send a Message{" "}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:madhanp370@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:border-cyan hover:glow-cyan"
              >
                <FiCalendar /> Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
