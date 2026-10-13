import { a as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as Button } from "./button-XQRpNwlV.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { c as Menu, o as Play, t as X, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQjGQAkA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "#projects",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#ai",
		label: "AI Workflow"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .6 },
		className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass-strong" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "font-display font-bold tracking-tight text-sm leading-none flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MAKENSON" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "NOEL"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden md:flex items-center gap-1",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors rounded-md",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hidden md:inline-flex text-sm font-medium px-5 py-2 rounded-full text-white hover:scale-[1.03] transition shadow-[0_0_30px_-8px_oklch(0.66_0.26_0/0.7)]",
						style: { background: "var(--gradient-brand)" },
						children: "Let's Talk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "md:hidden p-2 text-foreground",
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				className: "md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "px-3 py-3 text-sm font-mono uppercase tracking-widest border-b border-white/5 last:border-0 text-foreground/90 hover:text-accent",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-3 text-center text-sm font-medium px-5 py-3 rounded-full text-white",
					style: { background: "var(--gradient-brand)" },
					children: "Let's Talk"
				})]
			}) })]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-white/5 py-10 mt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-7xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Makenson \"Mak\" Noel. Built with care."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest",
				children: "Designed & developed by Mak."
			})]
		})
	});
}
var hero_cinematic_default = "/assets/hero-cinematic-D0yjfzys.jpg";
var InnerCanvas = (0, import_react.lazy)(() => import("./hero-canvas-inner-CLdp7pqW.mjs").then((m) => ({ default: m.InnerCanvas })));
function HeroCanvas() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const id = (window.requestIdleCallback ?? ((cb) => setTimeout(cb, 200)))(() => setMounted(true));
		return () => {
			if (typeof id === "number") clearTimeout(id);
		};
	}, []);
	if (!mounted) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 -z-10 opacity-70 mix-blend-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerCanvas, {})
		})
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative min-h-screen flex items-end overflow-hidden pt-24 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: hero_cinematic_default,
				alt: "",
				"aria-hidden": true,
				style: {
					scale,
					y
				},
				className: "absolute inset-0 -z-20 h-full w-full object-cover",
				width: 1920,
				height: 1280,
				fetchPriority: "high",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				style: { background: "linear-gradient(180deg, oklch(0.13 0.012 285 / 0.65) 0%, oklch(0.13 0.012 285 / 0.30) 35%, oklch(0.13 0.012 285 / 0.55) 70%, oklch(0.13 0.012 285) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10 grid-bg opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					opacity,
					y: useTransform(scrollYProgress, [0, 1], [0, -80])
				},
				className: "container mx-auto px-6 max-w-7xl relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						ease: "easeOut"
					},
					className: "space-y-8 max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .1 },
							className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-mono tracking-[0.18em] uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" }), "Computer Science Graduate · North Carolina"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .2,
								duration: .9
							},
							className: "text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-extrabold leading-[0.92] tracking-tight",
							children: [
								"I build digital",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"experiences that",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"hit ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand italic font-display",
									children: "different."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: .5 },
							className: "text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed",
							children: "Web apps, automation, and AI-driven systems that solve real problems and scale — built by Makenson \"Mak\" Noel."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .65 },
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "hero",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									children: ["View Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "glass",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									children: "About Me"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: "#about",
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								delay: 1,
								duration: .8
							},
							className: "inline-flex items-center gap-2 pt-12 text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 h-6 rounded-full border border-white/20 inline-flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-2.5 h-2.5 fill-current" })
							}), "Scroll to explore"]
						})
					]
				})
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function CustomCursor() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const [hover, setHover] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		setEnabled(true);
		const pos = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		};
		const ringPos = { ...pos };
		const onMove = (e) => {
			pos.x = e.clientX;
			pos.y = e.clientY;
			if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
			const interactive = !!e.target?.closest?.("a, button, [role='button'], input, textarea, [data-cursor='hover']");
			setHover(interactive);
		};
		let raf = 0;
		const tick = () => {
			ringPos.x += (pos.x - ringPos.x) * .18;
			ringPos.y += (pos.y - ringPos.y) * .18;
			if (ring.current) ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		window.addEventListener("mousemove", onMove);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
		};
	}, []);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dot,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-white mix-blend-difference",
		style: { transition: "width 200ms, height 200ms" }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ring,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-white/40 mix-blend-difference",
		style: {
			width: hover ? 56 : 32,
			height: hover ? 56 : 32,
			transition: "width 200ms ease, height 200ms ease, background-color 200ms",
			backgroundColor: hover ? "rgba(255,255,255,0.08)" : "transparent"
		}
	})] });
}
var About = (0, import_react.lazy)(() => import("./about-speg3tT6.mjs").then((m) => ({ default: m.About })));
var Projects = (0, import_react.lazy)(() => import("./projects-CByh0eG3.mjs").then((m) => ({ default: m.Projects })));
var AIBuilder = (0, import_react.lazy)(() => import("./ai-builder-BHds5MCQ.mjs").then((m) => ({ default: m.AIBuilder })));
var Showreel = (0, import_react.lazy)(() => import("./showreel-BLjS83wT.mjs").then((m) => ({ default: m.Showreel })));
var Skills = (0, import_react.lazy)(() => import("./skills-yNDqZsJS.mjs").then((m) => ({ default: m.Skills })));
var SkillsMarquee = (0, import_react.lazy)(() => import("./skills-marquee-uG6tA9Ex.mjs").then((m) => ({ default: m.SkillsMarquee })));
var Experience = (0, import_react.lazy)(() => import("./experience-CIqTZ216.mjs").then((m) => ({ default: m.Experience })));
var Contact = (0, import_react.lazy)(() => import("./contact-CtbEKrOu.mjs").then((m) => ({ default: m.Contact })));
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIBuilder, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showreel, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsMarquee, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
//#endregion
export { Index as component };
