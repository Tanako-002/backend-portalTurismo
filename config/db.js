const { Sequelize } = require('sequelize');
require('dotenv').config();
<<<<<<< HEAD
 
=======

>>>>>>> 1da753283a1954e2a515cff868fe571a54e74cac
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // importante para conexões com SSL (Render exige isso)
    }
  },
  logging: false,
});
<<<<<<< HEAD
 
module.exports = sequelize;
=======

module.exports = sequelize;
>>>>>>> 1da753283a1954e2a515cff868fe571a54e74cac
