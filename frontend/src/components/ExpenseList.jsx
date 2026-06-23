import React, { useState } from 'react';
const expenses = [
  { id: 1, number: 'EXP-2026-001', category: 'Travel', desc: 'Istanbul-Ankara business trip', merchant: 'Turkish Airlines', amount: 4500, date: '2026-06-15', method: 'Corporate Card', status: 'approved' },
  { id: 2, number: 'EXP-2026-002', category: 'Software', desc: 'Figma team license', merchant: 'Figma Inc.', amount: 2400, date: '2026-06-10', method: 'Corporate Card', status: 'approved' },
  { id: 3, number: 'EXP-2026-003', category: 'Training', desc: 'AWS certification', merchant: 'Udemy', amount: 1800, date: '2026-06-18', method: 'Personal Card', status: 'submitted' },
  { id: 4, number: 'EXP-2026-004', category: 'Meals', desc: 'Team lunch', merchant: 'Kanatci Ali Usta', amount: 850, date: '2026-06-20', method: 'Corporate Card', status: 'draft' },
];
const sc = { approved: { bg: '#f0fdf4', t: '#16a34a' }, submitted: { bg: '#eff6ff', t: '#2563eb' }, draft: { bg: '#f8fafc', t: '#64748b' } };
export default function ExpenseList() {
  const [search, setSearch] = useState('');
  const filtered = expenses.filter(e => e.desc.toLowerCase().includes(search.toLowerCase()) || e.number.includes(search));
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <div><h1 style={{ fontSize: 24, fontWeight: 700 }}>ðŸ“‹ Expense Claims</h1></div>
        <button style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 12, fontWeight: 600 }}>+ New Expense</button>
      </div>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search expenses..." style={{ width: '100%', padding: 12, borderRadius: 12, border: '1px solid #d1d5db', marginBottom: 16 }} />
      <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ background: '#f8fafc' }}>{['#', 'Category', 'Description', 'Merchant', 'Amount', 'Date', 'Status'].map(h => <th key={h} style={{ textAlign: 'left', padding: 12, fontSize: 13, color: '#64748b' }}>{h}</th>)}</tr></thead>
          <tbody>{filtered.map(e => { const s = sc[e.status] || sc.draft; return (<tr key={e.id} style={{ borderTop: '1px solid #f1f5f9' }}>
            <td style={{ padding: 12, fontFamily: 'monospace', fontSize: 12 }}>{e.number}</td><td style={{ padding: 12, fontSize: 13 }}>{e.category}</td>
            <td style={{ padding: 12, fontSize: 13 }}>{e.desc}</td><td style={{ padding: 12, fontSize: 13 }}>{e.merchant}</td>
            <td style={{ padding: 12, fontWeight: 600 }}>â‚º{e.amount.toLocaleString()}</td><td style={{ padding: 12, fontSize: 13, color: '#64748b' }}>{e.date}</td>
            <td style={{ padding: 12 }}><span style={{ background: s.bg, color: s.t, padding: '2px 8px', borderRadius: 12, fontSize: 12 }}>{e.status}</span></td>
          </tr>); })}</tbody>
        </table>
      </div>
    </div>
  );
}
