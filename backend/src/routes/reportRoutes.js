const express = require('express'); const r = express.Router(); const c = require('../controllers/reportController');
r.get('/summary', c.summary); module.exports = r;
