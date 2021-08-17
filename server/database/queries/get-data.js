const connection = require('../config/connection');

const getData = () => connection.query('SELECT * FROM users;');

module.exports = getData;
