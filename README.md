🩸 Blood Bank Management System
Overview

The Blood Bank Management System is a full-stack web application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It helps manage blood donations, blood inventory, donor records, and blood requests efficiently through a user-friendly interface.

Features
User Authentication & Authorization
Donor Registration and Management
Blood Inventory Tracking
Blood Donation Records
Blood Request Management
Hospital and Organization Management
Dashboard with Statistics
Responsive User Interface
Secure Data Storage using MongoDB
Technologies Used
Frontend
React.js
HTML5
CSS3
JavaScript
Bootstrap / Material UI
Backend
Node.js
Express.js
Database
MongoDB
Tools & Libraries
JWT Authentication
Axios
Bcrypt
Mongoose
dotenv
Project Structure
Blood-Bank-Management-System/
│
├── client/
│   ├── src/
│   └── public/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
├── package.json
└── README.md
Installation
Clone the Repository
git clone https://github.com/your-username/blood-bank-management-system.git
Install Dependencies
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
Configure Environment Variables

Create a .env file inside the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the Application
# Backend
npm run server

# Frontend
npm start
Future Enhancements
Blood Donation Appointment Scheduling
Email & SMS Notifications
Blood Availability Prediction
Report Generation
Admin Analytics Dashboard
Learning Outcomes

Through this project, I gained hands-on experience in:

MERN Stack Development
REST API Development
Authentication & Authorization
Database Design and Management
Frontend-Backend Integration
Version Control using Git & GitHub
Author

Aysha Malik

BCA Final Year Student | MERN Stack Developer
