import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function SmartPhone() {
  const { category } = useParams();
  console.log(category);
  const data = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const filteredProduct = products.filter(
    (product) => product.category == category
  );
  console.log(filteredProduct);
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {filteredProduct.map((product) => (
          <ProductCard product={product} key={product.product_id} />
        ))}
        {filteredProduct.length === 0 ? (
          <h1 className="text-4xl text-purple-500 font-bold text-center col-span-3 py-36 pr-52">
            No Data Found
          </h1>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SmartPhone;
