import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-marquee-uG6tA9Ex.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	"Next.js",
	"React",
	"TypeScript",
	"Node.js",
	"PostgreSQL",
	"Tailwind CSS",
	"OpenAI",
	"Claude",
	"Lovable",
	"Vercel",
	"GitHub",
	"Docker",
	"Framer Motion",
	"Three.js",
	"Zapier",
	"REST APIs",
	"Webhooks"
];
function SkillsMarquee() {
	const row = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-hidden": true,
		className: "relative py-8 border-y border-white/5 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-y-0 left-0 w-32 z-10",
				style: { background: "linear-gradient(90deg, oklch(0.13 0.012 285) 0%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-y-0 right-0 w-32 z-10",
				style: { background: "linear-gradient(-90deg, oklch(0.13 0.012 285) 0%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-12 animate-marquee whitespace-nowrap",
				children: row.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-4xl md:text-6xl font-bold text-foreground/40 hover:text-gradient-brand transition-colors",
					children: [
						s,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent/60 mx-4",
							children: "✦"
						})
					]
				}, i))
			})
		]
	});
}
//#endregion
export { SkillsMarquee };
