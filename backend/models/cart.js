const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  bill_id: { type: String },
  timestamp: { type: String },
  cart: [
    {
      id: { type: String },
      name: { type: String },
      quantity: { type: String },
      price: { type: String },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
