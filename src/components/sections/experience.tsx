import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-14">
          <span className="font-mono text-xs text-primary tracking-widest">04 // EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Where I've <span className="text-gradient">shipped</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-8 md:-left-12 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center glow-ring">
              <Briefcase className="w-2.5 h-2.5 text-primary" />
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Developer</h3>
                  <p className="text-primary font-medium">The Driscoll Firm, PC</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground px-3 py-1 rounded-full border border-white/10">
                  Current
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built automation systems, integrations, dashboards, and AI-assisted internal tools
                across legal intake and operations — turning manual workflows into reliable software.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/85">
                <li className="flex gap-2"><span className="text-primary">▸</span> Legal intake automation across CRM &amp; case systems</li>
                <li className="flex gap-2"><span className="text-primary">▸</span> Internal dashboards with reporting &amp; PDF export</li>
                <li className="flex gap-2"><span className="text-primary">▸</span> Webhook + REST API integrations</li>
                <li className="flex gap-2"><span className="text-primary">▸</span> AI-powered onboarding &amp; knowledge tooling</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
