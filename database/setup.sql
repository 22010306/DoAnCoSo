ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';

DROP DATABASE IF EXISTS test;
CREATE DATABASE IF NOT EXISTS test;

USE test;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
	id			VARCHAR(255) 	PRIMARY KEY,
    name		VARCHAR(255),
    email		VARCHAR(255)	NOT NULL UNIQUE,
    password	VARCHAR(255)	NOT NULL,
    deleteAt	DATE
);

