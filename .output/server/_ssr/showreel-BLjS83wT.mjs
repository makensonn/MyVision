import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/showreel-BLjS83wT.js
var import_jsx_runtime = require_jsx_runtime();
var showreel_cinematic_default = "/assets/showreel-cinematic-DVD7Ez7E.jpg";
function Showreel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-6 max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-3xl overflow-hidden min-h-[60vh] flex items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: showreel_cinematic_default,
						alt: "",
						"aria-hidden": true,
						loading: "lazy",
						width: 1920,
						height: 1088,
						className: "absolute inset-0 w-full h-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, oklch(0.13 0.012 285 / 0.10) 0%, oklch(0.13 0.012 285 / 0.55) 60%, oklch(0.13 0.012 285 / 0.85) 100%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: { duration: .9 },
						className: "relative p-10 md:p-16 max-w-4xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white",
							children: [
								"I don't just write code.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"I build solutions that",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"create ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand italic font-display",
									children: "freedom."
								})
							]
						})
					})
				]
			})
		})
	});
}
//#endregion
export { Showreel };
