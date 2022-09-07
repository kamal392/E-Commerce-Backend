const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "ecommerce_db",
    "root",
    "Kishore@123",
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306, 
      dialectOptions: {
        decimalNumbers: true,
      }
    }
  ); 
} 

module.exports = sequelize;
