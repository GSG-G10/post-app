const connection = require("../config/connection.js");

const getData = () => {
    return connection.query("SELECT * FROM posts;")
};

module.exports = getData;
