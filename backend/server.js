require('dotenv').config();
const app = require('./src/app');
app.listen(process.env.PORT || 3004, () => console.log(`Expense API running on port ${process.env.PORT || 3004}`));
