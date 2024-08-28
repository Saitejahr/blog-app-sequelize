const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const adminRoutes = require('./routes/adminRoutes');
const path = require('path');
require('dotenv').config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', postRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5001;

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error syncing database:', err));
