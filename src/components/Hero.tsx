import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { FiArrowRight, FiDownload, FiChevronDown } from "react-icons/fi";

// Code-split the Three.js scene so it never blocks first paint / hydration.
const HeroScene = lazy(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })));

// Only load the heavy 3D scene on large screens — skip the ~890KB Three.js
// bundle on mobile/tablet, where it's only a faint background decoration.
function useDesktopScene() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mq.matches && !reduce.matches);
    update();
    mq.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);
  return enabled;
}

const title = "Building Software That Ships";

export function Hero() {
  const showScene = useDesktopScene();
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-cyan opacity-30 blur-[100px] animate-blob" />
        <div
          className="absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-purple opacity-30 blur-[100px] animate-blob"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-pink opacity-25 blur-[100px] animate-blob"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      {/* 3D scene — desktop only (skips the heavy Three.js bundle on mobile) */}
      {showScene && (
        <div className="absolute inset-0 z-10 opacity-70">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan glow-cyan" /> Madhan P · Java Full
            Stack Developer
          </motion.p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            {title.split(" ").map((word, wi) => (
              <span key={wi} className="mr-3 inline-block">
                {word.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.3 + (wi * 6 + i) * 0.035, duration: 0.5 }}
                    className={`inline-block ${wi === 1 ? "text-gradient" : ""}`}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            I build and ship production web platforms with Java, Spring Boot, REST APIs, and MySQL —
            owning the full stack from schema design to CI/CD deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              View My Work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:border-cyan hover:glow-cyan"
            >
              <FiDownload className="transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-muted-foreground"
      >
        <Link to="/about" aria-label="Go to About">
          <FiChevronDown className="h-7 w-7 animate-float" />
        </Link>
      </motion.div>
    </section>
  );
}
