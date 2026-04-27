const db = require("../config/db");

exports.addToCart = (req, res) => {
  const { userId, productId } = req.body;

  db.query(
    "INSERT INTO cart (userId, productId) VALUES (?,?)",
    [userId, productId],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Added to cart" });
    }
  );
};

exports.getCart = (req, res) => {
  db.query(
    "SELECT * FROM cart WHERE userId=?",
    [req.params.userId],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
};