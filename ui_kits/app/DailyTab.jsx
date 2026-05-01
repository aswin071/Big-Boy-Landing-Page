// BigBoy App — Daily Tab Component
// Renders the main daily screen: greeting, score ring, streak, tasks, tracker cards

const DailyTabStyles = {
  screen: {
    background: '#F9F8F4',
    minHeight: '100%',
    paddingBottom: 32,
    overflowY: 'auto',
  },
  header: {
    background: '#111111',
    padding: '20px 20px 24px',
    position: 'relative',
    borderRadius: '0 0 24px 24px',
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 400,
    marginBottom: 2,
  },
  greetingName: {
    fontSize: 20,
    color: 'white',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  streakBadge: {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 20,
    padding: '6px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 13,
    color: 'white',
    fontWeight: 600,
  },
  scoreSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  scoreRingWrap: {
    position: 'relative',
    width: 88,
    height: 88,
    flexShrink: 0,
  },
  scoreTextWrap: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 26,
    fontWeight: 700,
    color: 'white',
    lineHeight: 1,
  },
  scoreLabel: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginTop: 2,
  },
  pillarsWrap: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  pillarRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  pillarName: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.5)',
    width: 60,
    flexShrink: 0,
  },
  pillarBarBg: {
    flex: 1,
    height: 4,
    background: 'rgba(255,255,255,0.1)',
    borderRadius: 9999,
    overflow: 'hidden',
  },
  pillarBarFill: {
    height: '100%',
    borderRadius: 9999,
  },
  pillarVal: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: 600,
    width: 26,
    textAlign: 'right',
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: '#C0392B',
    padding: '16px 16px 8px',
  },
  tasksList: {
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  taskCard: {
    background: 'white',
    border: '1px solid #E8E6DF',
    borderRadius: 12,
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  taskCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    border: '2px solid #E8E6DF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    cursor: 'pointer',
  },
  taskCheckDone: {
    background: '#C0392B',
    border: '2px solid #C0392B',
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: '#1A1A1A',
    flex: 1,
  },
  taskMeta: {
    fontSize: 11,
    color: '#999',
    marginTop: 1,
  },
  taskDone: {
    color: '#BBBBBB',
    textDecoration: 'line-through',
  },
  trackerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8,
    padding: '0 16px',
  },
  trackerCard: {
    borderRadius: 12,
    padding: '12px 14px',
    position: 'relative',
    overflow: 'hidden',
  },
  trackerIcon: {
    fontSize: 18,
    marginBottom: 4,
  },
  trackerName: {
    fontSize: 10,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.65)',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  trackerVal: {
    fontSize: 18,
    fontWeight: 700,
    color: 'white',
    lineHeight: 1.2,
  },
  trackerSub: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.55)',
    marginTop: 2,
  },
  miniChart: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 2,
    marginTop: 6,
    height: 20,
  },
  chartBar: {
    flex: 1,
    borderRadius: 2,
    background: 'rgba(255,255,255,0.3)',
  },
};

const PILLARS = [
  { name: 'Physical', pct: 82, color: '#C0392B' },
  { name: 'Mental', pct: 68, color: '#9B59B6' },
  { name: 'Hormonal', pct: 71, color: '#E8A028' },
  { name: 'Nutrition', pct: 90, color: '#27AE60' },
  { name: 'Habits', pct: 85, color: '#2BB5D8' },
];

const TASKS = [
  { id: 1, title: 'Morning check-in', meta: '60 seconds · personalises your day', done: true },
  { id: 2, title: 'Kegel session', meta: '3 sets · 10 reps', done: true },
  { id: 3, title: 'Hydration log', meta: '2.5L target', done: false },
  { id: 4, title: 'Workout', meta: '30 min cardio or strength', done: false },
  { id: 5, title: 'Evening wind-down', meta: '10 min breathing + journal', done: false },
];

const TRACKERS = [
  { label: 'Sleep', icon: '🌙', value: '6.8h', sub: 'last night', color: '#5B7FE8', bars: [6,5,7,6,8,7,6] },
  { label: 'Energy', icon: '⚡', value: '7/10', sub: 'today', color: '#F0A928', bars: [5,6,8,7,6,7,7] },
  { label: 'Stress', icon: '🧠', value: '3/10', sub: 'today', color: '#9B59B6', bars: [7,5,6,4,5,4,3] },
  { label: 'Libido', icon: '❤️', value: '8/10', sub: 'today', color: '#E84C8A', bars: [6,7,7,8,6,7,8] },
  { label: 'Water', icon: '💧', value: '1.8L', sub: 'of 2.5L', color: '#2BB5D8', bars: [2,1,3,2,2,2,2] },
  { label: 'Alcohol', icon: '🍷', value: '0', sub: 'units today', color: '#6C7A89', bars: [2,0,1,0,0,0,0] },
];

function DailyTab({ onTabChange }) {
  const [tasks, setTasks] = React.useState(TASKS);

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const score = 74;
  const circumference = 2 * Math.PI * 32;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div style={DailyTabStyles.screen}>
      {/* Header */}
      <div style={DailyTabStyles.header}>
        <div style={DailyTabStyles.headerTop}>
          <div>
            <div style={DailyTabStyles.greeting}>Good morning,</div>
            <div style={DailyTabStyles.greetingName}>Arjun 👋</div>
          </div>
          <div style={DailyTabStyles.streakBadge}>
            🔥 <span>21 days</span>
          </div>
        </div>

        {/* Score ring + pillars */}
        <div style={DailyTabStyles.scoreSection}>
          <div style={DailyTabStyles.scoreRingWrap}>
            <svg width="88" height="88" viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7"/>
              <circle cx="44" cy="44" r="32" fill="none" stroke="#C0392B" strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                transform="rotate(-90 44 44)"/>
            </svg>
            <div style={DailyTabStyles.scoreTextWrap}>
              <div style={DailyTabStyles.scoreNum}>{score}</div>
              <div style={DailyTabStyles.scoreLabel}>score</div>
            </div>
          </div>
          <div style={DailyTabStyles.pillarsWrap}>
            {PILLARS.map(p => (
              <div key={p.name} style={DailyTabStyles.pillarRow}>
                <div style={DailyTabStyles.pillarName}>{p.name}</div>
                <div style={DailyTabStyles.pillarBarBg}>
                  <div style={{ ...DailyTabStyles.pillarBarFill, width: `${p.pct}%`, background: p.color }}></div>
                </div>
                <div style={DailyTabStyles.pillarVal}>{p.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Tasks */}
      <div style={DailyTabStyles.sectionLabel}>Daily Tasks</div>
      <div style={DailyTabStyles.tasksList}>
        {tasks.map(task => (
          <div key={task.id} style={DailyTabStyles.taskCard} onClick={() => toggleTask(task.id)}>
            <div style={{ ...DailyTabStyles.taskCheck, ...(task.done ? DailyTabStyles.taskCheckDone : {}) }}>
              {task.done && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </div>
            <div>
              <div style={{ ...DailyTabStyles.taskTitle, ...(task.done ? DailyTabStyles.taskDone : {}) }}>{task.title}</div>
              <div style={DailyTabStyles.taskMeta}>{task.meta}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Health Trackers */}
      <div style={DailyTabStyles.sectionLabel}>Health Trackers</div>
      <div style={DailyTabStyles.trackerGrid}>
        {TRACKERS.map(t => {
          const maxBar = Math.max(...t.bars);
          return (
            <div key={t.label} style={{ ...DailyTabStyles.trackerCard, background: t.color }}>
              <div style={DailyTabStyles.trackerIcon}>{t.icon}</div>
              <div style={DailyTabStyles.trackerName}>{t.label}</div>
              <div style={DailyTabStyles.trackerVal}>{t.value}</div>
              <div style={DailyTabStyles.trackerSub}>{t.sub}</div>
              <div style={DailyTabStyles.miniChart}>
                {t.bars.map((b, i) => (
                  <div key={i} style={{ ...DailyTabStyles.chartBar, height: `${(b / maxBar) * 100}%` }}></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { DailyTab });
