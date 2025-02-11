const Cart = ({ cartItem }) => {
  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
      // Convert price from string to number by removing commas
      const numericPrice = parseFloat(item.price.replace(/,/g, ''));
      return total + numericPrice * item.quantity;
    }, 0);
  };
  return (
    <div className=" basis-[25%] shrink-0 bg-black/80 text-white p-4">
      {
        cartItem?.length === 0 && <h1>Your Cart Is Empty</h1>
      }


      {
        cartItem?.map(({ imageUrl, name, quantity, price, _id }) => (
          <div key={_id} className="flex  gap-2 mt-4 border-b border-white pb-2">
            <img src={imageUrl} className="aspect-square border-2 border-white rounded-full object-top size-[50px]" alt="" />
            <div >
              <h1>{name}</h1>
              <p>{quantity}x{price}= <span className="font-bold text-green-700">
                {eval(quantity * price)}
              </span> </p>
            </div>
          </div>
        ))
      }
      {
        cartItem?.length > 0 && (
          <div className="mt-4 text-xl flex gap-2">
            <h2>Total Bill:</h2>
            <h1>{calculateTotal(cartItem)}</h1>
          </div>
        )
      }



    </div>
  );
};

export default Cart;