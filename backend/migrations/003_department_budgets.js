exports.up = function(knex) {
  return knex.schema.createTable('department_budgets', (t) => {
    t.increments('id').primary(); t.integer('department_id').notNullable(); t.integer('fiscal_year').notNullable();
    t.decimal('budget_amount', 15, 2).notNullable(); t.decimal('spent_amount', 15, 2).defaultTo(0);
    t.decimal('remaining_amount', 15, 2); t.unique(['department_id', 'fiscal_year']); t.timestamps(true, true);
  });
};
exports.down = (knex) => knex.schema.dropTable('department_budgets');
