import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-6">
        <img src={product_image} className="rounded-box" />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-2xl text-[#09080F] pl-2">
          {product_title}
        </h2>
        <p className="font-medium text-xl text-[#09080F99] pl-2">
          Price: ${price}
        </p>
        <div className="card-actions pl-2">
          <button
            className="btn border border-purple-600 rounded-full text-purple-600"
            onClick={() => navigate(`/products/${product_id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
