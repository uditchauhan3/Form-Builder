require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const formRoutes = require('./routes/form');
const responseRoutes = require('./routes/response');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://form-builder-oxa5.vercel.app/', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// Routes
app.use('/api/forms', formRoutes);
app.use('/api/responses', responseRoutes);
app.options('*',cors());
// MongoDB connection
const PORT = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URI);
app.listen(PORT, ()=>{
  console.log(`server running on ${PORT}`)
});
