<div align="center">

# 💸 Expense Management System

**Enterprise Expense Tracking with Approval Workflows & Budget Analytics**

[![Node.js](https://img.shields.io/badge/Node.js-20_LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A comprehensive expense management system with multi-step approval workflows, department budget tracking, receipt management, expense categorization, and analytics dashboard. Supports 10+ expense categories with configurable limits.

</div>

---

## ✨ Features

- 📝 **Expense Submission** - Create claims with categories, amounts, merchants, and receipt attachments
- ✅ **Approval Workflow** - Draft → Submitted → Approved/Rejected → Reimbursed pipeline
- 💰 **Budget Tracking** - Per-department annual budgets with real-time spent/remaining tracking
- 📊 **Analytics Dashboard** - Category breakdowns, monthly trends, department comparisons
- 🧾 **Receipt Management** - Upload and attach receipts to expense claims
- 🏷️ **10+ Categories** - Travel, Meals, Software, Office, Training, Conference, etc.
- 🔍 **Search & Filter** - Filter by status, category, date range, department with pagination

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | List expenses (filterable, paginated) |
| POST | `/api/expenses` | Create new expense claim |
| PUT | `/api/expenses/:id/submit` | Submit for approval |
| PUT | `/api/expenses/:id/approve` | Approve expense |
| PUT | `/api/expenses/:id/reject` | Reject with reason |
| GET | `/api/expense-categories` | List all categories |
| GET | `/api/budgets` | Department budgets |
| GET | `/api/reports/summary` | Expense analytics |

## 🚀 Getting Started

```bash
git clone https://github.com/KHALEDNOAMAN/Expense-Management-System.git
cd Expense-Management-System/backend
npm install && cp .env.example .env
npx knex migrate:latest && npx knex seed:run
npm run dev
```

## 📝 License
MIT License - see [LICENSE](LICENSE) file.

---
<div align="center">Built with ❤️ during internship at EduTech Yazilim A.S. - Istanbul, Turkey</div>
