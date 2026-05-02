"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const PROGRAMS = [
  {
    duration: "30 Days",
    name: "30-Day Performance Reset",
    desc: "The complete system. Every pillar, every day.",
    color: "#C0392B",
    bg: "rgba(192,57,43,0.1)",
    progress: 7,
    total: 10,
  },
  {
    duration: "7 Days",
    name: "7-Day Sleep Fix",
    desc: "Fix your hormonal recovery at the source.",
    color: "#5B7FE8",
    bg: "rgba(91,127,232,0.1)",
    progress: 3,
    total: 7,
  },
  {
    duration: "7 Days",
    name: "7-Day Anxiety Reset",
    desc: "Break the performance anxiety loop for good.",
    color: "#9B59B6",
    bg: "rgba(155,89,182,0.1)",
    progress: 2,
    total: 7,
  },
  {
    duration: "7 Days",
    name: "7-Day Confidence Builder",
    desc: "Rebuild from the inside out.",
    color: "#B87A00",
    badgeColor: "#E8A028",
    bg: "rgba(232,160,40,0.1)",
    progress: 1,
    total: 7,
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-[100px] bg-cream">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="flex justify-between items-end flex-wrap gap-5">
          <div>
            <div className="eyebrow mb-3">Programs</div>
            <h2 className="display-h2" style={{ fontSize: "clamp(36px, 4vw, 54px)" }}>
              Structured plans.
              <br />
              Clear start. Clear end.
            </h2>
          </div>
          <p className="text-[15px] text-muted max-w-[340px] leading-[1.6]">
            Not a never-ending subscription to vague advice. Real programs with day-by-day plans.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div
            className="flex gap-[18px] overflow-x-auto py-10 px-10 -mx-10 no-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {PROGRAMS.map((p, i) => (
              <motion.div
                key={p.name}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.24 }}
                className="bg-white border border-border rounded-[20px] p-[26px] min-w-[230px] max-w-[230px] shadow-card flex-shrink-0 hover:shadow-card-hover transition-shadow"
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  className="inline-flex items-center text-[11px] font-semibold rounded-full px-2.5 py-1 mb-3"
                  style={{ background: p.bg, color: p.badgeColor || p.color }}
                >
                  {p.duration}
                </div>
                <div className="text-[17px] font-extrabold text-ink leading-[1.3] mb-1.5">{p.name}</div>
                <div className="text-[13px] text-muted leading-[1.5]">{p.desc}</div>
                <div className="flex gap-[3px] mt-[18px] flex-wrap">
                  {Array.from({ length: p.total }).map((_, j) => (
                    <div
                      key={j}
                      className="w-2.5 h-[5px] rounded-full"
                      style={{ background: j < p.progress ? p.badgeColor || p.color : "#E2E0D9" }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
