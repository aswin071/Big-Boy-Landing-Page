"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "./FadeUp";

const FAQS = [
  {
    q: "Is this app private?",
    a: "Completely. Your health data stays on your device. We never sell, share, or use your data for advertising. The AI coach receives anonymised summaries only.",
  },
  {
    q: "How is this different from just using ChatGPT?",
    a: "The AI coach reads your actual data — your score, sleep average, stress level, and program progress — before every reply. ChatGPT knows nothing about you. BigBoy's coach knows everything that matters.",
  },
  {
    q: "Do Kegel exercises actually work?",
    a: "Yes. Multiple peer-reviewed studies show pelvic floor training improves sexual function, stamina, and control. The BigBoy timer guides structured sets with progressive overload — exactly like a gym workout.",
  },
  {
    q: "How long before I see results?",
    a: "Most users report measurable changes in their Performance Score within 9–14 days of daily consistency. Physical and hormonal improvements typically become noticeable within 3–6 weeks.",
  },
  {
    q: "Is this a medical app?",
    a: "No. BigBoy is a daily habit and wellness app. It does not provide medical diagnoses or replace professional medical advice. The AI coach is designed to refer you to a professional when appropriate.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[100px] bg-white border-t border-border">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="eyebrow mb-3">FAQ</div>
            <h2
              className="font-display font-black text-ink"
              style={{ fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 1.0, letterSpacing: "-0.025em" }}
            >
              Common
              <br />
              questions.
            </h2>
            <p className="text-[15px] text-muted leading-[1.7] mt-[18px] max-w-[320px]">
              Everything you want to know, answered honestly.
            </p>
          </div>
          <div className="flex flex-col">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="border-b border-border"
                style={{ borderTop: i === 0 ? "1px solid #E2E0D9" : undefined }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 bg-transparent border-none cursor-pointer font-body text-[15px] font-semibold text-ink text-left gap-4"
                >
                  <span>{f.q}</span>
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-base font-light flex-shrink-0 transition-all duration-200"
                    style={{
                      background: open === i ? "#C0392B" : "#E2E0D9",
                      color: open === i ? "#fff" : "#666",
                    }}
                  >
                    {open === i ? "×" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-[18px] text-sm text-muted leading-[1.7]">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
