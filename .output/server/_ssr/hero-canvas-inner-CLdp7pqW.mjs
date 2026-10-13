import { a as __toESM } from "../_runtime.mjs";
import { a as useFrame, c as require_jsx_runtime, i as Canvas, n as Icosahedron, r as MeshDistortMaterial, s as MathUtils, t as Float } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hero-canvas-inner-CLdp7pqW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Blob() {
	const ref = (0, import_react.useRef)(null);
	const mouse = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const onMove = (e) => {
			mouse.current.x = e.clientX / window.innerWidth * 2 - 1;
			mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	useFrame((state, delta) => {
		if (!ref.current) return;
		ref.current.rotation.x += delta * .15;
		ref.current.rotation.y += delta * .2;
		ref.current.position.x = MathUtils.lerp(ref.current.position.x, mouse.current.x * .6, .05);
		ref.current.position.y = MathUtils.lerp(ref.current.position.y, mouse.current.y * .4, .05);
		const t = state.clock.elapsedTime;
		const s = 1 + Math.sin(t * .8) * .04;
		ref.current.scale.set(s, s, s);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
		speed: 1.2,
		rotationIntensity: .4,
		floatIntensity: .8,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icosahedron, {
			ref,
			args: [1.6, 8],
			position: [
				0,
				0,
				0
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeshDistortMaterial, {
				color: "#8B5CF6",
				emissive: "#EC4899",
				emissiveIntensity: .35,
				roughness: .15,
				metalness: .85,
				distort: .45,
				speed: 2
			})
		})
	});
}
function InnerCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		dpr: [1, 1.5],
		camera: {
			position: [
				0,
				0,
				4.2
			],
			fov: 45
		},
		gl: {
			antialias: true,
			alpha: true,
			powerPreference: "high-performance"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .6 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					5,
					5,
					5
				],
				intensity: 1.1,
				color: "#EC4899"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-5,
					-3,
					-2
				],
				intensity: .9,
				color: "#F97316"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					0,
					3
				],
				intensity: 1.5,
				color: "#8B5CF6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blob, {})
		]
	});
}
//#endregion
export { InnerCanvas };
