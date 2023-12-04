// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/vetAppDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema and Models for Appointments, Vaccinations, Medications (in separate files if needed)

// API endpoints for CRUD operations on appointments, vaccinations, medications

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
