import React from 'react';
const cards = [
  { title: 'Total Approved', value: 'â‚º302,500', icon: 'âœ…', change: '+15%', color: '#22c55e' },
  { title: 'Pending Approval', value: '3', icon: 'â³', change: 'â‚º5,050', color: '#f59e0b' },
  { title: 'Budget Used', value: '35%', icon: 'ðŸ’°', change: 'â‚º300K / â‚º850K', color: '#3b82f6' },
  { title: 'Avg Claim', value: 'â‚º2,387', icon: 'ðŸ“Š', change: '12 claims this month', color: '#8b5cf6' },
];
const recent = [
  { id: 1, number: 'EXP-2026-001', desc: 'Istanbul-Ankara trip', category: 'Travel', amount: 'â‚º4,500', status: 'approved' },
  { id: 2, number: 'EXP-2026-002', desc: 'Figma license', category: 'Software', amount: 'â‚º2,400', status: 'approved' },
  { id: 3, number: 'EXP-2026-003', desc: 'AWS certification', category: 'Training', amount: 'â‚º1,800', status: 'submitted' },
  { id: 4, number: 'EXP-2026-004', desc: 'Team lunch', category: 'Meals', amount: 'â‚º850', status: 'draft' },
];
const sc = { approved: { bg: '#f0fdf4', t: '#16a34a' }, submitted: { bg: '#eff6ff', t: '#2563eb' }, draft: { bg: '#f8fafc', t: '#64748b' }, rejected: { bg: '#fef2f2', t: '#dc2626' } };
export default function Dashboard() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>ðŸ’¸ Expense Dashboard</h1>
      <p style={{ color: '#64748b', marginBottom: 24 }}>Track and manage expense claims</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32 }}>
        {cards.map(c => (<div key={c.title} style={{ background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: 24 }}>{c.icon}</span><span style={{ color: c.color, fontSize: 12, fontWeight: 600 }}>{c.change}</span></div>
          <p style={{ color: '#64748b', fontSize: 13, marginTop: 8 }}>{c.title}</p><p style={{ fontSize: 24, fontWeight: 700 }}>{c.value}</p>
        </div>))}
      </div>
      <div style={{ background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>ðŸ“‹ Recent Expenses</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ borderBottom: '2px solid #e2e8f0' }}>{['Expense #', 'Description', 'Category', 'Amount', 'Status'].map(h => <th key={h} style={{ textAlign: 'left', padding: 12, fontSize: 13, color: '#64748b' }}>{h}</th>)}</tr></thead>
          <tbody>{recent.map(r => { const s = sc[r.status]; return (<tr key={r.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
            <td style={{ padding: 12, fontFamily: 'monospace', fontSize: 13 }}>{r.number}</td>
            <td style={{ padding: 12, fontSize: 14 }}>{r.desc}</td>
            <td style={{ padding: 12 }}><span style={{ background: '#eff6ff', color: '#2563eb', padding: '2px 8px', borderRadius: 12, fontSize: 12 }}>{r.category}</span></td>
            <td style={{ padding: 12, fontWeight: 600 }}>{r.amount}</td>
            <td style={{ padding: 12 }}><span style={{ background: s.bg, color: s.t, padding: '2px 8px', borderRadius: 12, fontSize: 12 }}>{r.status}</span></td>
          </tr>); })}</tbody>
        </table>
      </div>
    </div>
  );
}
