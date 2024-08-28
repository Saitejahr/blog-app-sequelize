// config/database.js
const { Sequelize } = require('sequelize');

// SQLite setup
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/database.sqlite', // Path to your SQLite database file
  logging: false, // Disable logging (remove this line to enable logging)
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
