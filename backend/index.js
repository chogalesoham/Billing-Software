const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGODB_URI =
  "mongodb+srv://chogalesoham74:chogalesoham74@cluster0.ghywo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Product Schema & Model
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  imageUrl: String,
});

const Product = mongoose.model("Product", productSchema);

// POST API - Add Product
app.post("/add-product", async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const newProduct = new Product({ name, description, price, imageUrl });
    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product Added Successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error Adding Product", error });
  }
});

// GET API - All Products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error Fetching Products", error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server started at:${PORT}`);
});
