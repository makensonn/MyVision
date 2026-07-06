import { motion } from "framer-motion";
import { Lightbulb, Wand2, Network, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Ideate & Plan", desc: "Validate ideas and map workflows." },
  { icon: Wand2, title: "AI-Powered Build", desc: "Use AI tools to prototype, generate, and solve complex problems." },
  { icon: Network, title: "Engineer & Integrate", desc: "Build scalable apps, integrate APIs, and automate systems." },
  { icon: Rocket, title: "Deploy & Optimize", desc: "Ship fast, monitor, and continuously improve." },
];

const tools = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI", "Claude", "Lovable", "Vercel", "GitHub"];

export function AIBuilder() {
  return (
    <section id="ai" className="relative py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.62 0.24 305 / 0.10), transparent 70%)",
        }}
      />
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase">My Edge</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-[1.05]">
            How I build with <span className="text-gradient-brand">AI</span> and move faster.
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10"
                  style={{ background: "linear-gradient(135deg, oklch(0.62 0.24 305 / 0.25), oklch(0.66 0.26 0 / 0.25))" }}
                >
                  <s.icon className="w-5 h-5 text-foreground" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/60 z-10" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase mb-6">Tools I Use</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full glass hover:border-accent/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
