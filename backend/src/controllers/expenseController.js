const { query } = require('../config/database');
const AppError = require('../utils/AppError');

class ExpenseController {
  static async getAll(req, res, next) {
    try {
      const { page = 1, limit = 20, status, category, startDate, endDate, search } = req.query;
      const offset = (page - 1) * limit;
      const conditions = ['1=1']; const params = []; let idx = 1;
      if (status) { conditions.push(`e.status = $${idx++}`); params.push(status); }
      if (category) { conditions.push(`e.category_id = $${idx++}`); params.push(category); }
      if (startDate) { conditions.push(`e.expense_date >= $${idx++}`); params.push(startDate); }
      if (endDate) { conditions.push(`e.expense_date <= $${idx++}`); params.push(endDate); }
      if (search) { conditions.push(`(e.description ILIKE $${idx} OR e.merchant_name ILIKE $${idx} OR e.expense_number ILIKE $${idx})`); params.push(`%${search}%`); idx++; }
      const where = conditions.join(' AND ');
      const countRes = await query(`SELECT COUNT(*) FROM expenses e WHERE ${where}`, params);
      const result = await query(
        `SELECT e.*, ec.name AS category_name, ec.code AS category_code FROM expenses e LEFT JOIN expense_categories ec ON e.category_id = ec.id WHERE ${where} ORDER BY e.created_at DESC LIMIT $${idx++} OFFSET $${idx++}`,
        [...params, limit, offset]
      );
      res.json({ success: true, data: result.rows, meta: { page: +page, limit: +limit, total: parseInt(countRes.rows[0].count) } });
    } catch (err) { next(err); }
  }
  static async getById(req, res, next) {
    try {
      const r = await query('SELECT e.*, ec.name AS category_name FROM expenses e LEFT JOIN expense_categories ec ON e.category_id = ec.id WHERE e.id = $1', [req.params.id]);
      if (!r.rows.length) throw new AppError('Expense not found', 404);
      res.json({ success: true, data: r.rows[0] });
    } catch (err) { next(err); }
  }
  static async create(req, res, next) {
    try {
      const { categoryId, amount, expenseDate, description, merchantName, paymentMethod, notes } = req.body;
      const expenseNumber = `EXP-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
      const r = await query(
        `INSERT INTO expenses (expense_number, category_id, amount, expense_date, description, merchant_name, payment_method, notes, status, created_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'draft',$9) RETURNING *`,
        [expenseNumber, categoryId, amount, expenseDate, description, merchantName, paymentMethod, notes, req.user?.id || 1]
      );
      res.status(201).json({ success: true, data: r.rows[0] });
    } catch (err) { next(err); }
  }
  static async submit(req, res, next) {
    try {
      const r = await query(`UPDATE expenses SET status = 'submitted', submitted_at = NOW() WHERE id = $1 AND status = 'draft' RETURNING *`, [req.params.id]);
      if (!r.rows.length) throw new AppError('Expense not found or not in draft status', 400);
      res.json({ success: true, data: r.rows[0] });
    } catch (err) { next(err); }
  }
  static async approve(req, res, next) {
    try {
      const r = await query(`UPDATE expenses SET status = 'approved', approved_by = $1, approved_at = NOW() WHERE id = $2 AND status = 'submitted' RETURNING *`, [req.user?.id || 1, req.params.id]);
      if (!r.rows.length) throw new AppError('Expense not found or not submitted', 400);
      // Update department budget
      await query(`UPDATE department_budgets SET spent_amount = spent_amount + $1, remaining_amount = remaining_amount - $1 WHERE department_id = $2 AND fiscal_year = $3`,
        [r.rows[0].amount, r.rows[0].department_id || 1, new Date().getFullYear()]);
      res.json({ success: true, data: r.rows[0] });
    } catch (err) { next(err); }
  }
  static async reject(req, res, next) {
    try {
      const r = await query(`UPDATE expenses SET status = 'rejected', rejection_reason = $1 WHERE id = $2 AND status = 'submitted' RETURNING *`, [req.body.reason || '', req.params.id]);
      if (!r.rows.length) throw new AppError('Expense not found or not submitted', 400);
      res.json({ success: true, data: r.rows[0] });
    } catch (err) { next(err); }
  }
}
module.exports = ExpenseController;
