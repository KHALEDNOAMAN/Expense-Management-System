import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3004/api' });
export const expenseApi = { getAll: (p) => api.get('/expenses', { params: p }), create: (d) => api.post('/expenses', d), submit: (id) => api.put(`/expenses/${id}/submit`), approve: (id) => api.put(`/expenses/${id}/approve`), reject: (id, reason) => api.put(`/expenses/${id}/reject`, { reason }) };
export const categoryApi = { getAll: () => api.get('/expense-categories') };
export const budgetApi = { getAll: () => api.get('/budgets') };
export const reportApi = { summary: () => api.get('/reports/summary') };
export default api;
