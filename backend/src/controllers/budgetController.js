const { query } = require('../config/database');
class BudgetController {
  static async getAll(req, res, next) { try { const r = await query('SELECT * FROM department_budgets ORDER BY fiscal_year DESC'); res.json({ success: true, data: r.rows }); } catch (e) { next(e); } }
  static async set(req, res, next) {
    try { const { departmentId, fiscalYear, budgetAmount } = req.body;
      const r = await query(`INSERT INTO department_budgets (department_id, fiscal_year, budget_amount, remaining_amount) VALUES ($1,$2,$3,$3) ON CONFLICT (department_id, fiscal_year) DO UPDATE SET budget_amount = $3, remaining_amount = $3 - department_budgets.spent_amount RETURNING *`, [departmentId, fiscalYear, budgetAmount]);
      res.json({ success: true, data: r.rows[0] });
    } catch (e) { next(e); } }
}
module.exports = BudgetController;
