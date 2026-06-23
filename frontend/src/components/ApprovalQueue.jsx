import React from 'react';
const pending = [
  { id: 3, number: 'EXP-2026-003', employee: 'Mehmet Kaya', desc: 'AWS certification exam', amount: 'â‚º1,800', date: '2026-06-18', category: 'Training' },
  { id: 5, number: 'EXP-2026-005', employee: 'Zeynep Arslan', desc: 'Google Ads campaign', amount: 'â‚º8,500', date: '2026-06-19', category: 'Marketing' },
  { id: 6, number: 'EXP-2026-006', employee: 'Emre Sahin', desc: 'Server room UPS replacement', amount: 'â‚º15,000', date: '2026-06-17', category: 'Hardware' },
];
export default function ApprovalQueue() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>â³ Approval Queue</h1>
      <p style={{ color: '#64748b', marginBottom: 24 }}>{pending.length} expenses pending review</p>
      {pending.map(p => (
        <div key={p.id} style={{ background: 'white', borderRadius: 16, padding: 20, marginBottom: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#64748b' }}>{p.number}</span>
              <span style={{ background: '#eff6ff', color: '#2563eb', padding: '2px 8px', borderRadius: 8, fontSize: 11 }}>{p.category}</span>
            </div>
            <p style={{ fontWeight: 600 }}>{p.desc}</p>
            <p style={{ fontSize: 13, color: '#64748b' }}>by {p.employee} â€¢ {p.date}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <p style={{ fontSize: 20, fontWeight: 700 }}>{p.amount}</p>
            <button style={{ background: '#22c55e', color: 'white', border: 'none', padding: '8px 16px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>âœ… Approve</button>
            <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>âŒ Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}
