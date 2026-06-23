exports.up = function(knex) {
  return knex.schema.createTable('expenses', (t) => {
    t.increments('id').primary(); t.string('expense_number', 50).unique().notNullable();
    t.integer('category_id').references('id').inTable('expense_categories');
    t.decimal('amount', 15, 2).notNullable(); t.string('currency', 3).defaultTo('TRY');
    t.date('expense_date').notNullable(); t.text('description').notNullable();
    t.string('merchant_name', 200); t.string('receipt_url', 500); t.string('receipt_number', 100);
    t.integer('department_id'); t.string('project_code', 50);
    t.string('payment_method', 50).checkIn(['cash', 'corporate_card', 'personal_card', 'bank_transfer', 'petty_cash']);
    t.string('status', 20).defaultTo('draft').checkIn(['draft', 'submitted', 'approved', 'rejected', 'reimbursed']);
    t.timestamp('submitted_at'); t.integer('approved_by'); t.timestamp('approved_at');
    t.text('rejection_reason'); t.date('reimbursement_date'); t.text('notes');
    t.integer('created_by').notNullable(); t.timestamps(true, true);
  });
};
exports.down = (knex) => knex.schema.dropTable('expenses');
