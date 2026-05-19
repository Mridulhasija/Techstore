const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: "All fields required",
      });
    }

    db.query(
      "SELECT id FROM users WHERE email = ?",
      [email],
      async (err, rows) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
          });
        }

        if (rows.length) {
          return res.status(409).json({
            error: "Email already registered",
          });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
          [name, email, hashedPassword],
          (err2, result) => {
            if (err2) {
              return res.status(500).json({
                error: err2.message,
              });
            }

            const token = jwt.sign(
              {
                id: result.insertId,
                name,
                email,
              },
              SECRET,
              {
                expiresIn: "7d",
              }
            );

            res.status(201).json({
              token,
              user: {
                id: result.insertId,
                name,
                email,
              },
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password required",
    });
  }

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, rows) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      if (!rows.length) {
        return res.status(401).json({
          error: "Invalid credentials",
        });
      }

      const user = rows[0];

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(401).json({
          error: "Invalid credentials",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        SECRET,
        {
          expiresIn: "7d",
        }
      );

      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  );
};
