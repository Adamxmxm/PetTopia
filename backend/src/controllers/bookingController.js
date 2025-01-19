const Booking = require('../models/bookingModel'); // Importing the Booking model

// Function to handle fetching all bookings
const createBooking = async (req, res) => {
  const {ID_CUSTOMER, ID_PRODUK, JUMLAH_BARANG, TANGGAL_BOOKING, WAKTU_BOOKING } = req.body;

  try {
    // Create a new booking
    const newBooking = await Booking.create({
      ID_CUSTOMER,
      ID_PRODUK,
      JUMLAH_BARANG,
      TANGGAL_BOOKING,
      WAKTU_BOOKING,
    });

    return res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};


const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll(); // Fetch all bookings from the database
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllBookings, createBooking }; // Exporting the createBooking function
