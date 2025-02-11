import { useState } from "react";
import Cart from "../components/Cart";
import Products from "../components/Products";

const HomePage = () => {
    const [cartItem, setCartItem] = useState([
    ]);

    return (
        <div className="flex gap-8 h-screen overflow-hidden ">
            <Products cartItem={cartItem} setCartItem={setCartItem}  />
            <Cart cartItem={cartItem} setCartItem={setCartItem} />
        </div>
    );
};

export default HomePage;