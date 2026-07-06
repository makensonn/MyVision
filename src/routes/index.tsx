import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { AIBuilder } from "@/components/sections/ai-builder";
import { Showreel } from "@/components/sections/showreel";
import { Skills } from "@/components/sections/skills";
import { SkillsMarquee } from "@/components/sections/skills-marquee";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Toaster } from "@/components/ui/sonner";
import { CustomCursor } from "@/components/ui/custom-cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makenson 'Mak' Noel — Software Developer & AI Builder" },
      {
        name: "description",
        content:
          "Premium portfolio of Makenson 'Mak' Noel — Software Developer crafting cinematic web apps, AI-driven systems, and automation that scale.",
      },
      { property: "og:title", content: "Makenson 'Mak' Noel — Software Developer & AI Builder" },
      {
        property: "og:description",
        content: "Web apps, automation, and AI-driven systems that solve real problems and scale.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <AIBuilder />
        <Showreel />
        <SkillsMarquee />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
