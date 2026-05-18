const express = require("express");
const router = express.Router();

const {
  register,
  login,
} = require("../Controllers/authController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/verify", verifyToken, (req, res) => {
  res.json({
    valid: true,
    user: req.user,
  });
});

module.exports = router;
