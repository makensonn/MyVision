import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Nav, Footer } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Toaster } from "@/components/ui/sonner";
import { CustomCursor } from "@/components/ui/custom-cursor";

const About = lazy(() => import("@/components/sections/about").then((m) => ({ default: m.About })));
const Projects = lazy(() => import("@/components/sections/projects").then((m) => ({ default: m.Projects })));
const AIBuilder = lazy(() => import("@/components/sections/ai-builder").then((m) => ({ default: m.AIBuilder })));
const Showreel = lazy(() => import("@/components/sections/showreel").then((m) => ({ default: m.Showreel })));
const Skills = lazy(() => import("@/components/sections/skills").then((m) => ({ default: m.Skills })));
const SkillsMarquee = lazy(() => import("@/components/sections/skills-marquee").then((m) => ({ default: m.SkillsMarquee })));
const Experience = lazy(() => import("@/components/sections/experience").then((m) => ({ default: m.Experience })));
const Contact = lazy(() => import("@/components/sections/contact").then((m) => ({ default: m.Contact })));

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
        <Suspense fallback={null}>
          <About />
          <Projects />
          <AIBuilder />
          <Showreel />
          <SkillsMarquee />
          <Skills />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
