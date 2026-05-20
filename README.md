# 🛒 TechStore – Full Stack MERN E-Commerce Platform
An advanced and responsive **Full Stack E-Commerce Web
Application** built using the **MERN Stack** with authentication, cart
management, product listings, protected routes, modern UI design, and live
deployment.
Designed and developed with focus on:
- Real-world full stack architecture
- Clean UI/UX
- Authentication & API integration
- Responsive design
- Recruiter-friendly project structure
---
# 🚀 Live Demo
### 🌐 Frontend Deployment
  👉 https://techstore-f.onrender.com
### ⚙ Backend Deployment
  👉 https://techstore-trv3.onrender.com
---
#  📸 Project Screenshots

Techstore-main/
│── screenshots/
│ ├── home.png
│ ├── products.png
│ ├── cart.png
│ ├── login.png
│ └── mobile-view.png

🏠 Home Page

🛍️ Products Page  

🛒 Cart Page

🔐 Authentication

📱 Responsive Mobile View

✨ Features
• Authentication System
• User Registration
• User Login
• JWT Authentication
• Protected Routes
• Authentication Context API

🛒 E-Commerce Functionalities
• Dynamic Product Listing
• Product Detail Pages
• Shopping Cart
• Add/Remove Cart Items
• Deals Section
• Category Browsing

🎨 Frontend Features
• Fully Responsive Design
• Modern UI/UX
• Reusable Components
• Toast Notifications
• Clean Navigation System
• Optimized Layout Structure

⚙ Backend Features
• REST API Architecture
• Express.js Routing
• MySQL Database Integration
• Authentication Middleware
• MVC Folder Structure

🧠 Tech Stack

Frontend
• React.js
• Vite
• React Router DOM
• Context API
• CSS3

Backend
• Node.js
• Express.js
• JWT Authentication
• bcrypt.js

Database
• MySQL
• Deployment
• Render
• Railway

---
# 📂 Folder Structure

```bash
Techstore-main/
│
├── client/
│   │
│   ├── src/
│   │   │
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── pages/
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── Server/
│   │
│   ├── Controllers/
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   └── productController.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   └── productRoutes.js
│   │
│   ├── .env
│   ├── Server.js
│   ├── package.json
│   └── package-lock.json
│
├── database.sql
└── README.md
```
🔑 Environment Variables

Frontend .env
VITE_API_URL=https://techstore-trv3.onrender.com

Backend .env
DB_HOST=mysql-production-7961.up.railway.app
DB_USER=root
DB_PASSWORD=wGYDZOkvQzDMyPbaQlDHLlomxzsbJLDA
DB_NAME=railway
DB_PORT=3306
JWT_SECRET=05cc5e7ae1c55c8561c6da0d8e4027d4
PORT=5000
RENDER_EXTERNAL_URL=https://techstore-trv3.onrender.com

⚡ Installation & Setup
 1️⃣ Clone Repository
git clone https://github.com/Mridulhasija/your-repo-name.git
 2️⃣ Install Frontend Dependencies
cd client
npm install
3️⃣ Install Backend Dependencies
cd ../Server
npm install
4️⃣ Setup Database
database.sql
⏯️ Running The Project
Start Backend
cd Server
npm run dev
Start Frontend
cd client
npm run dev

📌 API Endpoints

Authentication
• POST /api/auth/register
• POST /api/auth/login

Products
• GET /api/products
• GET /api/products/:id

Cart
• GET /api/cart
• POST /api/cart/add
• DELETE /api/cart/remove/:id

💡What I Learned
 • Through this project, I gained hands-on experience in:
 • Full Stack MERN Development
 • REST API Design
 • Authentication using JWT
 • MySQL Database Integration
 • React Context API
 • Responsive UI Development
 • Deployment & Environment Configuration
 • Clean Component-Based Architecture

🎯 Future Improvements
 • Payment Gateway Integration
 • Order Tracking System
 • Admin Dashboard
 • Product Search & Filters
 • Wishlist Feature
 • Razorpay/Stripe Integration
 • Dark Mode
