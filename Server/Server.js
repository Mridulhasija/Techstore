const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend.vercel.app"
  ],
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("TechStore API Running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
