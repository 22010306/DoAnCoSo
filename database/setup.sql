-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';

DROP DATABASE IF EXISTS test;
CREATE DATABASE IF NOT EXISTS test;

USE test;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    mail                VARCHAR(255)		UNIQUE NOT NULL,
    isAdmin             BOOLEAN             DEFAULT FALSE,
    password            VARCHAR(1024)
);

DROP TABLE IF EXISTS customer_data;
CREATE TABLE customer_data (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    phone               VARCHAR(255)        UNIQUE NOT NULL,
    address             VARCHAR(255)        NOT NULL,
    user                INT                 NOT NULL,

    FOREIGN KEY(user) REFERENCES user(id)
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    name                VARCHAR(255)        NOT NULL,
    price               INT                 NOT NULL,
    description         VARCHAR(1024),
    picture             VARCHAR(255)
);

DROP TABLE IF EXISTS payment_type;
CREATE TABLE payment_type (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    name                VARCHAR(32)         UNIQUE
);
INSERT INTO payment_type (name)
VALUES  ('thanh_toan_truc_tiep'),
        ('chuyen_khoan_ngan_hang'),
        ('chuyen_tien_buu_dien');

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    createAt            DATETIME            DEFAULT CURRENT_TIMESTAMP,
    customer            INT                 NOT NULL,
    isCheckout          BOOLEAN             DEFAULT FALSE,

    FOREIGN KEY(customer) REFERENCES user(id)
);

DROP TABLE IF EXISTS product_order;
CREATE TABLE product_order (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    number              INT                 NOT NULL,
    product             INT                 NOT NULL,
    orderID             INT                 NOT NULL,

    FOREIGN KEY (orderID) REFERENCES orders(id),
    FOREIGN KEY (product) REFERENCES product(id),
    CONSTRAINT order_product UNIQUE (product, orderID)
);
