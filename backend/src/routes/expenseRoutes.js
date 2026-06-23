const express = require('express'); const r = express.Router(); const c = require('../controllers/expenseController');
r.get('/', c.getAll); r.get('/:id', c.getById); r.post('/', c.create); r.put('/:id/submit', c.submit); r.put('/:id/approve', c.approve); r.put('/:id/reject', c.reject);
module.exports = r;
