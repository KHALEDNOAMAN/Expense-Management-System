const express = require('express'); const r = express.Router(); const c = require('../controllers/budgetController');
r.get('/', c.getAll); r.post('/', c.set); module.exports = r;
