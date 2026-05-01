// BigBoy App — Programs Tab Component

const ProgramsTabStyles = {
  screen: { background: '#F9F8F4', minHeight: '100%', paddingBottom: 32, overflowY: 'auto' },
  header: { padding: '20px 16px 8px' },
  title: { fontSize: 22, fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.02em' },
  subtitle: { fontSize: 13, color: '#999', marginTop: 4 },
  sectionLabel: { fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#C0392B', padding: '16px 16px 8px' },
  activeProgram: {
    margin: '0 16px 4px',
    background: '#111',
    borderRadius: 20,
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
  },
  activeBg: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg, rgba(192,57,43,0.3), transparent)',
    pointerEvents: 'none',
  },
  activeBadge: {
    display: 'inline-flex', alignItems: 'center', gap: 4,
    background: 'rgba(192,57,43,0.2)', border: '1px solid rgba(192,57,43,0.4)',
    borderRadius: 9999, padding: '3px 10px',
    fontSize: 10, fontWeight: 600, color: '#E8554A',
    textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10,
  },
  activeName: { fontSize: 18, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 6 },
  activeDay: { fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 12 },
  progressBarBg: { height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 9999, overflow: 'hidden' },
  progressBarFill: { height: '100%', background: '#C0392B', borderRadius: 9999 },
  progressRow: { display: 'flex', justifyContent: 'space-between', marginTop: 6 },
  progressLabel: { fontSize: 11, color: 'rgba(255,255,255,0.4)' },
  continueBtn: {
    marginTop: 14, background: '#C0392B', color: 'white',
    border: 'none', borderRadius: 9999, padding: '10px 20px',
    fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
  },
  programsList: { padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 },
  programRow: {
    background: 'white', border: '1px solid #E8E6DF', borderRadius: 14,
    padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
  },
  programIcon: {
    width: 44, height: 44, borderRadius: 12,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 20, flexShrink: 0,
  },
  programName: { fontSize: 14, fontWeight: 700, color: '#1A1A1A', lineHeight: 1.3 },
  programMeta: { fontSize: 12, color: '#999', marginTop: 2 },
  programDuration: {
    marginLeft: 'auto', fontSize: 10, fontWeight: 600,
    padding: '4px 8px', borderRadius: 6,
    flexShrink: 0,
  },
  chevron: { color: '#CCC', fontSize: 16, marginLeft: 4 },
};

const PROGRAMS = [
  { id: 1, name: '30-Day Performance Reset', desc: 'The complete system', duration: '30 days', icon: '⚡', color: '#C0392B', bg: 'rgba(192,57,43,0.1)', textColor: '#C0392B' },
  { id: 2, name: '7-Day Sleep Fix', desc: 'Fix your hormonal recovery', duration: '7 days', icon: '🌙', color: '#5B7FE8', bg: 'rgba(91,127,232,0.1)', textColor: '#5B7FE8' },
  { id: 3, name: '7-Day Anxiety Reset', desc: 'Break the performance anxiety loop', duration: '7 days', icon: '🧘', color: '#9B59B6', bg: 'rgba(155,89,182,0.1)', textColor: '#9B59B6' },
  { id: 4, name: '7-Day Confidence Builder', desc: 'Rebuild from the inside out', duration: '7 days', icon: '🏆', color: '#E8A028', bg: 'rgba(232,160,40,0.1)', textColor: '#B87A00' },
];

function ProgramsTab() {
  const [selected, setSelected] = React.useState(null);

  return (
    <div style={ProgramsTabStyles.screen}>
      <div style={ProgramsTabStyles.header}>
        <div style={ProgramsTabStyles.title}>Programs</div>
        <div style={ProgramsTabStyles.subtitle}>Structured plans with a clear start and end</div>
      </div>

      {/* Active program */}
      <div style={ProgramsTabStyles.sectionLabel}>Active Program</div>
      <div style={ProgramsTabStyles.activeProgram}>
        <div style={ProgramsTabStyles.activeBg}></div>
        <div style={ProgramsTabStyles.activeBadge}>● Active</div>
        <div style={ProgramsTabStyles.activeName}>30-Day Performance Reset</div>
        <div style={ProgramsTabStyles.activeDay}>Day 7 of 30</div>
        <div style={ProgramsTabStyles.progressBarBg}>
          <div style={{ ...ProgramsTabStyles.progressBarFill, width: '23%' }}></div>
        </div>
        <div style={ProgramsTabStyles.progressRow}>
          <div style={ProgramsTabStyles.progressLabel}>23% complete</div>
          <div style={ProgramsTabStyles.progressLabel}>23 days left</div>
        </div>
        <button style={ProgramsTabStyles.continueBtn}>
          Continue Day 7
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* All programs */}
      <div style={ProgramsTabStyles.sectionLabel}>All Programs</div>
      <div style={ProgramsTabStyles.programsList}>
        {PROGRAMS.map(p => (
          <div key={p.id} style={{ ...ProgramsTabStyles.programRow, ...(selected === p.id ? { borderColor: p.color } : {}) }}
            onClick={() => setSelected(selected === p.id ? null : p.id)}>
            <div style={{ ...ProgramsTabStyles.programIcon, background: p.bg }}>{p.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={ProgramsTabStyles.programName}>{p.name}</div>
              <div style={ProgramsTabStyles.programMeta}>{p.desc}</div>
            </div>
            <div style={{ ...ProgramsTabStyles.programDuration, background: p.bg, color: p.textColor }}>
              {p.duration}
            </div>
            <div style={ProgramsTabStyles.chevron}>›</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { ProgramsTab });
