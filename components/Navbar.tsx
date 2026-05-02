"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const NAV_LINKS = [
  { label: "What's inside", href: "#how-it-works" },
  { label: "Use case", href: "#features" },
  { label: "Metrics", href: "#programs" },
  { label: "Smart Assist", href: "#coach" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const leftSpreadX = useTransform(scrollY, [0, 240], [-310, -470]);
  const rightSpreadX = useTransform(scrollY, [0, 240], [310, 470]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-0 right-0 z-[200] flex items-center justify-center px-5 sm:px-8"
    >
      {/* Logo pill */}
      <motion.a
        href="#"
        style={{ x: leftSpreadX, WebkitBackdropFilter: "blur(20px)" }}
        className="absolute right-1/2 flex items-center gap-2.5 bg-white/95 backdrop-blur-xl border border-white/60 rounded-xl pl-2 pr-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_32px_rgba(0,0,0,0.18)] transition-shadow"
      >
        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E8554A] via-[#C0392B] to-[#9A7D2F] flex items-center justify-center text-[13px] text-white font-display font-black">
          ✦
        </span>
        <span className="font-display text-[16px] font-black text-ink tracking-[0.04em]">
          BIGBOY
        </span>
      </motion.a>

      {/* Center links pill */}
      <ul
        className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-xl border border-white/60 rounded-xl px-2 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.12)] list-none"
        style={{ WebkitBackdropFilter: "blur(20px)" }}
      >
        {NAV_LINKS.map((l, idx) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`inline-block text-[15px] font-medium text-ink no-underline px-8 py-3 rounded-[16px] transition-colors duration-200 ${
                idx === 0 ? "bg-[#E5E5E7]" : "hover:bg-black/[0.04]"
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right store pill — single pill containing two black tile icons */}
      <motion.div
        style={{ x: rightSpreadX, WebkitBackdropFilter: "blur(20px)" }}
        className="absolute left-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-xl border border-white/60 rounded-xl p-1.5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
      >
        <a
          href="#"
          aria-label="Download on the App Store"
          className="w-10 h-10 rounded-[12px] bg-[#1A1A1A] flex items-center justify-center hover:bg-black transition"
        >
          <AppleIcon />
        </a>
        <a
          href="#"
          aria-label="Get it on Google Play"
          className="w-10 h-10 rounded-[12px] bg-[#1A1A1A] flex items-center justify-center hover:bg-black transition"
        >
          <PlayIcon />
        </a>
      </motion.div>
    </motion.nav>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M3.18 23.76c.3.17.64.24.98.2l12.64-12.64L12.82 7.4 3.18 23.76zM20.44 10.72l-2.78-1.6-3.27 3.27 3.27 3.27 2.82-1.62c.8-.46.8-1.86-.04-2.32zM2.01 1.33C1.9 1.6 1.83 1.9 1.83 2.24v19.52c0 .34.07.64.18.9l.09.08 10.94-10.95v-.25L2.1 1.25l-.09.08zM12.82 16.6l3.98 3.98-12.64 7.28c-.37.22-.78.27-1.16.16l9.82-11.42z" />
    </svg>
  );
}
