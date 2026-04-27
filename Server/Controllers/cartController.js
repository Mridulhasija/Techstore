const db = require("../config/db");

// Add item to cart
exports.addToCart = (req, res) => {
  const { userId, productId, quantity } = req.body;

  db.query(
    "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
    [userId, productId, quantity],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Item added to cart" });
    }
  );
};

// Get cart items
exports.getCart = (req, res) => {
  const userId = req.params.userId;

  db.query(
    "SELECT * FROM cart WHERE user_id = ?",
    [userId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    }
  );
};
