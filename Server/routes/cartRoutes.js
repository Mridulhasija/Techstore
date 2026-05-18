const express                     = require("express");
const router                      = express.Router();
const { verifyToken }             = require("../Controllers/authController");
const { addToCart, getCart, removeFromCart } = require("../Controllers/cartController");

router.use(verifyToken);            

router.get("/",                getCart);
router.post("/add",            addToCart);
router.delete("/:cartItemId",  removeFromCart);

module.exports = router;
