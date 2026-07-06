import { motion } from "framer-motion";

const groups = [
  { label: "Frontend", skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Backend & APIs", skills: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL", "SQL"] },
  { label: "AI Tools", skills: ["ChatGPT", "Claude", "Lovable", "OpenAI API"] },
  { label: "Tools", skills: ["Git", "GitHub", "Vercel", "Docker", "Postman", "Zapier"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-14">
          <span className="font-mono text-xs text-primary tracking-widest">03 // SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Tools I <span className="text-gradient">build with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xs font-mono text-primary tracking-widest mb-4">{g.label.toUpperCase()}</h3>
              <ul className="space-y-2">
                {g.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-foreground/90">
                    <span className="w-1 h-1 rounded-full bg-primary/70" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
