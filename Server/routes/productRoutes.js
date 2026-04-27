const db = require("../config/db");
const express = require("express");
const router = express.Router();

// Route: GET all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Route: GET by category
router.get("/:cat", (req, res) => {
  db.query(
    "SELECT * FROM products WHERE category=?",
    [req.params.cat],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    }
  );
});

module.exports = router;
