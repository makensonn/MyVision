import { a as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as cn, t as Button } from "./button-XQRpNwlV.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { d as Linkedin, h as Github, i as Send, l as MapPin, p as Instagram, u as Mail } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CtbEKrOu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-6 max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-10 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "lg:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-accent tracking-[0.25em] uppercase",
							children: "Let's build something great"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-5xl md:text-7xl font-bold leading-[1.02]",
							children: [
								"Have a project",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"in mind? ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand italic font-display",
									children: "Let's talk."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground max-w-xl",
							children: "I'm always open to new opportunities, collaborations, and interesting ideas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
							onSubmit,
							className: "glass-strong rounded-2xl p-6 md:p-8 space-y-4 mt-8 max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "name",
										placeholder: "Your name",
										className: "bg-white/5 border-white/10 h-11"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "email",
										type: "email",
										placeholder: "you@company.com",
										className: "bg-white/5 border-white/10 h-11"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									name: "message",
									rows: 5,
									placeholder: "Tell me about your project…",
									className: "bg-white/5 border-white/10 resize-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										variant: "hero",
										size: "lg",
										disabled: sending,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }),
											" ",
											sending ? "Sending…" : "Send a message"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "ghost-line",
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "mailto:makensoninoel@gmail.com",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" }), " Email me"]
										})
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .1 },
					className: "lg:col-span-5 space-y-4 lg:pt-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:makensoninoel@gmail.com",
								className: "text-lg font-medium hover:text-accent transition-colors",
								children: "makensoninoel@gmail.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg font-medium inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-accent" }), " North Carolina, USA"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3",
								children: "Socials"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://github.com/makensonn",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "GitHub",
										className: "w-11 h-11 rounded-full border border-white/10 inline-flex items-center justify-center hover:border-accent/50 hover:text-accent transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.linkedin.com/in/makenson-noel/",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "LinkedIn",
										className: "w-11 h-11 rounded-full border border-white/10 inline-flex items-center justify-center hover:border-accent/50 hover:text-accent transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Instagram",
										className: "w-11 h-11 rounded-full border border-white/10 inline-flex items-center justify-center hover:border-accent/50 hover:text-accent transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-4 h-4" })
									})
								]
							})]
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { Contact };
