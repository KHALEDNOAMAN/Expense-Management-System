import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ApprovalQueue from './components/ApprovalQueue';
export default function App() {
  return (<BrowserRouter><Routes>
    <Route path="/" element={<Navigate to="/expenses/dashboard" />} />
    <Route path="/expenses/dashboard" element={<Dashboard />} />
    <Route path="/expenses/list" element={<ExpenseList />} />
    <Route path="/expenses/new" element={<ExpenseForm />} />
    <Route path="/expenses/approvals" element={<ApprovalQueue />} />
  </Routes></BrowserRouter>);
}
