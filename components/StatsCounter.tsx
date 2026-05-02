"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { target: 10, suffix: "k+", label: "men using the app" },
  { target: 4.8, suffix: "★", label: "App Store rating", isFloat: true },
  { target: 74, suffix: "pts", label: "avg score improvement" },
  { target: 89, suffix: "%", label: "complete streak past Day 14" },
];

export default function StatsCounter() {
  return (
    <section className="pb-[100px] bg-white">
      <div className="max-w-container mx-auto px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-white rounded-[20px] overflow-hidden border border-border shadow-card">
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  target,
  suffix,
  label,
  isFloat,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  isFloat?: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const prog = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      setVal(eased * target);
      if (prog < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className="px-7 py-9 text-center border-border border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0"
    >
      <div className="font-display text-[48px] font-black leading-none tracking-[-0.03em] text-ink">
        {isFloat ? val.toFixed(1) : Math.round(val)}
        <span className="text-red">{suffix}</span>
      </div>
      <div className="text-[13px] text-muted mt-1.5 leading-[1.4]">{label}</div>
    </div>
  );
}
