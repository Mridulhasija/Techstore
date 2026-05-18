const verifyToken = require("../middleware/authMiddleware");

router.get("/verify", verifyToken, (req, res) => {
  res.json({
    valid: true,
    user: req.user,
  });
});
