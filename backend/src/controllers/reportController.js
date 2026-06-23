const { query } = require('../config/database');
class ReportController {
  static async summary(req, res, next) {
    try {
      const [total, pending, byCategory, monthly] = await Promise.all([
        query(`SELECT COALESCE(SUM(amount), 0) AS total, COUNT(*) AS count FROM expenses WHERE status IN ('approved', 'reimbursed')`),
        query(`SELECT COUNT(*) AS count, COALESCE(SUM(amount), 0) AS total FROM expenses WHERE status = 'submitted'`),
        query(`SELECT ec.name, COUNT(e.id) AS count, COALESCE(SUM(e.amount), 0) AS total FROM expense_categories ec LEFT JOIN expenses e ON ec.id = e.category_id AND e.status IN ('approved','reimbursed') GROUP BY ec.name ORDER BY total DESC`),
        query(`SELECT to_char(expense_date, 'YYYY-MM') AS month, SUM(amount) AS total FROM expenses WHERE status IN ('approved','reimbursed') AND expense_date >= CURRENT_DATE - INTERVAL '12 months' GROUP BY month ORDER BY month`),
      ]);
      res.json({ success: true, data: { totalApproved: total.rows[0], pendingApproval: pending.rows[0], byCategory: byCategory.rows, monthlyTrend: monthly.rows } });
    } catch (err) { next(err); }
  }
}
module.exports = ReportController;
