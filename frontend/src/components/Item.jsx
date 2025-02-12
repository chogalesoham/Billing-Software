const Item = ({ data, props }) => {
  const handleAddToCart = (product) => {
    props?.setCartItem((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className=" rounded-md border">
      <img
        className=" h-52 object-contain w-full"
        src={data?.imageUrl}
        alt=""
      />
      <div className="bg-black/80 transition-all duration-300 hover:bg-black text-white p-4">
        <h1 className=" text-xl">{data?.name}</h1>
        <p>{data?.description}</p>
        <h1 className="text-2xl font-bold">{data?.price} RS</h1>
        <button
          className="w-full inline-block cursor-pointer mt-2 rounded-md bg-white text-black p-2 hover:bg-black hover:text-white border  hover:border-white"
          onClick={() => handleAddToCart(data)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
