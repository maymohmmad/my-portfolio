# 🌐 Personal Profile

A full-stack personal profile website built to showcase my skills, projects, experience, and professional background.

The project consists of a **React frontend** and a **Laravel backend API**, with database integration and email functionality.

## 📌 Project Status

🚧 **Currently under development**

* ✅ Frontend: Completed
* 🚧 Backend: In Progress
* 🔄 Frontend–Backend Integration: In Progress

## ✨ Features

### 🎨 Frontend

The frontend is built with React and provides the user interface for the personal profile website.

* Personal profile
* About Me
* Skills
* Projects
* Experience
* Contact form
* Responsive design
* Modern user interface

### ⚙️ Backend

The backend is built with Laravel and provides API functionality for the frontend.

Current backend functionality includes:

* Contact form API
* Storing contact messages in the database
* Project likes
* Project comments
* Project engagement functionality
* Email notifications using Resend
* API routes
* CORS configuration
* Request validation

## 🛠️ Technologies

### Frontend

* React
* TypeScript
* HTML5
* CSS3
* JavaScript

### Backend

* Laravel
* PHP
* MySQL
* REST API
* Resend
* Composer

## 📁 Project Structure

```text
personal-profile/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── app/
│   │   ├── Http/
│   │   ├── Mail/
│   │   ├── Models/
│   │   └── ...
│   │
│   ├── database/
│   │   └── migrations/
│   │
│   ├── resources/
│   ├── routes/
│   ├── config/
│   ├── bootstrap/
│   ├── .env.example
│   └── composer.json
│
└── README.md
```

## 🔗 Backend API

The Laravel backend exposes API endpoints used by the frontend for dynamic functionality such as:

* Contact messages
* Project likes
* Project comments
* Project engagement

## 📧 Email

The contact form uses **Resend** to send email notifications.

> API keys and other sensitive credentials must be stored in the `.env` file and should never be committed to GitHub.

## 🗄️ Database

The backend uses **MySQL** to store application data, including contact messages and project engagement data.

Database tables are managed through Laravel migrations.

## ⚙️ Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

Create and configure the Laravel backend, then install the required dependencies:

```bash
cd backend
composer install
```

Configure the environment:

```bash
cp .env.example .env
php artisan key:generate
```

Update the `.env` file with the required database and email configuration.

Run the migrations:

```bash
php artisan migrate
```

Start the Laravel development server:

```bash
php artisan serve
```

## 🔐 Environment Variables

The backend requires environment configuration for:

* Application URL
* Frontend URL
* MySQL database credentials
* Resend API key
* Mail configuration

**Never upload your real `.env` file or API keys to GitHub.**

## 🚧 Future Improvements

* Complete the backend development
* Complete frontend–backend integration
* Improve API functionality
* Add additional database features
* Improve validation and error handling
* Deploy the complete full-stack application

## 🎯 Project Goal

The goal of this project is to build a professional personal profile website while applying full-stack web development concepts, including frontend development, REST APIs, database management, email services, and frontend–backend integration.

## 👩‍💻 Developer

**Your Name**

* GitHub: [YOUR_GITHUB_LINK](https://github.com/maymohmmad)
* LinkedIn: www.linkedin.com/in/may-mohmmad-681287289
* Email: mai.armilat@gmail.com
