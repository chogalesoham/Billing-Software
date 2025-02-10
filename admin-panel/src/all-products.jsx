import { useEffect, useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-lg w-[100%] h-screen container">
      <h2 className="text-3xl font-bold mb-4 text-center padding">
        Product List
      </h2>
      <div style={{ marginTop: "25px" }} className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 padding">No</th>
              <th className="border border-gray-300 p-2 padding">Name</th>
              <th className="border border-gray-300 p-2 padding">
                Description
              </th>
              <th className="border border-gray-300 p-2 padding">Price</th>
              <th className="border border-gray-300 p-2 padding">Image</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) => product.name)
              .map((product, index) => (
                <tr key={product._id} className="text-center">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{product.name}</td>
                  <td className="border border-gray-300 p-2">
                    {product.description}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ₹{product.price}
                  </td>
                  <td className="border border-gray-300 p-2 flex items-center justify-center">
                    {product.imageUrl.startsWith("http") ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 object-cover mx-auto rounded-full"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
