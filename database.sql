CREATE DATABASE techstore;
USE techstore;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(50),
  name VARCHAR(100),
  price INT,
  oldPrice INT,
  rating FLOAT,
  category VARCHAR(50)
);

CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  productId INT,
  quantity INT DEFAULT 1
);