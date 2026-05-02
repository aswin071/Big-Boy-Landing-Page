import FadeUp from "./FadeUp";
import IPhoneMockup from "./IPhoneMockup";

const PILLARS = [
  { name: "Physical", desc: "Kegel completion + workout streak", color: "#C0392B", w: 82 },
  { name: "Mental", desc: "stress management + wind-down", color: "#9B59B6", w: 68 },
  { name: "Hormonal", desc: "sleep quality + libido log", color: "#E8A028", w: 71 },
  { name: "Nutrition", desc: "hydration + alcohol log", color: "#27AE60", w: 90 },
  { name: "Habits", desc: "streak + task completion rate", color: "#2BB5D8", w: 85 },
];

export default function FeatureBento() {
  return (
    <section id="features" className="py-[100px] bg-white border-t border-border">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center order-1 lg:order-1">
            <IPhoneMockup screenStyle={{ minHeight: 520 }}>
              <div className="bg-[#111] px-[18px] py-6 h-full">
                <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-red mb-4">
                  Performance Score
                </div>
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-[110px] h-[110px]">
                    <svg width="110" height="110" viewBox="0 0 110 110">
                      <circle cx="55" cy="55" r="44" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                      <circle
                        cx="55"
                        cy="55"
                        r="44"
                        fill="none"
                        stroke="#C0392B"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="276.5"
                        strokeDashoffset="74"
                        transform="rotate(-90 55 55)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="font-mono text-[32px] font-bold text-white leading-none">74</div>
                      <div className="text-[9px] text-white/35 uppercase tracking-[0.06em] mt-0.5">score</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  {PILLARS.map((p) => (
                    <div key={p.name} className="flex items-center gap-2">
                      <div className="text-[11px] text-white/40 w-16">{p.name}</div>
                      <div className="flex-1 h-[5px] bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${p.w}%`, background: p.color }} />
                      </div>
                      <div className="text-[11px] font-semibold text-white/60 w-7 text-right">{p.w}%</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-1.5">
                  <div className="bg-white/5 rounded-[10px] p-2.5">
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.08em]">7-day avg</div>
                    <div className="text-[18px] font-bold text-white mt-0.5">71</div>
                  </div>
                  <div className="bg-[#C0392B]/15 rounded-[10px] p-2.5">
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.08em]">All-time best</div>
                    <div className="text-[18px] font-bold text-red-light mt-0.5">79</div>
                  </div>
                </div>
              </div>
            </IPhoneMockup>
          </div>
          <div className="order-2 lg:order-2">
            <div className="eyebrow mb-3">Performance Score</div>
            <h2 className="display-h2" style={{ fontSize: "clamp(36px, 4vw, 54px)" }}>
              Your daily
              <br />
              0–100 score.
            </h2>
            <p className="text-[17px] text-muted leading-[1.7] mt-3.5 max-w-[500px]" style={{ textWrap: "pretty" as const }}>
              Five pillars. One number. Physical, Mental, Hormonal, Nutrition, and Habits — all combined into a score that tells you exactly where you are and what to fix.
            </p>
            <div className="flex flex-col gap-3 mt-8">
              {PILLARS.map((p) => (
                <div key={p.name} className="flex gap-2.5 items-center">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                  <div className="text-sm text-muted">
                    <strong className="text-ink">{p.name}</strong> — {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
