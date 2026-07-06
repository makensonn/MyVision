import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import makPortrait from "@/assets/mak-portrait.webp";


const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "∞", label: "Curiosity" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-8">
            <span className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase">About Me</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
              I'm a developer who bridges code, design,{" "}
              <span className="text-gradient-brand">automation, and AI.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I design and build modern web applications, automate workflows, and integrate
              powerful tools to help businesses operate smarter and move faster.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl md:text-5xl font-bold text-gradient-brand leading-none">{s.value}</div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">{s.label}</div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" variant="hero" className="mt-4">
              <a href="/resume">
                <Download className="mr-1 h-4 w-4" /> View Resume
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong glow-ring">
              <img
                src={makPortrait}
                alt="Portrait of Makenson 'Mak' Noel"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-overlay opacity-50"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.62 0.24 305 / 0.25) 0%, transparent 45%, oklch(0.66 0.26 0 / 0.35) 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/2"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, oklch(0.13 0.012 285 / 0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-6xl md:text-7xl font-display italic text-white leading-none drop-shadow-2xl">
                  Mak
                </p>
                <p className="text-xs font-mono tracking-[0.3em] uppercase text-white/80 mt-2">
                  Noel · Software Developer
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
