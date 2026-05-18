USE railway;   


CREATE TABLE users (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(100)        NOT NULL,
  email      VARCHAR(150) UNIQUE NOT NULL,
  password   VARCHAR(255)        NOT NULL,
  discount   INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  brand     VARCHAR(50),
  name      VARCHAR(100),
  price     INT,
  oldPrice  INT,
  discount  INT DEFAULT 0,
  emoji     VARCHAR(10),
  rating    FLOAT DEFAULT 0,
  reviews   INT   DEFAULT 0,
  category  VARCHAR(50)
);

CREATE TABLE cart (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  user_id    INT NOT NULL,
  product_id INT NOT NULL,
  quantity   INT DEFAULT 1,
  discount   INT,
  UNIQUE KEY uq_user_product (user_id, product_id),
  FOREIGN KEY (user_id)    REFERENCES users(id)    ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

INSERT IGNORE INTO products (id, brand, name, price, oldPrice, discount, emoji, rating, reviews, category) VALUES
(1, 'Apple',   'MacBook Air M2 13"',    99900,  119900, 17, '💻', 4.9, 3241, 'laptops'),
(2, 'Samsung', 'Galaxy S24 Ultra 5G',  129999,  149999, 13, '📱', 4.8, 1832, 'phones'),
(3, 'Sony',    'WF-1000XM5 Earbuds',   19990,   26990,  26, '🎧', 4.7,  892, 'audio'),
(4, 'Dell',    'XPS 15 OLED (2024)',  179990,  199990,  10, '🖥️', 4.6,  567, 'laptops'),
(5, 'OnePlus', '12R 5G 256GB',         39999,   49999,  20, '📱', 4.5, 2104, 'phones'),
(6, 'Bose',    'QuietComfort 45',       24990,   34990,  29, '🎧', 4.8, 1456, 'audio'),
(7, 'Apple',   'iPad Pro M4 11"',       99900,  109900,   9, '📟', 4.9,  988, 'tablets'),
(8, 'ASUS',    'ROG Zephyrus G14',     149990,  169990,  12, '💻', 4.7,  742, 'gaming');
