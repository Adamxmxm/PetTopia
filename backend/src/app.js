const express = require('express');
const cors = require('cors'); // Importing CORS
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // Importing booking routes

const app = express();
app.use(cors()); // Using CORS middleware

// Middleware to parse JSON requests
app.use(express.json());

// Use user routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes); // Using booking routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
