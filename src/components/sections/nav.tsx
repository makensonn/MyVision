import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#ai", label: "AI Workflow" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass-strong" : ""}`}>
          <a href="#" className="font-display font-bold tracking-tight text-sm leading-none flex flex-col">
            <span>MAKENSON</span>
            <span className="text-muted-foreground">NOEL</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors rounded-md"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex text-sm font-medium px-5 py-2 rounded-full text-white hover:scale-[1.03] transition shadow-[0_0_30px_-8px_oklch(0.66_0.26_0/0.7)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-mono uppercase tracking-widest border-b border-white/5 last:border-0 text-foreground/90 hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 text-center text-sm font-medium px-5 py-3 rounded-full text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                Let's Talk
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Makenson "Mak" Noel. Built with care.</p>
        <p className="font-mono text-xs uppercase tracking-widest">Designed & developed by Mak.</p>
      </div>
    </footer>
  );
}
