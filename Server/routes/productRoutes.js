const db = require("../config/db");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

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
