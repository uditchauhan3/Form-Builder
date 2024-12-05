require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const formRoutes = require('./routes/form');
const responseRoutes = require('./routes/response');

const app = express();

// Use JSON parsing middleware
app.use(express.json());

// CORS setup
app.use(cors({
  origin: [
    'https://form-builder-oxa5.vercel.app',
    'http://localhost:5173', // Local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// Body parser middleware (if needed)
app.use(bodyParser.json());

// Routes
app.use('/', formRoutes);
app.use('/', responseRoutes);
app.options('*', cors()); // Handle preflight requests

// MongoDB connection
const PORT = 5001;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`MongoDB connected successfully`);
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
