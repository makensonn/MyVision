import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cinematic.jpg";
import { HeroCanvas } from "@/components/three/hero-canvas";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden pt-24 pb-20">
      {/* cinematic backdrop */}
      <motion.img
        src={heroImage}
        alt=""
        aria-hidden
        style={{ scale, y }}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.13 0.012 285 / 0.65) 0%, oklch(0.13 0.012 285 / 0.30) 35%, oklch(0.13 0.012 285 / 0.55) 70%, oklch(0.13 0.012 285) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <HeroCanvas />

      <motion.div style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [0, -80]) }} className="container mx-auto px-6 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-mono tracking-[0.18em] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            Computer Science Graduate · North Carolina
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-extrabold leading-[0.92] tracking-tight"
          >
            I build digital
            <br />
            experiences that
            <br />
            hit <span className="text-gradient-brand italic font-display">different.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
          >
            Web apps, automation, and AI-driven systems that solve real problems and scale —
            built by Makenson "Mak" Noel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Button asChild size="lg" variant="hero">
              <a href="#projects">
                View Work <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href="#about">About Me</a>
            </Button>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="inline-flex items-center gap-2 pt-12 text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="w-6 h-6 rounded-full border border-white/20 inline-flex items-center justify-center">
              <Play className="w-2.5 h-2.5 fill-current" />
            </span>
            Scroll to explore
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
