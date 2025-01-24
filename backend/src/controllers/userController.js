const bcrypt = require('bcrypt');
const sequelize = require('../config/database');
const { validationResult } = require('express-validator');


const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { USER_NAME, USER_EMAIL, USER_PASSWORD } = req.body;

    try {
        const [result] = await sequelize.query(
            'INSERT INTO users (USER_NAME, USER_EMAIL, USER_PASSWORD, USER_LEVEL) VALUES (?, ?, ?, "1")',
            {
                replacements: [USER_NAME, USER_EMAIL, USER_PASSWORD],
            }
        );

        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};


const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
        const [user] = await sequelize.query(
            'SELECT * FROM users WHERE USER_NAME = ?',
            {
                replacements: [username],
            }
        );

        if (!user.length) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (password !== user[0].USER_PASSWORD) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const userData = {
            userId: user[0].USER_ID,
            username: user[0].USER_NAME,
            userLevel: user[0].USER_LEVEL,
        };

        if (user[0].USER_LEVEL === 1) {
            res.status(200).json({
                message: 'Login successful',
                redirect: '/form',
                user: userData,
            });
        } else if (user[0].USER_LEVEL === 2) {
            res.status(200).json({
                message: 'Login successful',
                redirect: '/dashboard/admin',
                user: userData,
            });
        } else if (user[0].USER_LEVEL === 3) {
            res.status(200).json({
                message: 'Login successful',
                redirect: '/dashboard/owner',
                user: userData,
            });
        } else {
            res.status(403).json({ message: 'Unauthorized user level' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};


// const loginUser = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     const { username, password } = req.body;
    
//     try {
//         const [user] = await sequelize.query(
//             'SELECT * FROM users WHERE USER_NAME = ?',
//             {
//                 replacements: [username],
//             }
//         );

//         if (!user.length) {
//             return res.status(404).json({ message: 'User not found' });
//         }
        
//         const isMatch = await bcrypt.compare(password, user[0].USER_PASSWORD);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
        
//         res.status(200).json({ message: 'Login successful', role: user[0].ROLE_ID });
//     } catch (error) {
//         res.status(500).json({ message: 'Error logging in', error });
//     }
// };


const getUsers = async (req, res) => {
    try {
        const [users] = await sequelize.query('SELECT * FROM users');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

const searchUsers = async (req, res) => {
    const { query } = req.query; 
    try {
        const [users] = await sequelize.query('SELECT * FROM users WHERE USER_NAME LIKE ?', {
            replacements: [`%${query}%`],
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error searching users', error });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [user] = await sequelize.query('SELECT * FROM users WHERE id = ?', {
            replacements: [id],
        });
        if (!user.length) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

const getUserByFullName = async (req, res) => {
    const { full_name } = req.params;
    try {
        const [user] = await sequelize.query('SELECT * FROM users WHERE USER_NAME = ?', {
            replacements: [full_name],
        });
        if (!user.length) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const [user] = await sequelize.query('SELECT * FROM users WHERE USER_EMAIL = ?', {
            replacements: [email],
        });
        if (!user.length) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

const createUser = async (req, res) => {

};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { USER_NAME, USER_EMAIL } = req.body;
    try {
        await sequelize.query('UPDATE users SET USER_NAME = ?, USER_EMAIL = ? WHERE id = ?', {
            replacements: [USER_NAME, USER_EMAIL, id],
        });
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await sequelize.query('DELETE FROM users WHERE id = ?', {
            replacements: [id],
        });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

module.exports = { 
    registerUser, 
    loginUser, 
    getUsers, 
    searchUsers, 
    getUserById, 
    getUserByFullName, 
    getUserByEmail, 
    createUser, 
    updateUser, 
    deleteUser 
};
