import { lazy, Suspense, useEffect, useState } from "react";

const InnerCanvas = lazy(() =>
  import("./hero-canvas-inner").then((m) => ({ default: m.InnerCanvas })),
);

export function HeroCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Defer to idle so it never blocks the hero paint
    const w = window as unknown as { requestIdleCallback?: (cb: () => void) => number };
    const schedule = w.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200));
    const id = schedule(() => setMounted(true));
    return () => {
      if (typeof id === "number") clearTimeout(id);
    };
  }, []);
  if (!mounted) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-70 mix-blend-screen"
    >
      <Suspense fallback={null}>
        <InnerCanvas />
      </Suspense>
    </div>
  );
}
