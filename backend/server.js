require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// 🛡️ Enable CORS and JSON parsing
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // Allow frontend URL or all origins
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));
app.use(express.json());

// 🗂️ Temporary in-memory data store
let users = [];

// 🧩 Root Test Route
app.get('/', (req, res) => {
  res.send('🚀 Backend API is running successfully!');
});

// 🩺 Health check route (useful for Render uptime monitoring)
app.get('/health', (req, res) => res.send('OK'));

// 📨 POST /api/users — Save new user data
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  // 🔍 Validate input
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required',
    });
  }

  // 🆕 Create and store user
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  console.log('📥 New user received:', newUser);

  return res.status(201).json({
    success: true,
    message: 'User added successfully',
    data: newUser,
  });
});

// 📋 GET /api/users — Retrieve all users
app.get('/api/users', (req, res) => {
  return res.json({
    success: true,
    users,
  });
});

// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
