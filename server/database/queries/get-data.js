const connection = require("../config/connection.js");

const getData = () => {
    return connection.query("SELECT * FROM users;")
};

module.exports = getData;
