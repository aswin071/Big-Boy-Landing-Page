"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
}

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSpark = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparks((prev) => [...prev.slice(-10), newSpark]); // Keep last 10 sparks
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <SparkEffect key={spark.id} x={spark.x} y={spark.y} onComplete={() => {
            setSparks(prev => prev.filter(s => s.id !== spark.id));
          }} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function SparkEffect({ x, y, onComplete }: { x: number; y: number; onComplete: () => void }) {
  const lines = [200, 235, 270, 305, 340];

  useEffect(() => {
    const timer = setTimeout(onComplete, 600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {lines.map((angle) => (
        <motion.div
          key={angle}
          initial={{ scaleX: 0, opacity: 1, x: 0, y: 0 }}
          animate={{ 
            scaleX: [0, 1, 0.5], 
            opacity: [1, 1, 0],
            x: Math.cos((angle * Math.PI) / 180) * 35,
            y: Math.sin((angle * Math.PI) / 180) * 35,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: "14px",
            height: "2.5px",
            background: "#1A1A1A",
            borderRadius: "2px",
            transformOrigin: "left center",
            rotate: `${angle}deg`,
          }}
        />
      ))}
    </div>
  );
}
