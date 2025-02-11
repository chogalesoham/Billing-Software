import { useState } from "react";
import Cart from "../components/Cart";
import Products from "../components/Products";
import InvoiceGenerator from "../components/InvoiceGenerator";

const HomePage = () => {
    const [cartItem, setCartItem] = useState([
    ]);
    const [showInvoice, setshowInvoice] = useState(false);

    return (
        <div className="flex gap-8 h-screen overflow-hidden ">
            <Products cartItem={cartItem} setCartItem={setCartItem} />
            <Cart showInvoice={showInvoice} setshowInvoice={setshowInvoice} cartItem={cartItem} setCartItem={setCartItem} />
            {
                showInvoice && <InvoiceGenerator showInvoice={showInvoice} products={cartItem} setshowInvoice={setshowInvoice} />
            }

        </div>
    );
};

export default HomePage;