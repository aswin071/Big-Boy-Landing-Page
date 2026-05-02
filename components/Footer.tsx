const COLUMNS = [
  {
    title: "Features",
    links: [
      { label: "Performance Score", href: "#features" },
      { label: "Daily Tasks", href: "#features" },
      { label: "Health Trackers", href: "#features" },
      { label: "Kegel Timer", href: "#features" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "30-Day Reset", href: "#programs" },
      { label: "Sleep Fix", href: "#programs" },
      { label: "Anxiety Reset", href: "#programs" },
      { label: "Confidence Builder", href: "#programs" },
    ],
  },
  {
    title: "Subdomains",
    links: [
      { label: "app.wellnessapp.com", href: "#" },
      { label: "coach.wellnessapp.com", href: "#" },
      { label: "early.wellnessapp.com", href: "#" },
      { label: "blog.wellnessapp.com", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/55 pt-16 pb-8">
      <div className="max-w-container mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="font-display text-[22px] font-black text-gold tracking-[0.06em] mb-2.5">
              BIGBOY
            </div>
            <div className="text-[13px] text-white/30 leading-[1.6] max-w-[210px] mb-[18px]">
              The private daily habit system for men who want to perform better.
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-nutrition bg-[rgba(39,174,96,0.1)] border border-[rgba(39,174,96,0.2)] rounded-full px-3 py-1">
              🔒 100% private
            </div>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-3.5">
                {c.title}
              </div>
              <ul className="list-none flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-white/45 no-underline transition-colors duration-200 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="text-[12px] text-white/20">
            © {new Date().getFullYear()} BigBoy. All rights reserved. Not a medical app.
          </div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-nutrition bg-[rgba(39,174,96,0.1)] border border-[rgba(39,174,96,0.2)] rounded-full px-3 py-1">
            🔒 100% private
          </div>
        </div>
      </div>
    </footer>
  );
}
