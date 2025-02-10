const express = require("express");
const {
  addToCart,
  getAllCartItems,
} = require("../controllers/cartControllers");

const router = express.Router();

router.post("/cart", addToCart);
router.get("/cart", getAllCartItems);

module.exports = router;
