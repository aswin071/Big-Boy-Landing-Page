"use client";

import FadeUp from "./FadeUp";
import { useState } from "react";

const TESTIMONIALS = [
  {
    text: "Saw measurable improvements in 3 weeks. The tracking actually works.",
    name: "Rahul",
    role: "29",
  },
  {
    text: "Finally a framework that treats this seriously. No BS, just science.",
    name: "Alex",
    role: "37",
  },
  {
    text: "The data insights are insane. You see exactly what makes the difference.",
    name: "Hannah Lee",
    role: "26",
  },
  {
    text: "Changed my entire approach to intimacy and sex. My partner noticed immediately.",
    name: "Omar",
    role: "29",
  },
  {
    text: "Didn't think I needed this. Now I can't imagine training without it.",
    name: "Mike",
    role: "30",
  },
  {
    text: "Science-backed, no judgment, and it works. That's all I needed",
    name: "Ahmed",
    role: "33",
  }
];

export default function UserStories() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <div className="inline-block px-3 py-1 bg-[#F5F5F7] border border-border rounded-full text-[11px] font-bold text-ink/60 mb-6">
              A closer look
            </div>
            <h2 className="font-display font-black text-ink leading-[1.1] mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              How people use<br />BigBoy every day
            </h2>
          </FadeUp>
        </div>

        {/* Text Testimonials Masonry-style Grid */}
        <div className="relative">
          <div
            className={`columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 transition-all duration-1000 ease-in-out overflow-hidden ${!showAll ? 'max-h-[800px]' : 'max-h-[3000px]'}`}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="break-inside-avoid">
                <FadeUp delay={i * 0.05}>
                  <div className="bg-[#EFEFEF] p-10 rounded-[32px] border border-black/5 flex flex-col h-full hover:shadow-lg transition-all duration-300">
                    <p className="text-[17px] font-medium text-ink leading-[1.4] mb-10">
                      {t.text}
                    </p>
                    <div className="mt-auto">
                      <div className="text-[15px] font-black text-ink">{t.name}</div>
                      <div className="text-[13px] text-ink/40 font-medium">Age {t.role}</div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>

          {/* Fade Overlay when collapsed */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
          )}

          {/* Bottom CTA Overlay */}
          <div className={`flex justify-center mt-8 ${!showAll ? 'absolute bottom-8 left-0 right-0 z-20' : ''}`}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-black text-white px-10 py-4 rounded-full font-bold text-[15px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-all"
            >
              {showAll ? "Show Less" : "View all Reviews"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
