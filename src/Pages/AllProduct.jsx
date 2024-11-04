import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function AllProduct() {
  const data = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      if (!showAll) {
        setProducts(data.slice(0, 6));
      } else {
        setProducts(data);
      }
    }
  }, [data, showAll]);

  // console.log(products);
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.product_id} />
        ))}
      </div>
      <button
        className="btn border border-purple-600 rounded-full bg-purple-600 mt-10 outline-none text-white"
        onClick={() => setShowAll(true)}
      >
        Show All
      </button>
    </>
  );
}

export default AllProduct;
