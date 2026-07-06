const items = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS",
  "OpenAI", "Claude", "Lovable", "Vercel", "GitHub", "Docker", "Framer Motion",
  "Three.js", "Zapier", "REST APIs", "Webhooks",
];

export function SkillsMarquee() {
  const row = [...items, ...items];
  return (
    <section aria-hidden className="relative py-8 border-y border-white/5 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: "linear-gradient(90deg, oklch(0.13 0.012 285) 0%, transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: "linear-gradient(-90deg, oklch(0.13 0.012 285) 0%, transparent 100%)" }}
      />
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((s, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl font-bold text-foreground/40 hover:text-gradient-brand transition-colors"
          >
            {s} <span className="text-accent/60 mx-4">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
