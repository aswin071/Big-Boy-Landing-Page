import Image from "next/image";
import FadeUp from "./FadeUp";

const CHIPS = [
  "Why is my score low?",
  "How do Kegels help?",
  "Is stress affecting my libido?",
  "Should I see a doctor?",
  "How long before results?",
  "What to focus on today?",
];

export default function AICoachSection() {
  return (
    <section id="coach" className="bg-ink relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        <FadeUp className="px-8 lg:px-20 py-20 flex flex-col justify-center">
          <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gold mb-3">
            AI Health Coach
          </div>
          <h2
            className="font-display font-black text-white leading-[1.05] tracking-[-0.025em] mb-4"
            style={{ fontSize: "clamp(36px, 3.5vw, 52px)" }}
          >
            A health coach who
            <br />
            actually knows you.
          </h2>
          <p className="text-base text-white/50 leading-[1.7] mb-8 max-w-[400px]">
            Before every reply, it reads your actual score, sleep average, stress level, and program progress. The answers are never generic.
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="bg-white/[0.07] border border-white/[0.12] rounded-full px-4 py-2 text-[12px] font-medium text-white/70 cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-white/[0.13] hover:text-white hover:border-white/25"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-white/30">
            <div className="w-1.5 h-1.5 rounded-full bg-nutrition flex-shrink-0" />
            100% private · your data is never used for ads
          </div>
        </FadeUp>
        <div className="relative overflow-hidden min-h-[300px] lg:min-h-full">
          <Image
            src="/images/lifestyle-red-2.jpg"
            alt="Lifestyle photography"
            fill
            quality={85}
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(26,26,26,0.4) 0%, transparent 60%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
