-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';

DROP DATABASE IF EXISTS test;
CREATE DATABASE IF NOT EXISTS test;

USE test;

DROP TABLE IF EXISTS role;
CREATE TABLE role (
    id                      VARCHAR(255)            PRIMARY KEY,
    role                    VARCHAR(255)            NOT NULL UNIQUE
);
INSERT INTO role (id, role)
VALUES      ('admin', 'admin'),
            ('guess', 'guess');

DROP TABLE IF EXISTS user;
CREATE TABLE user (
	id			            VARCHAR(255) 	        PRIMARY KEY,
    name		            VARCHAR(255),
    email		            VARCHAR(255)	        NOT NULL UNIQUE,
    password	            VARCHAR(255)	        NOT NULL,
    deleteAt	            DATE,
    role                    VARCHAR(255)            DEFAULT 'guess',

    FOREIGN KEY(role) REFERENCES role(id)
);

DROP TABLE IF EXISTS login_token;
CREATE TABLE login_token (
    id                      VARCHAR(255)            PRIMARY KEY,
    token                   VARCHAR(255)            UNIQUE,
    user                    VARCHAR(255)            UNIQUE,

    FOREIGN KEY (user) REFERENCES user(id)
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id                      VARCHAR(255)            PRIMARY KEY,
    name                    VARCHAR(255)            NOT NULL,
    description             VARCHAR(255)          
);

DROP TABLE IF EXISTS product_image;
CREATE TABLE product_image (
    id                      VARCHAR(255)            PRIMARY KEY,
    url                     VARCHAR(255)            UNIQUE,
    product                 VARCHAR(255),

    FOREIGN KEY(product) REFERENCES product(id)
);

DROP TABLE IF EXISTS price_history;
CREATE TABLE price_history (
    id                      VARCHAR(255)            PRIMARY KEY,
    price                   INT                     NOT NULL,
    updateAt                DATE                    NOT NULL,
    userUpdate              VARCHAR(255)            NOT NULL,
    product                 VARCHAR(255)            NOT NULL,   

    FOREIGN KEY(userUpdate) REFERENCES user(id),
    FOREIGN KEY(product) REFERENCES product(id)
);