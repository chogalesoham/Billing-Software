import { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Product added successfully:", data);
        alert("Product added successfully!");
        setFormData({ name: "", description: "", price: "", imageUrl: "" });
      } else {
        alert("Error adding product: " + data.message);
      }
    } catch (error) {
      alert("Failed to connect to the server.");
      console.log(error);
    }
  };

  return (
    <div
      style={{ marginTop: "50px", padding: "40px" }}
      className="max-w-md mx-auto bg-white p-6 rounded-lg border"
    >
      <h2 className="text-xl font-semibold mb-4 mt-20 text-center">
        Add a New Product
      </h2>
      <form
        style={{ marginTop: "10px" }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Product Name"
          className="w-full border rounded padding m-y"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Product Description"
          className="w-full p-2 border rounded padding m-y"
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter Product Price"
          className="w-full p-2 border rounded padding m-y"
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Paste Product URL"
          className="w-full p-2 border rounded padding m-y"
        />
        <button
          type="submit"
          className="w-full padding bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
