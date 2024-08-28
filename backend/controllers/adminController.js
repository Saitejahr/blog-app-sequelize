const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const Admin = require('../models/Admin');

exports.login = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  try {
    // Find admin by username
    const admin = await Admin.findOne({ where: { username } });
   
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    console.log('Admin found:', admin);

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    console.log('Password validation:', isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.register = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      where: { username }
    });

    if (existingAdmin) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create new admin
    // const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({ username, password });

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.logout = async (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};

