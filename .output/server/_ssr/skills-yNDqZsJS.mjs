import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-yNDqZsJS.js
var import_jsx_runtime = require_jsx_runtime();
var groups = [
	{
		label: "Frontend",
		skills: [
			"Next.js",
			"React",
			"TypeScript",
			"JavaScript",
			"HTML",
			"CSS",
			"Tailwind CSS"
		]
	},
	{
		label: "Backend & APIs",
		skills: [
			"Node.js",
			"REST APIs",
			"Webhooks",
			"PostgreSQL",
			"SQL"
		]
	},
	{
		label: "AI Tools",
		skills: [
			"ChatGPT",
			"Claude",
			"Lovable",
			"OpenAI API"
		]
	},
	{
		label: "Tools",
		skills: [
			"Git",
			"GitHub",
			"Vercel",
			"Docker",
			"Postman",
			"Zapier"
		]
	}
];
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-primary tracking-widest",
					children: "03 // SKILLS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl md:text-5xl font-bold mt-2",
					children: ["Tools I ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "build with"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5",
				children: groups.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .08 },
					className: "glass rounded-2xl p-6 hover:border-primary/30 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-mono text-primary tracking-widest mb-4",
						children: g.label.toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: g.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm text-foreground/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-primary/70" }), s]
						}, s))
					})]
				}, g.label))
			})]
		})
	});
}
//#endregion
export { Skills };
