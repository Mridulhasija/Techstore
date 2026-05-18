const db     = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt    = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "techstore_secret_change_in_prod";

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields required" });

  db.query("SELECT id FROM users WHERE email = ?", [email], (err, rows) => {
    if (err)  return res.status(500).json({ error: err.message });
    if (rows.length) return res.status(409).json({ error: "Email already registered" });

    const hash = bcrypt.hashasync(password, 10);
    db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hash],
      (err2, result) => {
        if (err2) return res.status(500).json({ error: err2.message });
        const token = jwt.sign({ id: result.insertId, name, email }, SECRET, { expiresIn: "7d" });
        res.status(201).json({ token, user: { id: result.insertId, name, email } });
      }
    );
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, rows) => {
    if (err)    return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(401).json({ error: "Invalid credentials" });

    const user = rows[0];
    if (!bcrypt.compareasync(password, user.password))
      return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      SECRET,
      { expiresIn: "7d" }
    );
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
};

exports.verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer "))
    return res.status(401).json({ error: "No token provided" });

  try {
    req.user = jwt.verify(auth.slice(7), SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
