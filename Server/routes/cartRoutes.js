const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart
} = require("../Controllers/cartController");

router.post("/add", addToCart);
router.get("/:userId", getCart);

module.exports = router;
