exports.up = function(knex) {
  return knex.schema.createTable('expense_categories', (t) => {
    t.increments('id').primary(); t.string('code', 20).unique().notNullable(); t.string('name', 200).notNullable();
    t.text('description'); t.string('gl_account_code', 20); t.decimal('max_amount_per_claim', 15, 2);
    t.boolean('requires_receipt').defaultTo(false); t.boolean('is_active').defaultTo(true); t.timestamps(true, true);
  });
};
exports.down = (knex) => knex.schema.dropTable('expense_categories');
