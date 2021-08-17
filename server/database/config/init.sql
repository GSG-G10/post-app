BEGIN;

-- CREATE TABLE users(
-- id BIGSERIAL PRIMARY KEY NOT NULL,
-- username VARCHAR(100) NOT NULL,
-- fname VARCHAR(100) NOT NULL);
-- INSERT INTO users (username, fname) VALUES ('divluffy', 'ibrahim jomaa');



-- CREATE TABLE posts(
-- id BIGSERIAL PRIMARY KEY NOT NULL,
-- user_id VARCHAR(100) NOT NULL,
-- text VARCHAR(500) NOT NULL,
-- link_img VARCHAR(1000) NOT NULL,
-- likes VARCHAR(10) NOT NULL);
-- INSERT INTO posts (user_id, text, link_img, likes) VALUES (22 , 'this is text default about  this image', '/database/storage/0.jpg' , 50);

-- CREATE TABLE profile(
-- id BIGSERIAL PRIMARY KEY NOT NULL,
-- post_id VARCHAR(100) NOT NULL);
-- INSERT INTO profile (post_id) VALUES (1);



-- SELECT * FROM users;
-- SELECT * FROM posts;
-- SELECT * FROM profile;



COMMIT;