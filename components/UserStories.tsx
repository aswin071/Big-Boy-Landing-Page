"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import { useState } from "react";

const VIDEO_STORIES = [
  {
    name: "Ryan Cooper",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
  },
  {
    name: "Marcus Reed",
    role: "Fitness Instructor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600",
  },
  {
    name: "Hana Kim",
    role: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600",
  }
];

const TESTIMONIALS = [
  {
    text: "Habitline made my mornings feel manageable again.",
    name: "Maya Zang",
    role: "Student",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    text: "I used to ignore reminders from other apps, but these feel calm and well-timed. It's like the app knows when I'm actually able to do something.",
    name: "Ethan Miller",
    role: "Gym Trainer",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    text: "It's the first habit app that doesn't overwhelm me.",
    name: "Hannah Lee",
    role: "Content Writer",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "The weekly insights are what sold me. They show exactly where I fall off and help me adjust without feeling guilty or overwhelmed.",
    name: "Daniel Perez",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    text: "Focus blocks changed the way I work. I get more done in two hours now than what used to take half a day.",
    name: "Laura Kim",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    text: "I actually stick to my routines now. Small steps finally add up.",
    name: "Priya Shah",
    role: "Marketing Specialist",
    avatar: "https://i.pravatar.cc/100?img=20",
  },
  {
    text: "This is the first health app that doesn't overwhelm me. Everything feels calm, structured, and intentional.",
    name: "Andre Lewis",
    role: "University Student",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    text: "The simple visuals and progress cues make it easy to stay consistent every day.",
    name: "Kevin Brooks",
    role: "Fitness Coach",
    avatar: "https://i.pravatar.cc/100?img=18",
  },
  {
    text: "Feels tailored to my day and keeps me motivated.",
    name: "Sofia Martinez",
    role: "UX Researcher",
    avatar: "https://i.pravatar.cc/100?img=26",
  }
];

export default function UserStories() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const displayedTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Header (Keep existing) */}
        <div className="text-center mb-16">
          <FadeUp>
            <div className="inline-block px-3 py-1 bg-[#F5F5F7] border border-border rounded-full text-[11px] font-bold text-ink/60 mb-6">
              A closer look
            </div>
            <h2 className="font-display font-black text-ink leading-[1.1] mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              How people use<br />Habitline every day
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[13px] font-bold text-ink/60">4.5/5</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-orange-400 text-xs">★</span>
                ))}
              </div>
              <span className="text-[13px] text-ink/40">(Trusted by 1500+ users)</span>
            </div>
          </FadeUp>
        </div>

        {/* Video Stories Carousel (Keep existing) */}
        <div className="relative mb-24 overflow-hidden">
          <div className="flex justify-center items-center gap-6 py-10">
            {VIDEO_STORIES.map((story, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: activeIndex === i ? 1.05 : 0.9,
                  opacity: activeIndex === i ? 1 : 0.4,
                  filter: activeIndex === i ? "blur(0px)" : "blur(2px)",
                }}
                className="relative w-[320px] aspect-[9/16] rounded-[32px] overflow-hidden bg-gray-100 shadow-2xl cursor-pointer"
                onClick={() => setActiveIndex(i)}
              >
                <Image src={story.image} alt={story.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
                
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30" />
                  <div>
                    <div className="text-[12px] font-bold text-white">{story.name}</div>
                    <div className="text-[10px] text-white/60">{story.role}</div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : prev))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-black/5 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={() => setActiveIndex(prev => (prev < VIDEO_STORIES.length - 1 ? prev + 1 : prev))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-black/5 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
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
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                          <Image src={t.avatar} alt={t.name} width={48} height={48} className="object-cover h-full" />
                        </div>
                        <div>
                          <div className="text-[15px] font-black text-ink">{t.name}</div>
                          <div className="text-[13px] text-ink/40 font-bold">{t.role}</div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-ink">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </div>
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
