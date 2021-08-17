const connection = require("../config/connection.js");
const postData = (data) => {
    return connection.query(`INSERT INTO posts (user_id, text, link_img, likes) VALUES (22 , 'thxxxxxxxxxx image', '../storage/1.jpg' , 540);`)
};

module.exports = postData;
