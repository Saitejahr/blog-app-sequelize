// // models/Admin.js
// const { DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/database');

// const Admin = sequelize.define('Admin', {
 
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   hooks: {
//     async beforeCreate(admin) {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(admin.password, salt);
//       admin.password = hashedPassword;
//     },
//     async beforeUpdate(admin) {
//       if (admin.changed('password')) {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(admin.password, salt);
//         admin.password = hashedPassword;
//       }
//     }
//   },
//   sequelize,
//   modelName: 'Admin',
//   tableName: 'Admins', // Optional: specify the exact table name if different
//   timestamps: false // Optional: disable timestamps (createdAt, updatedAt)
// });

// module.exports = Admin;


// models/Admin.js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');

const Admin = sequelize.define('Admin', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  hooks: {
    async beforeCreate(admin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(admin.password, salt);
      admin.password = hashedPassword;
    },
    async beforeUpdate(admin) {
      if (admin.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(admin.password, salt);
        admin.password = hashedPassword;
      }
    }
  },
  sequelize,
  modelName: 'Admin',
  tableName: 'Admins', 
  timestamps: false 
});

module.exports = Admin;
