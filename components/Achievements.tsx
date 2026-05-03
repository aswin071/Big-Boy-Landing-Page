"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  {
    name: "Leo",
    role: "Creative Professional",
    achievement: "10 Days",
    sub: "Hit hydration goals",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    color: "from-orange-500/80"
  },
  {
    name: "Ramya",
    role: "Software Developer",
    achievement: "Organized",
    sub: "Finally keeps his day organized with routine-based habit groups",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
    color: "from-yellow-500/80"
  },
  {
    name: "Maya",
    role: "Student",
    achievement: "21-day streak",
    sub: "Completed 21-day streak using BigBoy",
    image: "/images/maya.png",
    color: "from-red-500/80"
  },
  {
    name: "John",
    role: "Founder",
    achievement: "87%",
    sub: "Improved cycling performance",
    image: "/images/john.png",
    color: "from-blue-500/80"
  }
];

export default function Achievements() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <FadeUp>
            <h2 className="font-display font-black text-ink leading-[1.05] tracking-tight max-w-[600px]" style={{ fontSize: "clamp(32px, 5vw, 64px)" }}>
              What users are achieving with BigBoy
            </h2>
          </FadeUp>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group relative aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Top Info */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="flex items-center gap-1.5 text-white">
                    <span className="font-bold text-[15px]">{item.name}</span>
                    <span className="text-white/40 text-[13px]">—</span>
                    <span className="text-white/60 text-[13px]">{item.role}</span>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-8 left-6 right-6">
                  <h3 className="text-white font-black text-[32px] leading-tight mb-2">
                    {item.achievement}
                  </h3>
                  <p className="text-white/70 text-[14px] leading-relaxed line-clamp-2">
                    {item.sub}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
