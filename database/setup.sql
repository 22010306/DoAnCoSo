-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';

DROP DATABASE IF EXISTS test;
CREATE DATABASE IF NOT EXISTS test;

USE test;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    name                VARCHAR(255),
    mail                VARCHAR(255)		UNIQUE NOT NULL,
    password            VARCHAR(1024)
);

DROP TABLE IF EXISTS customer;
CREATE TABLE customer (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    createAt            DATETIME            DEFAULT CURRENT_TIMESTAMP(),
    name                VARCHAR(255),
    mail                VARCHAR(255),
    phone               VARCHAR(255),
    address             VARCHAR(255)
);

-- lock
DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    name                VARCHAR(255)        NOT NULL,
    price               BIGINT UNSIGNED     NOT NULL,
    description         VARCHAR(1024),
    image               VARCHAR(255)
);

DROP TABLE IF EXISTS shopping_cart_item;
CREATE TABLE shopping_cart_item (
    id                  INT                 AUTO_INCREMENT PRIMARY KEY,
    quantity            INT                 NOT NULL,
    user                INT                 NOT NULL,
    product             INT                 NOT NULL,

    FOREIGN KEY(user) REFERENCES customer(id),
    FOREIGN KEY(product) REFERENCES product(id),
    CONSTRAINT order_product UNIQUE (user, product)
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
    paymentType         INT                 NOT NULL,
    customer            INT                 NOT NULL,

    FOREIGN KEY(paymentType) REFERENCES payment_type(id),
    FOREIGN KEY(customer) REFERENCES customer(id)
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
