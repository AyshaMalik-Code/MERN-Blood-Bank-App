# MERN Blood Bank Management System

A full-stack Blood Bank Management System built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This application helps organizations, hospitals, donors, and administrators efficiently manage blood inventory, donations, and requests through a centralized platform.

## Features

### Authentication & Authorization

* User Registration and Login
* JWT-based Authentication
* Protected Routes
* Role-based Access Control

### Blood Inventory Management

* Add Blood Inventory
* Track Blood Donations
* Manage Blood Requests
* Monitor Available Blood Stock

### User Management

* Donor Management
* Hospital Management
* Organization Management
* Admin Dashboard

### Analytics

* Blood Stock Analysis
* Donation Statistics
* Inventory Reports

## Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Bootstrap
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

### Database

* MongoDB
* Mongoose

## Project Structure

```bash
## Project Structure

```bash
MERN-Blood-Bank-App
├── client
│   ├── public
│   │   └── assets/images
│   ├── src
│   │   ├── components
│   │   │   ├── Layout
│   │   │   ├── Routes
│   │   │   ├── modal
│   │   │   └── shared
│   │   ├── pages
│   │   │   ├── Admin
│   │   │   ├── Analytics
│   │   │   ├── auth
│   │   │   ├── Dashboard
│   │   │   └── Inventory
│   │   ├── redux
│   │   ├── services
│   │   ├── styles
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── config
│   └── db.js
├── controllers
├── middlewares
├── models
├── routes
├── utils
├── server.js
├── package.json
└── README.md
```

```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd MERN-Blood-Bank-App
```

### Install Dependencies

```bash
npm install
cd client
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Project

```bash
npm run dev
```

## Modules

* Admin Panel
* Donor Panel
* Hospital Panel
* Organization Panel
* Blood Inventory System
* Analytics Dashboard

## Future Enhancements

* Email Notifications
* SMS Alerts
* Blood Request Tracking
* Advanced Reporting
* Mobile Responsive Improvements

## Author

Aysha Malik

## License

This project is developed for educational and learning purposes.
