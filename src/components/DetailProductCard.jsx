/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ItemsContext } from "../ItemContext";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function DetailProductCard({ product }) {
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
  } = product[0];

  // console.log(availability);

  const { cartItems, wishlistItems, addToCart, addToWishlist } =
    useContext(ItemsContext);

  const [cartBtnStatus, setCartBtnStatus] = useState(false);
  const [wishBtnStatus, setWishBtnStatus] = useState(false);

  const isInCart = cartItems.includes(product_id);
  const isInWish = wishlistItems.includes(product_id);

  useEffect(() => {
    if (isInCart) {
      setCartBtnStatus(true);
    }
    if (isInWish) {
      setWishBtnStatus(true);
    }
  }, [isInCart, isInWish]);

  const handleAddToCart = () => {
    addToCart(product_id);
    // console.log("added");
    // console.log(cartItems);
    setCartBtnStatus(true);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product_id);
    // console.log("wishlist update");
    // console.log(wishlistItems);
    setWishBtnStatus(true);
  };

  return (
    <div className="grid grid-cols-5 gap-6">
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <div className="col-span-2 h-full bg-gray-400 flex justify-center items-center">
        <img src={product_image} alt="" className="" />
      </div>
      <div className="col-span-3">
        <p className="font-semibold text-3xl text-[#09080F] mb-3">
          {product_title}
        </p>
        <p className="font-semibold text-xl text-[#09080FCC] mb-4">
          Price: ${price}
        </p>
        <div className=" bg-[#2f9c083a] inline px-4 py-1 rounded-full outline-1 text-green-800">
          {availability ? "In stock" : "Out of stock"}
        </div>

        <p className="mt-4 text-[#09080F99] text-lg font-normal mb-4">
          {description}
        </p>
        <p className="font-bold text-lg text-[#09080F] mb-3">Specification:</p>
        <ul className="list-decimal list-inside space-y-1 mb-4">
          {specification.map((spec, index) => (
            <li key={index} className="text-[#09080F99]">
              {spec}
            </li>
          ))}
        </ul>
        <p className="font-bold text-[#09080F]">Rating</p>
        <div className="text-yellow-400 flex items-center text-xl mt-2 mb-4">
          {rating > 1 ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
          {rating > 2 ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
          {rating > 3 ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
          {rating > 4 ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
          {rating == 5 ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
          <p className="text-black ml-4 text-xs bg-gray-200 px-2 py-1 rounded-full">
            {rating}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            className="btn border border-purple-600 rounded-full bg-purple-600 outline-none text-white"
            disabled={cartBtnStatus}
            onClick={handleAddToCart}
          >
            Add to cart<i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button
            className="rounded-full px-4 py-2 flex justify-center items-center text-xl btn"
            disabled={wishBtnStatus}
            onClick={handleAddToWishlist}
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailProductCard;
