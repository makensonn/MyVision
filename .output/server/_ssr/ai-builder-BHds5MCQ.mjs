import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { a as Rocket, f as Lightbulb, n as WandSparkles, s as Network, x as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-builder-BHds5MCQ.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		icon: Lightbulb,
		title: "Ideate & Plan",
		desc: "Validate ideas and map workflows."
	},
	{
		icon: WandSparkles,
		title: "AI-Powered Build",
		desc: "Use AI tools to prototype, generate, and solve complex problems."
	},
	{
		icon: Network,
		title: "Engineer & Integrate",
		desc: "Build scalable apps, integrate APIs, and automate systems."
	},
	{
		icon: Rocket,
		title: "Deploy & Optimize",
		desc: "Ship fast, monitor, and continuously improve."
	}
];
var tools = [
	"Next.js",
	"React",
	"TypeScript",
	"Node.js",
	"PostgreSQL",
	"OpenAI",
	"Claude",
	"Lovable",
	"Vercel",
	"GitHub"
];
function AIBuilder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "ai",
		className: "relative py-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10",
			style: { background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.62 0.24 305 / 0.10), transparent 70%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-16 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] text-accent tracking-[0.25em] uppercase",
						children: "My Edge"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl md:text-6xl font-bold mt-4 leading-[1.05]",
						children: [
							"How I build with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "AI"
							}),
							" and move faster."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid lg:grid-cols-4 gap-4 relative",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "relative glass rounded-2xl p-6 hover:border-primary/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-full flex items-center justify-center border border-white/10",
									style: { background: "linear-gradient(135deg, oklch(0.62 0.24 305 / 0.25), oklch(0.66 0.26 0 / 0.25))" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "w-5 h-5 text-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: ["0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-lg mb-2",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: s.desc
							}),
							i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/60 z-10" })
						]
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase mb-6",
						children: "Tools I Use"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm px-4 py-2 rounded-full glass hover:border-accent/40 transition-colors",
							children: t
						}, t))
					})]
				})
			]
		})]
	});
}
//#endregion
export { AIBuilder };
