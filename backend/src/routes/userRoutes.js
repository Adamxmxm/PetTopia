const express = require('express');
const { 
    registerUser, 
    loginUser, 
    getUsers, 
    deleteUser 
} = require('../controllers/userController');
const router = express.Router();

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/users', getUsers);
router.delete('/users/:id', deleteUser); 

module.exports = router;
