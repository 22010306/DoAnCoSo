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

DROP TABLE IF EXISTS meta_table;
CREATE TABLE meta_table (
    id                      VARCHAR(255)            PRIMARY KEY,
    createAt                DATE,
    data                    VARCHAR(4096)
);

SELECT * FROM user