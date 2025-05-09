# 🌐 Govease - eGovernance Web Application

![favicon](https://github.com/user-attachments/assets/7cc58f45-f224-442c-b094-d7ff3b8d906f)

Govease is a digital eGovernance platform that simplifies and modernizes access to government-issued documents. Citizens can securely verify and view their documents like Licenses, Citizenship, PAN ID, Voter Card, Plus 2, and Birth Certificate – all from a single platform. 🛂📄

---

## 📌 Features

* 🔐 **OTP-based secure account creation**
* 🔑 **Password setup after OTP verification**
* 🔓 **Login and logout with token authentication**
* 🧾 **Document verification by Name and ID**
* 📄 **View digital copies of multiple documents**
* 📊 **Simple, intuitive dashboard UI**
* 🧪 **Pre-seeded mock data for quick testing**

---

## 🛠️ Tech Stack

### **Frontend:**

* ⚛️ React.js
* 🎨 Tailwind CSS

### **Backend:**

* 🧰 Laravel 10 (PHP Framework)
* 🔐 Laravel Sanctum (API authentication)

### **Database:**

* 🐬 MySQL

---

## 🧭 Project Flow

1. 📲 **OTP Verification (via email)**
2. 🔐 **Password Setup**
3. 👤 **Choose an Option: Citizenship / License**
4. 📝 **Enter Full Name and Document ID**
5. 🔓 **Login**
6. 🏠 **Dashboard (with token-based session)**
7. 📂 **Select from:**

   * Citizenship
   * License
   * PAN ID
   * Voter Card
   * Plus 2 Certificate
   * Birth Certificate
8. 📄 **View Verified Document**
9. 🚪 **Logout**

✅ **Verified users can log in directly next time without repeating OTP.**

---

## 🧪 Mock Data

This project comes with seeder data:

* 🪪 Citizenship
* 🪪 License
* 🆔 PAN ID
* 🗳️ Voter Card
* 🎓 Plus 2 Certificate
* 🍼 Birth Certificate

---

## 🚀 Getting Started

### 📦 **Backend Setup (Laravel)**

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### 🌐 **Frontend Setup (React)**

```bash
cd frontend
npm install
npm run dev
```

---

## 🤝 Contributing

Contributions are welcome! 💡

Feel free to fork the repo, submit issues, or open a pull request.

---

## ❤️ Show Your Support

If you like this project, please ⭐ star the repository! 🌟

Happy coding! 🚀🎬
