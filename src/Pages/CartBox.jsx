/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../ItemContext";
import CartItem from "../components/CartItem";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CartBox() {
  const { cartItems, wishlistItems, addToCart, addToWishlist } =
    useContext(ItemsContext);

  const data = useLoaderData();
  const { pathname } = useLocation();

  // console.log(cartItems);

  const [cartedItems, setCartedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const filteredItems = data.filter((item) =>
      cartItems.includes(item.product_id)
    );
    setCartedItems(filteredItems);
  }, [cartItems, data]);

  useEffect(() => {
    let accTot = 0;
    cartedItems.map((item) => {
      accTot += parseFloat(item.price);
    });
    setTotalPrice(accTot);
  }, [cartedItems]);

  // console.log(cartedItems);

  return (
    <div className="mb-5">
      <div className="flex mt-14 justify-between items-center">
        <div className="font-bold text-2xl text-[#0B0B0B]">
          {pathname == "/dashboard" ? "Cart" : "Wishlist"}
        </div>
        <div
          className={`flex items-center gap-4  ${
            pathname !== "/dashboard" ? "hidden" : ""
          }`}
        >
          <p className="font-bold text-2xl text-[#0B0B0B]">
            Total Price: ${totalPrice}
          </p>
          <button className="btn rounded-full border-[#9538E2] font-semibold text-lg text-[#9538E2]">
            Sort by price <i className="fa-solid fa-arrow-up-wide-short"></i>
          </button>
          <button className="btn rounded-full bg-[#9538E2] font-semibold text-lg text-white">
            Purchase
          </button>
        </div>
      </div>
      {cartedItems.map((item) => (
        <CartItem item={item} key={item.product_id} />
      ))}
    </div>
  );
}

export default CartBox;
