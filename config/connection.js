// Import Sequelize
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to database, pass in MySQL info
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);

} else {
    sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PW, {
            host: 'localhost',
            dialect: 'mysql'
    });    
    
}

module.exports = sequelize;