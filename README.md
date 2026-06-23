<div align="center">

# ðŸ’¸ Expense Management System

**Enterprise Expense Tracking with Approval Workflows & Budget Analytics**

[![Node.js](https://img.shields.io/badge/Node.js-20_LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A comprehensive expense management system with multi-step approval workflows, department budget tracking, receipt management, expense categorization, and analytics dashboard. Supports 10+ expense categories with configurable limits.

</div>

---

## âœ¨ Features

- ðŸ“ **Expense Submission** - Create claims with categories, amounts, merchants, and receipt attachments
- âœ… **Approval Workflow** - Draft â†’ Submitted â†’ Approved/Rejected â†’ Reimbursed pipeline
- ðŸ’° **Budget Tracking** - Per-department annual budgets with real-time spent/remaining tracking
- ðŸ“Š **Analytics Dashboard** - Category breakdowns, monthly trends, department comparisons
- ðŸ§¾ **Receipt Management** - Upload and attach receipts to expense claims
- ðŸ·ï¸ **10+ Categories** - Travel, Meals, Software, Office, Training, Conference, etc.
- ðŸ” **Search & Filter** - Filter by status, category, date range, department with pagination

## ðŸ—ï¸ Architecture

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ React Frontendâ”‚â”€â”€â”€â”€â–¶â”‚ Express.js API   â”‚â”€â”€â”€â”€â–¶â”‚ PostgreSQL   â”‚
â”‚ (Dashboard)   â”‚     â”‚ (JWT + Workflow) â”‚     â”‚ (3 tables)   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

## ðŸ“¡ API Endpoints

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

## ðŸš€ Getting Started

```bash
git clone https://github.com/KHALEDNOAMAN/Expense-Management-System.git
cd Expense-Management-System/backend
npm install && cp .env.example .env
npx knex migrate:latest && npx knex seed:run
npm run dev
```

## ðŸ“ License
MIT License - see [LICENSE](LICENSE) file.

---
<div align="center">Built with â¤ï¸ during internship at EduTech Yazilim A.S. - Istanbul, Turkey</div>
