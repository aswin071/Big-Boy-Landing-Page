import FadeUp from "./FadeUp";

const TESTIMONIALS = [
  {
    quote: "Saw measurable improvements in 3 weeks. The tracking actually works.",
    initial: "R",
    name: "Rahul",
    role: "39",
  },
  {
    quote: "Finally a framework that treats this seriously. No BS, just science.",
    initial: "A",
    name: "Alex",
    role: "37",
  },
  {
    quote: "The data insights are insane. You see exactly what makes the difference.",
    initial: "J",
    name: "James",
    role: "26",
  },
  {
    quote: "Changed my entire approach to intimacy and sex. My partner noticed immediately.",
    initial: "O",
    name: "Omar",
    role: "29",
  },
  {
    quote: "Didn't think I needed this. Now I can't imagine training without it.",
    initial: "M",
    name: "Mike",
    role: "30",
  },
  {
    quote: "Science-backed, no judgment, and it works. That's all I needed.",
    initial: "A",
    name: "Ahmed",
    role: "33",
  },
];

export default function Testimonials() {
  return (
    <section className="pt-[100px] pb-12 bg-white border-t border-border">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="text-center max-w-[500px] mx-auto">
          <div className="eyebrow mb-3">Beta Users</div>
          <h2 className="display-h2" style={{ fontSize: "clamp(36px, 4vw, 54px)" }}>
            Real men.
            <br />
            Real results.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[52px]">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-[18px] p-[26px] shadow-card"
              >
                <div className="text-gold text-[13px] tracking-[2px] mb-3.5">★★★★★</div>
                <p className="text-sm text-ink leading-[1.7] italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-2.5 mt-[18px]">
                  <div className="w-[38px] h-[38px] rounded-full bg-red flex items-center justify-center text-[15px] font-bold text-white flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-ink">{t.name}</div>
                    <div className="text-[11px] text-muted-soft">Age {t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
