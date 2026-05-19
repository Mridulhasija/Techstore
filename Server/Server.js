const express = require("express");
const cors    = require("cors");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "https://techstore-f.onrender.com",
    credentials: true,
  })
);
app.use(express.json());

app.get("/",          (req, res) => res.send("API is running 🚀"));
app.get("/api/ping",  (req, res) => res.json({ ok: true, ts: Date.now() }));

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart",     require("./routes/cartRoutes"));
app.use("/api/auth",     require("./routes/authRoutes"));   

const https = require("https");
const SELF_URL = process.env.RENDER_EXTERNAL_URL || "https://techstore-trv3.onrender.com";

setInterval(() => {
  https.get(`${SELF_URL}/api/ping`, (res) => {
    console.log(`[keep-alive] ping → ${res.statusCode}`);
  }).on("error", (err) => {
    console.warn("[keep-alive] ping failed:", err.message);
  });
}, 14 * 60 * 1000); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
