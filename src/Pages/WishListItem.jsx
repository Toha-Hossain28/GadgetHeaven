/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ItemsContext } from "../ItemContext";

function WishListItem({ item }) {
  const { cartItems, wishlistItems, addToCart, addToWishlist, removeFromCart } =
    useContext(ItemsContext);
  const [btnStatus, setBtnStatus] = useState(false);
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
  } = item;

  const isInCart = cartItems.includes(product_id);
  const isInWish = wishlistItems.includes(product_id);

  useEffect(() => {
    if (isInCart) {
      setBtnStatus(true);
    }
  }, [isInCart]);

  const handleAddToCart = () => {
    addToCart(product_id);
    // console.log("added");
    // console.log(cartItems);
    setBtnStatus(true);
  };
  return (
    <div className="p-6 bg-white rounded-box grid grid-cols-12 gap-8 mt-5">
      <div className="h-48 bg-gray-400 w-full rounded-lg col-span-3">img</div>
      <div className="flex flex-col justify-between col-span-8">
        <h4 className="text-black font-bold text-4xl items-start">
          {product_title}
        </h4>
        <p className="text-gray-400 font-medium text-xl">{description}</p>
        <p className="text-gray-600 font-bold text-2xl">${price}</p>
        <div>
          <button
            className="btn border border-purple-600 rounded-full bg-purple-600 outline-none text-white"
            disabled={btnStatus}
            onClick={handleAddToCart}
          >
            Add to cart<i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      <div
        className="col-span-1 content-start text-4xl text-red-500 cursor-pointer"
        onClick={() => removeFromCart(item.product_id)}
      >
        <AiFillCloseCircle />
      </div>
    </div>
  );
}

export default WishListItem;
