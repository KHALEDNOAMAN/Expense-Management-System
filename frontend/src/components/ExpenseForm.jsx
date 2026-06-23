import React, { useState } from 'react';
const categories = ['Travel', 'Meals & Entertainment', 'Software', 'Office Supplies', 'Training', 'Conference', 'Telecom', 'Hardware', 'Marketing', 'Other'];
const methods = ['Cash', 'Corporate Card', 'Personal Card', 'Bank Transfer', 'Petty Cash'];
export default function ExpenseForm() {
  const [form, setForm] = useState({ category: '', amount: '', date: '', description: '', merchant: '', method: '', notes: '' });
  const u = (f, v) => setForm({ ...form, [f]: v });
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>ðŸ’¸ New Expense Claim</h1>
      <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div><label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Category *</label>
            <select value={form.category} onChange={e => u('category', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d1d5db' }}><option value="">Select</option>{categories.map(c => <option key={c}>{c}</option>)}</select></div>
          <div><label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Amount (TRY) *</label>
            <input type="number" value={form.amount} onChange={e => u('amount', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d1d5db' }} /></div>
          <div><label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Date *</label>
            <input type="date" value={form.date} onChange={e => u('date', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d1d5db' }} /></div>
          <div><label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Payment Method</label>
            <select value={form.method} onChange={e => u('method', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d1d5db' }}><option value="">Select</option>{methods.map(m => <option key={m}>{m}</option>)}</select></div>
          <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Description *</label>
            <textarea value={form.description} onChange={e => u('description', e.target.value)} rows={3} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d1d5db', resize: 'none' }} /></div>
          <div><label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Merchant</label>
            <input value={form.merchant} onChange={e => u('merchant', e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d1d5db' }} /></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
          <button style={{ padding: '10px 20px', borderRadius: 8, border: '1px solid #d1d5db', background: 'white' }}>Save as Draft</button>
          <button style={{ padding: '10px 20px', borderRadius: 8, border: 'none', background: '#2563eb', color: 'white', fontWeight: 600 }}>Submit for Approval</button>
        </div>
      </div>
    </div>
  );
}
