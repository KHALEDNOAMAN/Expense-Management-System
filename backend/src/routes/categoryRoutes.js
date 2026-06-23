const express = require('express'); const r = express.Router(); const c = require('../controllers/categoryController');
r.get('/', c.getAll); r.post('/', c.create); module.exports = r;
