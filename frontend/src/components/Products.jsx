import { useEffect, useState } from "react";
import Item from "./Item";

const Products = (props) => {
   
    const [products, setProducts] = useState([]);


    const fetchAllProducts = async () => {
        fetch("http://localhost:8080/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])
    return (
        <div className="grow grid grid-cols-3 gap-8 p-8 overflow-y-scroll scrollbar-hide">
            {
                products?.map((item, index) => (
                    <Item  data={item} props={props} key={index} />
                ))
            }

        </div>
    );
};

export default Products;