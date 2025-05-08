# 📱 AppGallery

A modern web application that showcases various apps where users can browse, install, and leave reviews with ratings. Built with React and Tailwind CSS, it mimics a mini Play Store-like interface for practicing frontend development.

## 🚀 Live URL

🔗 [Visit AppGallery Live](https://your-deployment-url.com)

---

## 🎯 Purpose

This project was created as a practice ground to strengthen my React.js and frontend development skills. It helps me explore routing, component structuring, state management, and basic form handling—all while building something fun and interactive.

---

## ✨ Key Features

- 🖼️ **App Details View**: Users can click on an app to see full details including name, developer, features, description, and install/uninstall toggle.
- ⭐ **Rating System**: Users can rate the app using interactive star icons.
- 💬 **Review Form**: Logged-in users can leave a review with rating and comment. Reviews are displayed with the user’s name and profile photo.
- ✅ **Auth Integration**: Displays the logged-in user's name and photo using context (`AuthContext`).
- 🔄 **Dynamic Routing**: Uses `react-router-dom` for routing between pages like Home and App Details.
- 🧩 **Responsive Design**: Fully responsive UI built using Tailwind CSS for seamless experience across devices.

---

## 🧰 Technologies Used

- ⚛️ **React.js** – Frontend framework for building the UI.
- 🎨 **Tailwind CSS** – Utility-first CSS for fast styling.
- 🔗 **React Router DOM** – For page navigation and dynamic route handling.
- 👤 **Firebase Auth (Assumed)** – For user authentication (login, logout, user info).
- ⭐ **React Icons** – For displaying star icons (`IoIosStar`).
- ☁️ **Context API** – For global user state handling (`AuthContext`).

---

## 📦 NPM Packages Used

```bash
npm install react-router-dom
npm install react-icons
npm install firebase
npm install tailwindcss
