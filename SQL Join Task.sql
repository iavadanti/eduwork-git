USE db_eduwork;
CREATE TABLE users (
id int PRIMARY KEY,
email varchar(255),
name varchar(255),
password varchar(255),
address varchar(255),
role varchar(255),
status varchar(255),
created_at timestamp,
updated_at timestamp
);

CREATE TABLE products(
id int PRIMARY KEY,
category_id int,
user_id int,
code varchar(255),
name varchar(255),
slug varchar(255),
description longtext,
photo varchar(255),
qty double,
price double,
status varchar(255)
);

CREATE TABLE categories (
id int PRIMARY KEY,
user_id int,
code varchar(255),
name varchar(255),
slug varchar(255),
description text,
status varchar(255),
photo varchar(255)
);


USE db_eduwork;
SELECT 
u.id,u.email,u.password,u.address,u.role,u.status,u.created_at,u.updated_at, c.id AS customerID,p.id AS productID
FROM users AS u
LEFT JOIN categories AS c
ON u.id = c.user_id
LEFT JOIN products AS p
ON u.id = p.user_id

