const express = require('express');
const { createReservation, getReservations } = require('../controllers/reservationController');
const router = express.Router();

// Create Reservation
router.post('/', createReservation);

// Get Reservations
router.get('/', getReservations);

module.exports = router;
