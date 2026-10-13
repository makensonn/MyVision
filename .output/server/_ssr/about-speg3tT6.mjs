import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { t as Button } from "./button-XQRpNwlV.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { v as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-speg3tT6.js
var import_jsx_runtime = require_jsx_runtime();
var mak_portrait_default = "/assets/mak-portrait-jTQEW4Ay.webp";
var stats = [
	{
		value: "4+",
		label: "Years Experience"
	},
	{
		value: "20+",
		label: "Projects Built"
	},
	{
		value: "∞",
		label: "Curiosity"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-6 max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				className: "grid lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-accent tracking-[0.25em] uppercase",
							children: "About Me"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl md:text-6xl font-bold leading-[1.05]",
							children: [
								"I'm a developer who bridges code, design,",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "automation, and AI."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground leading-relaxed max-w-2xl",
							children: "I design and build modern web applications, automate workflows, and integrate powerful tools to help businesses operate smarter and move faster."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-6 pt-4 max-w-lg",
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-4xl md:text-5xl font-bold text-gradient-brand leading-none",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2",
								children: s.label
							})] }, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "hero",
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/resume",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 h-4 w-4" }), " View Resume"]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .96
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: { duration: .8 },
					className: "lg:col-span-5 relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong glow-ring",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: mak_portrait_default,
								alt: "Portrait of Makenson 'Mak' Noel",
								width: 1024,
								height: 1280,
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-0 mix-blend-overlay opacity-50",
								style: { background: "linear-gradient(160deg, oklch(0.62 0.24 305 / 0.25) 0%, transparent 45%, oklch(0.66 0.26 0 / 0.35) 100%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-x-0 bottom-0 h-1/2",
								style: { background: "linear-gradient(180deg, transparent 0%, oklch(0.13 0.012 285 / 0.85) 100%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col justify-end p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-6xl md:text-7xl font-display italic text-white leading-none drop-shadow-2xl",
									children: "Makenson"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-mono tracking-[0.3em] uppercase text-white/80 mt-2",
									children: "Noel · Computer Science Graduate"
								})]
							})
						]
					})
				})]
			})
		})
	});
}
//#endregion
export { About };
