const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const expenseRoutes = require('./routes/expenseRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const reportRoutes = require('./routes/reportRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(helmet()); app.use(cors({ origin: process.env.CORS_ORIGIN || '*' })); app.use(express.json());
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));
app.get('/api/health', (req, res) => res.json({ success: true, service: 'Expense Management System' }));
app.use('/api/expenses', expenseRoutes); app.use('/api/expense-categories', categoryRoutes);
app.use('/api/budgets', budgetRoutes); app.use('/api/reports', reportRoutes);
app.use((req, res) => res.status(404).json({ success: false, error: { message: 'Route not found' } }));
app.use(errorHandler);
module.exports = app;
