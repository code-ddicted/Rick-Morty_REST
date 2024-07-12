const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// Read CA certificate
//const caCert = fs.readFileSync(path.join(__dirname, '..', 'root.crt')).toString();
const caCert = 'https://storage.yandexcloud.net/cloud-certs/CA.pem';

// Define the connection string
const connectionString = process.env.CONNECTION ;

// Create Sequelize instance with SSL configuration
const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
      ca: caCert
    }
  },
  logging: false
});

// Initialize models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Character = require('./character')(sequelize, Sequelize);

module.exports = db;