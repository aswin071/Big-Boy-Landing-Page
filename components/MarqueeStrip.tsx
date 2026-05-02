const TAGS = [
  "#MensHealth",
  "#PerformanceScore",
  "#DailyHabits",
  "#PrivateAICoach",
  "#SleepBetter",
  "#ReduceAnxiety",
  "#KegelsWork",
  "#StressManagement",
  "#30DayReset",
  "#ConfidenceBuilder",
  "#ScienceBacked",
  "#StartToday",
];

export default function MarqueeStrip() {
  const looped = [...TAGS, ...TAGS];
  return (
    <div className="overflow-hidden bg-white border-b border-border py-3.5">
      <div className="flex w-max animate-marquee gap-0">
        {looped.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center px-5 py-1 text-[12px] font-semibold text-muted tracking-[0.02em] border-r border-border whitespace-nowrap"
          >
            <span className="text-red mr-2 text-[10px]">✦</span>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
