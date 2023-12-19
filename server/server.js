// server.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Protected route example using authMiddleware
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  // Handle socket events here

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
