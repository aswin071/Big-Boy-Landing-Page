"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "./FadeUp";

const FAQS = [
  {
    q: "How many habits can I track?",
    a: "You can track as many as you want, but most users keep 5–8 habits for better consistency.",
  },
  {
    q: "Do reminders work across all devices?",
    a: "Yes, Habitline syncs seamlessly across iPhone, iPad, and Apple Watch so you never miss a beat.",
  },
  {
    q: "What happens if I miss a day?",
    a: "Habitline uses gentle recovery suggestions to help you get back on track without feeling guilty.",
  },
  {
    q: "Can I create routines for different times of day?",
    a: "Absolutely. You can set up specific stacks for Morning, Afternoon, and Evening routines.",
  },
  {
    q: "Is Habitline free to use?",
    a: "We offer a generous free tier with all the essential features, and a Pro version for advanced AI insights.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#F5F5F7]/50">
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <FadeUp>
              <div className="inline-block px-4 py-1.5 bg-white border border-border rounded-full text-[12px] font-bold text-ink/60 mb-6 shadow-sm">
                Common questions
              </div>
              <h2 className="font-display font-black text-ink leading-[1.05] tracking-tight mb-12" style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}>
                Frequently<br />asked questions
              </h2>

              {/* Support Card */}
              <div className="bg-white p-10 rounded-[32px] border border-border shadow-sm max-w-[400px]">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(249,115,22,0.3)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-black text-ink mb-6">Can&apos;t find your answer?</h3>
                <button className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-full font-bold text-[14px] shadow-lg hover:bg-black transition-all">
                  Contact us
                </button>
              </div>
            </FadeUp>
          </div>

          {/* Right Side Accordion */}
          <div className="flex flex-col gap-4">
            {FAQS.map((f, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="bg-white rounded-[24px] border border-border shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-7 text-left transition-all"
                  >
                    <span className="text-[17px] font-bold text-ink tracking-tight">{f.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${open === i ? 'bg-black text-white' : 'bg-[#F5F5F7] text-ink/40'}`}>
                      {open === i ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-7 pb-7 text-[15px] text-muted leading-relaxed max-w-[90%]">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
