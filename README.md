# 📘 DSA Tracker Backend

This is the backend for the **DSA Sheet Assignment Tracker**. It provides structured DSA topics, subtopics, and problem data via REST APIs for consumption in the frontend.

---

## 📂 Folder Structure

```
backend/
└── src/
├── config/ # Environment and app configuration
├── controllers/ # Request handler logic
├── middlewares/ # Custom Express middlewares
├── models/ # (Optional) Mongoose or ORM models
├── repository/ # DB access layer (CRUD abstraction)
├── routes/ # API route definitions
├── services/ # Business logic layer
└── utils/ # Utility/helper functions
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd backend
npm install

```

## Create a .env file in backend/:
```
PORT=3000
NODE_ENV=development
```
## 3. Run the Server

```
npm run dev
```
