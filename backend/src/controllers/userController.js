const bcrypt = require('bcrypt');
const User = require('../models/User'); // Assuming User model is defined

const registerUser = async (req, res) => {
    const { USER_NAME, USER_EMAIL, USER_PASSWORD } = req.body;
    const hashedPassword = await bcrypt.hash(USER_PASSWORD, 10);
    
    try {
        const newUser = await User.create({
            USER_NAME,
            USER_EMAIL,
            USER_PASSWORD: hashedPassword,
        });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.findOne({ where: { USER_NAME: username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const isMatch = await bcrypt.compare(password, user.USER_PASSWORD);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        res.status(200).json({ message: 'Login successful', role: user.ROLE_ID });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

module.exports = { registerUser, loginUser };
