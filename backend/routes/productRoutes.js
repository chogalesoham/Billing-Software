const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");

const router = express.Router();

router.post("/add-product", addProduct);
router.get("/products", getProducts);

module.exports = router;
