const Product = require("../models/Product");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const newProduct = new Product({ name, description, price, imageUrl });
    await newProduct.save();
    res
      .status(201)
      .json({ message: "✅ Product Added Successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "❌ Error Adding Product", error });
  }
};

// Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "❌ Error Fetching Products", error });
  }
};

module.exports = { addProduct, getProducts };
