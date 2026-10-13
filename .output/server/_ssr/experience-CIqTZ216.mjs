import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { y as Briefcase } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-CIqTZ216.js
var import_jsx_runtime = require_jsx_runtime();
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-primary tracking-widest",
					children: "04 // EXPERIENCE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl md:text-5xl font-bold mt-2",
					children: ["Where I've ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "shipped"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative pl-8 md:pl-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -left-8 md:-left-12 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center glow-ring",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-2.5 h-2.5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between flex-wrap gap-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-bold",
									children: "Computer Science Graduate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary font-medium",
									children: "in North Carolina"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground px-3 py-1 rounded-full border border-white/10",
									children: "Current"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed mb-4",
								children: "Building software."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/85" })
						]
					})]
				})]
			})]
		})
	});
}
//#endregion
export { Experience };
