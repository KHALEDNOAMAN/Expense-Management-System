const { query } = require('../config/database');
class CategoryController {
  static async getAll(req, res, next) { try { const r = await query('SELECT * FROM expense_categories WHERE is_active = true ORDER BY name'); res.json({ success: true, data: r.rows }); } catch (e) { next(e); } }
  static async create(req, res, next) { try { const { code, name, description, maxAmount, requiresReceipt } = req.body; const r = await query('INSERT INTO expense_categories (code, name, description, max_amount_per_claim, requires_receipt) VALUES ($1,$2,$3,$4,$5) RETURNING *', [code, name, description, maxAmount, requiresReceipt || false]); res.status(201).json({ success: true, data: r.rows[0] }); } catch (e) { next(e); } }
}
module.exports = CategoryController;
