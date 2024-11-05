/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ItemsContext } from "../ItemContext";

function CartItem({ item }) {
  const { cartItems, wishlistItems, addToCart, addToWishlist, removeFromCart } =
    useContext(ItemsContext);
  const { product_title, price, description, product_image } = item;
  return (
    <div className="p-6 bg-white rounded-box grid grid-cols-12 gap-8 mt-5">
      <div className="h-40 bg-gray-400 w-full rounded-lg col-span-3">img</div>
      <div className="flex flex-col h-40 justify-between col-span-8">
        <h4 className="text-black font-bold text-4xl items-start">
          {product_title}
        </h4>
        <p className="text-gray-400 font-medium text-xl">{description}</p>
        <p className="text-gray-600 font-bold text-2xl">${price}</p>
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

export default CartItem;
