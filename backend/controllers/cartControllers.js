const Cart = require("../models/cart");

// ✅ Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { bill_id, timestamp, cart } = req.body;
    let existingCart = await Cart.findOne({ bill_id });

    if (existingCart) {
      existingCart.cart.push(...cart);
      await existingCart.save();
      res
        .status(200)
        .json({ message: "✅ Item added to existing cart", existingCart });
    } else {
      const newCart = new Cart({ bill_id, timestamp, cart });
      await newCart.save();
      res
        .status(201)
        .json({ message: "✅ New cart created successfully", newCart });
    }
  } catch (error) {
    res.status(500).json({ message: "❌ Error adding to cart", error });
  }
};

// ✅ Get all cart items
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching cart items", error });
  }
};
