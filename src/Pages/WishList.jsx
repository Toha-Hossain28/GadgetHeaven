import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../ItemContext";
import { useLoaderData, useLocation } from "react-router-dom";
import WishListItem from "./WishListItem";

function WishList() {
  const { cartItems, wishlistItems, addToCart, addToWishlist } =
    useContext(ItemsContext);

  const data = useLoaderData();

  const { pathname } = useLocation();

  // console.log(cartItems);

  const [wishListedItems, setWishListedItems] = useState([]);

  useEffect(() => {
    const filteredItems = data.filter((item) =>
      wishlistItems.includes(item.product_id)
    );
    setWishListedItems(filteredItems);
  }, [wishlistItems, data]);

  // console.log(wishListedItems);

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
          <p className="font-bold text-2xl text-[#0B0B0B]">Total Price:</p>
          <button className="btn rounded-full border-[#9538E2] font-semibold text-lg text-[#9538E2]">
            Sort by price <i className="fa-solid fa-arrow-up-wide-short"></i>
          </button>
          <button className="btn rounded-full bg-[#9538E2] font-semibold text-lg text-white">
            Purchase
          </button>
        </div>
      </div>
      {wishListedItems.map((item) => (
        <WishListItem item={item} key={item.product_id} />
      ))}
    </div>
  );
}

export default WishList;
