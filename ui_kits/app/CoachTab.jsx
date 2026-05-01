// BigBoy App — Health Coach Tab Component

const CoachTabStyles = {
  screen: { background: '#0D0D0D', minHeight: '100%', display: 'flex', flexDirection: 'column' },
  header: {
    padding: '16px 16px 12px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    display: 'flex', alignItems: 'center', gap: 10,
  },
  coachAvatar: {
    width: 36, height: 36, borderRadius: 18,
    background: 'linear-gradient(135deg, #C0392B, #E8554A)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 16, flexShrink: 0,
  },
  coachName: { fontSize: 15, fontWeight: 700, color: 'white' },
  coachSub: { fontSize: 11, color: '#27AE60', marginTop: 1 },
  dataChip: {
    marginLeft: 'auto',
    background: 'rgba(39,174,96,0.15)', border: '1px solid rgba(39,174,96,0.3)',
    borderRadius: 9999, padding: '4px 10px',
    fontSize: 10, fontWeight: 600, color: '#27AE60',
  },
  messagesWrap: {
    flex: 1, overflowY: 'auto', padding: '16px',
    display: 'flex', flexDirection: 'column', gap: 12,
  },
  systemMsg: {
    textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.25)',
    padding: '4px 0',
  },
  msgRow: { display: 'flex', gap: 8 },
  msgRowUser: { flexDirection: 'row-reverse' },
  avatarSmall: {
    width: 28, height: 28, borderRadius: 14,
    background: 'linear-gradient(135deg, #C0392B, #E8554A)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 12, flexShrink: 0, marginTop: 2,
  },
  bubble: {
    maxWidth: '78%', padding: '10px 14px',
    fontSize: 13, lineHeight: 1.6, borderRadius: 16,
  },
  aiBubble: {
    background: '#1C1C1C', color: 'rgba(255,255,255,0.88)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '4px 16px 16px 16px',
  },
  userBubble: {
    background: '#C0392B', color: 'white',
    borderRadius: '16px 4px 16px 16px',
    marginLeft: 'auto',
  },
  dataContextBar: {
    margin: '0 12px 8px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 10, padding: '8px 12px',
    display: 'flex', gap: 12, flexWrap: 'wrap',
  },
  dataItem: { fontSize: 11, color: 'rgba(255,255,255,0.4)' },
  dataVal: { color: 'rgba(255,255,255,0.75)', fontWeight: 600 },
  chipsWrap: {
    padding: '8px 12px',
    display: 'flex', gap: 6, overflowX: 'auto',
    paddingBottom: 8,
  },
  chip: {
    flexShrink: 0, background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 9999, padding: '6px 12px',
    fontSize: 12, color: 'rgba(255,255,255,0.7)',
    cursor: 'pointer', whiteSpace: 'nowrap',
  },
  inputRow: {
    padding: '8px 12px 12px',
    display: 'flex', gap: 8, alignItems: 'center',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  input: {
    flex: 1, background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 9999, padding: '10px 16px',
    fontSize: 13, color: 'rgba(255,255,255,0.8)',
    fontFamily: "'DM Sans', sans-serif", outline: 'none',
  },
  sendBtn: {
    width: 36, height: 36, borderRadius: 18,
    background: '#C0392B', border: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', flexShrink: 0,
  },
};

const INITIAL_MESSAGES = [
  {
    id: 1, from: 'ai',
    text: "Hey Arjun. I've read your data for today — sleep at 6.8hrs, stress at 3/10, streak at 🔥 21 days. Your score is 74. What would you like to work on?",
  },
  {
    id: 2, from: 'user',
    text: 'Why is my score not higher?',
  },
  {
    id: 3, from: 'ai',
    text: "Your Mental pillar is pulling the score down at 68%. Your last 3 wind-down sessions were missed. That's directly impacting your Hormonal pillar too. Tonight — can you protect 10 minutes before bed?",
  },
];

const EXAMPLE_CHIPS = [
  'Why is my score low?',
  'How do Kegels help?',
  'Is stress affecting my libido?',
  'What should I focus on?',
  'How long before results?',
];

function CoachTab() {
  const [messages, setMessages] = React.useState(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = React.useState('');

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), from: 'user', text };
    const aiReply = {
      id: Date.now() + 1, from: 'ai',
      text: "I can see from your data that your sleep average this week is 6.8hrs — that's actually above your baseline. Keep your Kegel consistency up and you'll see your Physical pillar tick up by Day 10.",
    };
    setMessages(prev => [...prev, userMsg, aiReply]);
    setInputVal('');
  };

  return (
    <div style={CoachTabStyles.screen}>
      {/* Header */}
      <div style={CoachTabStyles.header}>
        <div style={CoachTabStyles.coachAvatar}>✦</div>
        <div>
          <div style={CoachTabStyles.coachName}>BigBoy Health Coach</div>
          <div style={CoachTabStyles.coachSub}>● Reading your data now…</div>
        </div>
        <div style={CoachTabStyles.dataChip}>Data-connected</div>
      </div>

      {/* Data context bar */}
      <div style={CoachTabStyles.dataContextBar}>
        <span style={CoachTabStyles.dataItem}>Score: <span style={CoachTabStyles.dataVal}>74</span></span>
        <span style={CoachTabStyles.dataItem}>Sleep: <span style={CoachTabStyles.dataVal}>6.8h</span></span>
        <span style={CoachTabStyles.dataItem}>Stress: <span style={CoachTabStyles.dataVal}>3/10</span></span>
        <span style={CoachTabStyles.dataItem}>Streak: <span style={CoachTabStyles.dataVal}>🔥21</span></span>
      </div>

      {/* Messages */}
      <div style={CoachTabStyles.messagesWrap}>
        <div style={CoachTabStyles.systemMsg}>Today · Private & encrypted</div>
        {messages.map(msg => (
          <div key={msg.id} style={{ ...CoachTabStyles.msgRow, ...(msg.from === 'user' ? CoachTabStyles.msgRowUser : {}) }}>
            {msg.from === 'ai' && <div style={CoachTabStyles.avatarSmall}>✦</div>}
            <div style={{ ...CoachTabStyles.bubble, ...(msg.from === 'ai' ? CoachTabStyles.aiBubble : CoachTabStyles.userBubble) }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick chips */}
      <div style={CoachTabStyles.chipsWrap}>
        {EXAMPLE_CHIPS.map(c => (
          <div key={c} style={CoachTabStyles.chip} onClick={() => sendMessage(c)}>{c}</div>
        ))}
      </div>

      {/* Input */}
      <div style={CoachTabStyles.inputRow}>
        <input
          style={CoachTabStyles.input}
          placeholder="Ask anything…"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage(inputVal)}
        />
        <button style={CoachTabStyles.sendBtn} onClick={() => sendMessage(inputVal)}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { CoachTab });
