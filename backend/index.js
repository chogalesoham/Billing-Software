const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoute");

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/", productRoutes);
app.use("/", cartRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server Running on:${PORT}`);
});
