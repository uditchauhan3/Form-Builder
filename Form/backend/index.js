require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const formRoutes = require('./routes/form');
const responseRoutes = require('./routes/response');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/forms', formRoutes);
app.use('/api/responses', responseRoutes);

// MongoDB connection
const PORT = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error));
