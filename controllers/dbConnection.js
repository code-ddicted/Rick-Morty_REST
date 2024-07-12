const db = require('../models'); // Adjust the path as needed

const dbConn =()=>{
  db.sequelize.sync() // Use { force: true } only in development to drop and recreate tables
  .then(() => {
    console.log('Sync success');
  })
  .catch(err => {
    console.error('Sync failed:', err);
  });
}

module.exports = dbConn;