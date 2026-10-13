globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-BFtF2FPr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bb9-DFARlpG4VVpNA+ZfYfhPaeHsC0Y\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 3001,
		"path": "../public/assets/about-BFtF2FPr.js"
	},
	"/assets/ai-builder-BC0zDwMh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1044-hePWOSmxAUHwNv0K8rChBuH9L1o\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 4164,
		"path": "../public/assets/ai-builder-BC0zDwMh.js"
	},
	"/assets/arrow-right-CQJCT6Kp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-eG12UVYBAHq5anEkszPrBv+npfY\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 155,
		"path": "../public/assets/arrow-right-CQJCT6Kp.js"
	},
	"/assets/button-CVrQjy8O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25a3f-aWFXPAaZNiULZ/gtMlswfN+xaX8\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 154175,
		"path": "../public/assets/button-CVrQjy8O.js"
	},
	"/assets/contact-BPZEmzgA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174a-lRsaqwovaEaEUu7991kwxnm9HFU\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 5962,
		"path": "../public/assets/contact-BPZEmzgA.js"
	},
	"/assets/dist-Y7dEbTgJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f18-V7tsjxB2twfwI7VgTQ6NDzlMd1g\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 32536,
		"path": "../public/assets/dist-Y7dEbTgJ.js"
	},
	"/assets/download-DHyPEnOr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de-u7uAqzM9s1Sdw6E4rlLDpSSXL2I\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 222,
		"path": "../public/assets/download-DHyPEnOr.js"
	},
	"/assets/experience-KhXqPBD3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d7-A92XayR62vPD6JtnGk94zXwb+RA\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 2007,
		"path": "../public/assets/experience-KhXqPBD3.js"
	},
	"/assets/hero-cinematic-D0yjfzys.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b005-8JpBi5lgkYgJ7TD7cbroAqjrDG8\"",
		"mtime": "2026-10-13T14:11:07.444Z",
		"size": 307205,
		"path": "../public/assets/hero-cinematic-D0yjfzys.jpg"
	},
	"/assets/index-B9RwsmxX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53251-7HQWKAiL9ubWiAfW54mpulhJDBI\"",
		"mtime": "2026-10-13T14:11:07.438Z",
		"size": 340561,
		"path": "../public/assets/index-B9RwsmxX.js"
	},
	"/assets/mak-portrait-jTQEW4Ay.webp": {
		"type": "image/webp",
		"etag": "\"25e28-MtbnM8/Ne1WelvmRSvXTCe/0PY8\"",
		"mtime": "2026-10-13T14:11:07.447Z",
		"size": 155176,
		"path": "../public/assets/mak-portrait-jTQEW4Ay.webp"
	},
	"/assets/map-pin-qyv45_bQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"280-6HfIocVY4bvi7Mu5fCFtOhuP3Aw\"",
		"mtime": "2026-10-13T14:11:07.442Z",
		"size": 640,
		"path": "../public/assets/map-pin-qyv45_bQ.js"
	},
	"/assets/project-asl-DCHcrFKB.webp": {
		"type": "image/webp",
		"etag": "\"26be6-BPq5DNTZS/CCO+VF/a57qjpDnq0\"",
		"mtime": "2026-10-13T14:11:07.447Z",
		"size": 158694,
		"path": "../public/assets/project-asl-DCHcrFKB.webp"
	},
	"/assets/project-bridgeops-CB4YIcfK.webp": {
		"type": "image/webp",
		"etag": "\"262ce-aivaF0+vWQ+aYcM3FSWlf3+T9pY\"",
		"mtime": "2026-10-13T14:11:07.447Z",
		"size": 156366,
		"path": "../public/assets/project-bridgeops-CB4YIcfK.webp"
	},
	"/assets/project-flowpilot-DRndP55g.webp": {
		"type": "image/webp",
		"etag": "\"26eb8-7comlWinGNrl/htaVLRRBbEbYzg\"",
		"mtime": "2026-10-13T14:11:07.447Z",
		"size": 159416,
		"path": "../public/assets/project-flowpilot-DRndP55g.webp"
	},
	"/assets/project-gasme-DylW-kbP.webp": {
		"type": "image/webp",
		"etag": "\"28df2-JCVxm/X2+m+l7sw50wptazIvEZ0\"",
		"mtime": "2026-10-13T14:11:07.450Z",
		"size": 167410,
		"path": "../public/assets/project-gasme-DylW-kbP.webp"
	},
	"/assets/project-portfolio-os-CUJCtdu0.webp": {
		"type": "image/webp",
		"etag": "\"25934-TVdsqbcnK99T3K8yzaiKCxNjgkY\"",
		"mtime": "2026-10-13T14:11:07.450Z",
		"size": 153908,
		"path": "../public/assets/project-portfolio-os-CUJCtdu0.webp"
	},
	"/assets/project-shopwave-BeCXT-gc.webp": {
		"type": "image/webp",
		"etag": "\"2fd3a-Pvd/VrlAJmv6L9CxkHS9e6x8E+Q\"",
		"mtime": "2026-10-13T14:11:07.450Z",
		"size": 195898,
		"path": "../public/assets/project-shopwave-BeCXT-gc.webp"
	},
	"/assets/projects-BRNX7Efv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"203d-LWwxNxo0WbFlJdFyg/+74BAG6UI\"",
		"mtime": "2026-10-13T14:11:07.442Z",
		"size": 8253,
		"path": "../public/assets/projects-BRNX7Efv.js"
	},
	"/assets/routes-BCxXymvK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5aa7-a1D8D7a+RBGX8GU+/PA4VUWgWqc\"",
		"mtime": "2026-10-13T14:11:07.444Z",
		"size": 23207,
		"path": "../public/assets/routes-BCxXymvK.js"
	},
	"/assets/showreel-BLIZEBxa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4fb-5MLcvTeujffuJ5QtWCE3hvpnLhg\"",
		"mtime": "2026-10-13T14:11:07.444Z",
		"size": 1275,
		"path": "../public/assets/showreel-BLIZEBxa.js"
	},
	"/assets/resume-BUHMb0aZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cc9-Uzjepq9hGRg6QTheBDv7vbCnhNE\"",
		"mtime": "2026-10-13T14:11:07.442Z",
		"size": 7369,
		"path": "../public/assets/resume-BUHMb0aZ.js"
	},
	"/assets/github-MJfe_Ke4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d-mEKtJKO5KhBH4qw7VSt5KVwd3Us\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 397,
		"path": "../public/assets/github-MJfe_Ke4.js"
	},
	"/assets/hero-canvas-inner-BVuPQAOl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d7f03-AuKhvSJFzkvd3S8nqo56gbX2xkw\"",
		"mtime": "2026-10-13T14:11:07.439Z",
		"size": 884483,
		"path": "../public/assets/hero-canvas-inner-BVuPQAOl.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"12b1f6-wjn21DIQSFlPQaK1zABRU8tLRSk\"",
		"mtime": "2026-10-13T14:11:09.027Z",
		"size": 1225206,
		"path": "../public/favicon.png"
	},
	"/assets/showreel-cinematic-DVD7Ez7E.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e5a6-M2D9hyGS0fRSHEbuvY41aQprY3Q\"",
		"mtime": "2026-10-13T14:11:07.450Z",
		"size": 189862,
		"path": "../public/assets/showreel-cinematic-DVD7Ez7E.jpg"
	},
	"/assets/skills-l0QUAQPo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"625-DtHtQQkNvuwg8t/cGiqVt4S3CQk\"",
		"mtime": "2026-10-13T14:11:07.444Z",
		"size": 1573,
		"path": "../public/assets/skills-l0QUAQPo.js"
	},
	"/assets/skills-marquee-BaX6qcMx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"449-RTYhFnpW8f8gXTu1IhZwoEzwLNw\"",
		"mtime": "2026-10-13T14:11:07.444Z",
		"size": 1097,
		"path": "../public/assets/skills-marquee-BaX6qcMx.js"
	},
	"/assets/styles-CGNeKH6k.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14a96-x150uHBi7zVkpQQ9jHNIAy7bfV0\"",
		"mtime": "2026-10-13T14:11:07.450Z",
		"size": 84630,
		"path": "../public/assets/styles-CGNeKH6k.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_m3zxuh = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_m3zxuh
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
