import { motion } from "framer-motion";
import showreelImage from "@/assets/showreel-cinematic.jpg";

export function Showreel() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden min-h-[60vh] flex items-end">
          <img
            src={showreelImage}
            alt=""
            aria-hidden
            loading="lazy"
            width={1920}
            height={1088}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.13 0.012 285 / 0.10) 0%, oklch(0.13 0.012 285 / 0.55) 60%, oklch(0.13 0.012 285 / 0.85) 100%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative p-10 md:p-16 max-w-4xl"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
              I don't just write code.
              <br />
              I build solutions that
              <br />
              create <span className="text-gradient-brand italic font-display">freedom.</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
