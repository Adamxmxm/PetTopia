const Customer = require('../models/userModel'); // Importing the Customer model

// Function to handle user registration
const registerUser = async (req, res) => {
  const { NAMA_CUSTOMER, NO_TELFON, ALAMAT } = req.body;

  try {
    // Check if the customer already exists
    const existingCustomer = await Customer.findOne({ where: { NAMA_CUSTOMER } });

    if (existingCustomer) {
      return res.status(400).json({ message: 'Customer already exists' });
    }

    // Create a new customer
    const newCustomer = await Customer.create({
      NAMA_CUSTOMER,
      NO_TELFON,
      ALAMAT,
    });

    return res.status(201).json({ message: 'Customer registered successfully', customer: newCustomer });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser };
