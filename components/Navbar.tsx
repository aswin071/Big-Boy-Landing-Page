"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import { useStoreModal } from "./StoreModal";

const NAV_LINKS = [
  { label: "What's inside", href: "#how-it-works" },
  { label: "Use case", href: "#features" },
  { label: "Smart Assist", href: "#ai-suggestions" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#how-it-works");
  const { openStoreModal } = useStoreModal();

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHref(`#${id}`);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);
  const { scrollY } = useScroll();
  
  // Desktop animations (Large screens)
  const leftSpreadX = useTransform(scrollY, [0, 240], [-310, -470]);
  const rightSpreadX = useTransform(scrollY, [0, 240], [310, 470]);

  // Mobile animations (Small/Medium screens)
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  return (
    <>
      {/* --- DESKTOP NAV (Visible on Large Screens) --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-0 right-0 z-[200] hidden lg:flex items-center justify-center px-8"
      >
        {/* Logo pill */}
        <motion.a
          href="#"
          style={{ x: leftSpreadX, WebkitBackdropFilter: "blur(20px)" }}
          className="absolute right-1/2 overflow-hidden bg-white/95 backdrop-blur-xl border border-white/60 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_32px_rgba(0,0,0,0.18)] transition-shadow"
        >
          <Image src="/images/logo-light.jpg" alt="BigBoy" width={140} height={64} className="object-cover" style={{ display: "block" }} />
        </motion.a>

        {/* Center links pill */}
        <ul
          className="flex items-center gap-2 bg-white/95 backdrop-blur-xl border border-white/60 rounded-xl px-2 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.12)] list-none"
          style={{ WebkitBackdropFilter: "blur(20px)" }}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); setActiveHref(l.href); scrollToSection(l.href); }}
                className={`inline-block text-[15px] font-medium text-ink no-underline px-8 py-3 rounded-[16px] transition-colors duration-200 ${
                  activeHref === l.href ? "bg-[#E5E5E7]" : "hover:bg-black/[0.04]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right store pill */}
        <motion.div
          style={{ x: rightSpreadX, WebkitBackdropFilter: "blur(20px)" }}
          className="absolute left-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-xl border border-white/60 rounded-xl p-1.5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
        >
          <button onClick={openStoreModal} className="w-10 h-10 rounded-[12px] bg-[#1A1A1A] flex items-center justify-center hover:bg-black transition text-white">
            <FaApple size={18} />
          </button>
          <button onClick={openStoreModal} className="w-10 h-10 rounded-[12px] bg-[#1A1A1A] flex items-center justify-center hover:bg-black transition text-white">
            <FaGooglePlay size={16} />
          </button>
        </motion.div>
      </motion.nav>


      {/* --- MOBILE/MEDIUM NAV (Visible on Small/Medium Screens) --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ scale: navScale, opacity: navOpacity }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-[200] flex lg:hidden justify-center px-4"
      >
        <div className="bg-white/90 backdrop-blur-2xl border border-white/60 rounded-xl px-5 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-center justify-between w-full max-w-[600px]">
          
          {/* Logo */}
          <a href="#" className="overflow-hidden rounded-xl">
            <Image src="/images/logo-light.jpg" alt="BigBoy" width={130} height={46} className="object-cover" />
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button onClick={openStoreModal} className="w-9 h-9 rounded-[10px] bg-[#F5F5F7] flex items-center justify-center hover:bg-black hover:text-white transition-all text-ink/80">
                <FaApple size={16} />
              </button>
              <button onClick={openStoreModal} className="w-9 h-9 rounded-[10px] bg-[#F5F5F7] flex items-center justify-center hover:bg-black hover:text-white transition-all text-ink/80">
                <FaGooglePlay size={14} />
              </button>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-[12px] bg-[#F5F5F7] flex flex-col items-center justify-center hover:bg-black hover:text-white transition-all text-ink group"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.span 
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -6 }}
                  className="absolute h-[2px] w-5 bg-current rounded-full"
                />
                <motion.span 
                  animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 10 : 0 }}
                  className="absolute h-[2px] w-5 bg-current rounded-full"
                />
                <motion.span 
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 6 }}
                  className="absolute h-[2px] w-5 bg-current rounded-full"
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mx-4 mt-4 bg-white rounded-[32px] border border-border shadow-2xl p-8 overflow-hidden z-50"
            >
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); setActiveHref(link.href); setIsOpen(false); scrollToSection(link.href); }}
                    className={`text-[22px] font-black transition-colors ${activeHref === link.href ? "text-orange-500" : "text-ink hover:text-orange-500"}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

