import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText, Sparkles, Github } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import bridgeOpsImg from "@/assets/project-bridgeops.webp";
import gasmeImg from "@/assets/project-gasme.webp";
import shopwaveImg from "@/assets/project-shopwave.webp";
import aslImg from "@/assets/project-asl.webp";
import flowpilotImg from "@/assets/project-flowpilot.webp";
import portfolioOsImg from "@/assets/project-portfolio-os.webp";

type Project = {
  title: string;
  tagline: string;
  tech: string[];
  image: string;
  status: "live" | "soon";
  links?: { demo?: string; caseStudy?: string; github?: string };
};

const projects: Project[] = [
  {
    title: "BridgeOps",
    tagline:
      "A modern legal operations command center — unifying intake, leads, cases, phone activity, workflows, and analytics into one clean dashboard. Portfolio-safe mock data, inspired by Filevine, Neos, Lead Docket & Dialpad.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Postgres", "APIs"],
    image: bridgeOpsImg,
    status: "live",
    links: { github: "https://github.com/makensonn/BridgeOps", demo: "https://bridge-ops.vercel.app/", caseStudy: "#" },
  },
  {
    title: "GasMe",
    tagline:
      "Smart fuel savings & route planning app — finds the cheapest nearby stations, plans optimized routes, and shows estimated savings in real time.",
    tech: ["React Native", "Mapbox", "Node.js"],
    image: gasmeImg,
    status: "live",
    links: { github: "https://github.com/makensonn/gasme.app", demo: "https://gasme-9f9h67y5a-makensonns-projects.vercel.app/", caseStudy: "#" },
  },
  {
    title: "ShopWave",
    tagline:
      "A modern e-commerce experience with a bold neon aesthetic — full storefront, cart, checkout, and product discovery flows.",
    tech: ["Next.js", "Stripe", "Shopify", "Tailwind"],
    image: shopwaveImg,
    status: "live",
    links: { github: "https://github.com/makensonn/ShopWave", demo: "https://shop-wave-beta.vercel.app/", caseStudy: "#" },
  },
  {
    title: "SignSpeak",
    tagline:
      "Real-time American Sign Language recognition using computer vision and on-device ML — 21-point landmark tracking with sub-17ms latency.",
    tech: ["Python", "MediaPipe", "TensorFlow"],
    image: aslImg,
    status: "live",
    links: { github: "https://github.com/makensonn/SignSpeak", demo: "https://sign-speak-green.vercel.app/", caseStudy: "#" },
  },
  {
    title: "Portfolio OS",
    tagline:
      "A developer showcase platform — a fully themeable portfolio builder with projects, blog, resume, and contact modules baked in.",
    tech: ["Next.js", "MDX", "Tailwind", "Framer Motion"],
    image: portfolioOsImg,
    status: "live",
    links: { github: "https://github.com/makensonn/MyVision", demo: "https://www.makenson.dev/", caseStudy: "#" },
  },
  {
    title: "FlowPilot",
    tagline:
      "AI-driven workflow & automation platform — visual builder for triggers, enrichment, decisioning, and multi-tool actions across Slack, Notion, HubSpot, and OpenAI.",
    tech: ["Next.js", "OpenAI", "Zapier API", "Postgres"],
    image: flowpilotImg,
    status: "soon",
    links: { github: "https://github.com/makensonn", demo: "https://bridge-ops.vercel.app/", caseStudy: "#" },
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const isSoon = p.status === "soon";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (i % 4) * 0.08, duration: 0.6 }}
    >
      <TiltCard className="group relative glass rounded-2xl overflow-hidden hover:border-primary/40 transition-colors duration-300 h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            width={1600}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, oklch(0.13 0.012 285 / 0.20) 60%, oklch(0.13 0.012 285 / 0.75) 100%)",
            }}
          />
          {isSoon && (
            <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded-full glass border border-accent/40 text-accent">
              <Sparkles className="w-3 h-3" /> Coming Soon
            </span>
          )}
          <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-white/90 -rotate-45 group-hover:rotate-0 transition-transform z-10" />
        </div>

        <div className="p-6 space-y-4 relative">
          <div>
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {p.links && (
            <div className="flex items-center gap-4 pt-2 border-t border-white/5">
              {p.links.github && (
                <a href={p.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-foreground/80 hover:text-accent transition">
                  <Github className="w-3 h-3" /> Code
                </a>
              )}
              {p.links.demo && p.links.demo !== "#" && (
                <a href={p.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-foreground/80 hover:text-accent transition">
                  <ExternalLink className="w-3 h-3" /> Live
                </a>
              )}
              {p.links.caseStudy && p.links.caseStudy !== "#" && (
                <a href={p.links.caseStudy} className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-foreground/80 hover:text-accent transition">
                  <FileText className="w-3 h-3" /> Case Study
                </a>
              )}
            </div>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <div className="space-y-4">
            <span className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase">Featured Work</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] max-w-2xl">
              Things I've built <br />
              <span className="text-gradient-brand">that make an impact.</span>
            </h2>
          </div>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground max-w-xs">
            A neon-drenched Vice City lineup — live builds & drops rolling out soon.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
