const db = require("../config/db");
const express = require("express");
const router = express.Router();

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getByCategory = (req, res) => {
  db.query(
    "SELECT * FROM products WHERE category=?",
    [req.params.cat],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
};
module.exports = router;
