const express = require('express');
const { createReservation, getReservations } = require('../controllers/reservationController');
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.post('/', createReservation);

// router.get('/', getReservations);

module.exports = router;
