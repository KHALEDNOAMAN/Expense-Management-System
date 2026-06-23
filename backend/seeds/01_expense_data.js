exports.seed = async function(knex) {
  await knex('expenses').del(); await knex('department_budgets').del(); await knex('expense_categories').del();
  await knex('expense_categories').insert([
    { id: 1, code: 'EXP-TRV', name: 'Travel', description: 'Business travel expenses', max_amount_per_claim: 50000, requires_receipt: true },
    { id: 2, code: 'EXP-MEL', name: 'Meals & Entertainment', description: 'Business meals and entertainment', max_amount_per_claim: 5000, requires_receipt: true },
    { id: 3, code: 'EXP-SFT', name: 'Software & Subscriptions', description: 'Software licenses and SaaS subscriptions', max_amount_per_claim: 25000 },
    { id: 4, code: 'EXP-OFC', name: 'Office Supplies', description: 'Office materials and supplies', max_amount_per_claim: 10000 },
    { id: 5, code: 'EXP-TRN', name: 'Training & Development', description: 'Courses, certifications, books', max_amount_per_claim: 15000 },
    { id: 6, code: 'EXP-CNF', name: 'Conference & Events', description: 'Conference tickets and event fees', max_amount_per_claim: 30000, requires_receipt: true },
    { id: 7, code: 'EXP-TEL', name: 'Telecommunications', description: 'Phone, internet, mobile data', max_amount_per_claim: 3000 },
    { id: 8, code: 'EXP-HRD', name: 'Hardware & Equipment', description: 'Computer hardware, peripherals', max_amount_per_claim: 40000, requires_receipt: true },
    { id: 9, code: 'EXP-MRK', name: 'Marketing', description: 'Advertising, promotion, marketing materials', max_amount_per_claim: 50000 },
    { id: 10, code: 'EXP-OTH', name: 'Other', description: 'Miscellaneous expenses', max_amount_per_claim: 5000 },
  ]);
  await knex('department_budgets').insert([
    { department_id: 1, fiscal_year: 2026, budget_amount: 500000, spent_amount: 180000, remaining_amount: 320000 },
    { department_id: 2, fiscal_year: 2026, budget_amount: 200000, spent_amount: 75000, remaining_amount: 125000 },
    { department_id: 3, fiscal_year: 2026, budget_amount: 150000, spent_amount: 45000, remaining_amount: 105000 },
  ]);
  await knex('expenses').insert([
    { expense_number: 'EXP-2026-000001', category_id: 1, amount: 4500, expense_date: '2026-06-15', description: 'Istanbul-Ankara business trip', merchant_name: 'Turkish Airlines', payment_method: 'corporate_card', status: 'approved', created_by: 1 },
    { expense_number: 'EXP-2026-000002', category_id: 3, amount: 2400, expense_date: '2026-06-10', description: 'Annual Figma team license', merchant_name: 'Figma Inc.', payment_method: 'corporate_card', status: 'approved', created_by: 2 },
    { expense_number: 'EXP-2026-000003', category_id: 5, amount: 1800, expense_date: '2026-06-18', description: 'AWS certification exam + prep course', merchant_name: 'Udemy', payment_method: 'personal_card', status: 'submitted', created_by: 3 },
    { expense_number: 'EXP-2026-000004', category_id: 2, amount: 850, expense_date: '2026-06-20', description: 'Team lunch - sprint review celebration', merchant_name: 'Kanatci Ali Usta', payment_method: 'corporate_card', status: 'draft', created_by: 1 },
  ]);
};
