import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:maknoel.dev@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
    }, 500);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase">Let's build something great</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.02]">
              Have a project
              <br />
              in mind? <span className="text-gradient-brand italic font-display">Let's talk.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              I'm always open to new opportunities, collaborations, and interesting ideas.
            </p>

            <motion.form
              onSubmit={onSubmit}
              className="glass-strong rounded-2xl p-6 md:p-8 space-y-4 mt-8 max-w-xl"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" placeholder="Your name" className="bg-white/5 border-white/10 h-11" />
                <Input name="email" type="email" placeholder="you@company.com" className="bg-white/5 border-white/10 h-11" />
              </div>
              <Textarea name="message" rows={5} placeholder="Tell me about your project…" className="bg-white/5 border-white/10 resize-none" />
              <div className="flex flex-wrap gap-3">
                <Button type="submit" variant="hero" size="lg" disabled={sending}>
                  <Send className="w-4 h-4" /> {sending ? "Sending…" : "Send a message"}
                </Button>
                <Button asChild variant="ghost-line" size="lg">
                  <a href="mailto:makensoninoel@gmail.com">
                    <Mail className="w-4 h-4" /> Email me
                  </a>
                </Button>
              </div>
            </motion.form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-4 lg:pt-20"
          >
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Email</p>
              <a href="mailto:makensoninoel@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
                makensoninoel@gmail.com
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Location</p>
              <p className="text-lg font-medium inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" /> North Carolina, USA
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Socials</p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/makensonn" target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="w-11 h-11 rounded-full border border-white/10 inline-flex items-center justify-center hover:border-accent/50 hover:text-accent transition">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/makenson-noel/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full border border-white/10 inline-flex items-center justify-center hover:border-accent/50 hover:text-accent transition">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
                  className="w-11 h-11 rounded-full border border-white/10 inline-flex items-center justify-center hover:border-accent/50 hover:text-accent transition">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
