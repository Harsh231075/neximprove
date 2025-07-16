# 🚀 Neximprove Backend API

A complete customer and branch management backend using **Node.js**, **Express**, **Prisma**, **Zod**, and **Swagger**.

---

## 📸 Swagger UI Screenshot

![Swagger UI Screenshot](./public/swagger.png)

> 💡 Place your screenshot inside a folder named `screenshots/` at the root of the project before pushing to GitHub.

---

## 📦 Tech Stack

- ⚙️ **Express.js** – Web framework
- 🧠 **Zod** – Request validation
- 🛠 **Prisma ORM** – Database ORM
- 🐘 **PostgreSQL** – Database
- 📘 **Swagger UI** – API Documentation

---

## 📁 Folder Structure

├── controllers/
│ ├── customerController.js
│ └── branchController.js
├── routes/
│ ├── customerRoutes.js
│ └── branchRoutes.js
├── validators/
│ ├── customerSchema.js
│ └── branchSchema.js
├── utils/
│ └── handleError.js
├── public/
│ └── swagger-ui.css
├── prisma/
│ └── schema.prisma
├── screenshots/
│ └── swagger.png # ← Add manually
├── .env
├── index.js
└── README.md


---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/neximprove-api.git
   cd neximprove
   npm install
   Create a .env
   PORT=4000
   DATABASE_URL="postgresql://username:password@localhost:5432/neximprove"
   Replace username, password, and neximprove with your actual PostgreSQL credentials and DB name.
   Run Prisma Migrations :- 
   npx prisma migrate dev --name init
   Start the Server :-
   npm run dev

🌐 API Documentation
Access full Swagger UI:
http://localhost:4000/api-docs

🧪 Postman Environment Tip
If you're using Postman, you can set this in your environment:-
PORT=4000
BASE_URL=http://localhost:{{PORT}}/api
Then use:-
{{BASE_URL}}/customers
{{BASE_URL}}/branches



📮 Sample API Routes
Method	Endpoint	Description
POST	/api/customers	Create a customer
GET	/api/customers/:id	Get customer by ID
PUT	/api/customers/:id	Update customer
DELETE	/api/customers/:id	Delete customer
POST	/api/branches	Create a branch
GET	/api/branches?customerId=1	Get branches by customer ID
PUT	/api/branches/:id	Update branch
DELETE	/api/branches/:id	Delete branch




👨‍💻 Author
Harsh Singh Baghel
Backend Developer | MERN Stack | API Builder