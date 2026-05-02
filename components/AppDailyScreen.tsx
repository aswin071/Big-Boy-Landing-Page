type Props = {
  compact?: boolean;
};

export default function AppDailyScreen({ compact = false }: Props) {
  return (
    <>
      <div className="bg-[#111] px-4 pt-3.5 pb-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-[11px] text-white/40 mb-0.5">Good morning,</div>
            <div className="text-[17px] font-bold text-white">Arjun 👋</div>
          </div>
          <div className="bg-white/[0.08] border border-white/[0.12] rounded-[20px] px-2.5 py-[5px] text-[11px] text-white font-semibold">
            🔥 21 days
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="relative w-[72px] h-[72px] flex-shrink-0">
            <svg width="72" height="72" viewBox="0 0 72 72" className="block">
              <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
              <circle
                cx="36"
                cy="36"
                r="28"
                fill="none"
                stroke="#C0392B"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="175.9"
                strokeDashoffset="47"
                transform="rotate(-90 36 36)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="font-mono text-[22px] font-bold text-white leading-none">74</div>
              <div className="text-[8px] text-white/35 uppercase tracking-[0.06em] mt-px">score</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            {[
              { name: "Physical", w: 82, c: "#C0392B" },
              { name: "Mental", w: 68, c: "#9B59B6" },
              { name: "Hormonal", w: 71, c: "#E8A028" },
              { name: "Nutrition", w: 90, c: "#27AE60" },
              { name: "Habits", w: 85, c: "#2BB5D8" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-1.5">
                <div className="text-[9px] text-white/40 w-[50px] flex-shrink-0">{p.name}</div>
                <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${p.w}%`, background: p.c }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F9F8F4]">
        <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#C0392B] px-3.5 pt-2.5 pb-1.5">
          Daily Tasks
        </div>
        <div className="px-3 flex flex-col gap-1.5">
          <Task title="Morning check-in" meta="60 seconds" done compact={compact} />
          <Task title="Kegel session" meta="3 sets · 10 reps" done compact={compact} />
          <Task title="Hydration log" meta="2.5L target" highlight compact={compact} />
        </div>
        {!compact && (
          <>
            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#C0392B] px-3.5 pt-2.5 pb-1.5">
              Health Trackers
            </div>
            <div className="grid grid-cols-2 gap-1.5 px-3 pb-3">
              <Tracker icon="🌙" name="Sleep" val="6.8h" color="#5B7FE8" />
              <Tracker icon="⚡" name="Energy" val="7/10" color="#F0A928" />
              <Tracker icon="🧠" name="Stress" val="3/10" color="#9B59B6" />
              <Tracker icon="❤️" name="Libido" val="8/10" color="#E84C8A" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

function Task({
  title,
  meta,
  done,
  highlight,
  compact,
}: {
  title: string;
  meta?: string;
  done?: boolean;
  highlight?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className="bg-white border rounded-[10px] px-3 py-[9px] flex items-center gap-[9px]"
      style={{ borderColor: highlight ? "#C0392B" : "#EEEEEE" }}
    >
      {done ? (
        <div className="w-[18px] h-[18px] rounded-[9px] bg-[#C0392B] flex items-center justify-center flex-shrink-0">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      ) : (
        <div className="w-[18px] h-[18px] rounded-[9px] border-2 border-[#E8E6DF] flex-shrink-0" />
      )}
      <div>
        <div
          className={`text-[11px] font-semibold ${done ? "text-[#BBB] line-through" : "text-ink"}`}
        >
          {title}
        </div>
        {meta && !compact && <div className="text-[9px] text-[#999]">{meta}</div>}
      </div>
    </div>
  );
}

function Tracker({ icon, name, val, color }: { icon: string; name: string; val: string; color: string }) {
  return (
    <div className="rounded-[10px] px-2.5 py-[9px]" style={{ background: color }}>
      <div className="text-sm mb-0.5">{icon}</div>
      <div className="text-[8px] font-semibold text-white/60 uppercase tracking-[0.05em]">{name}</div>
      <div className="text-[15px] font-bold text-white leading-snug">{val}</div>
    </div>
  );
}
