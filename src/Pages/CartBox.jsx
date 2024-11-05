/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ItemsContext } from "../ItemContext";
import CartItem from "../components/CartItem";
import modal from "../assets/modal.png";

function CartBox() {
  const {
    cartItems,
    wishlistItems,
    addToCart,
    addToWishlist,
    setCartItems,
    allOrders,
    setAllOrders,
  } = useContext(ItemsContext);

  const data = useLoaderData();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [cartedItems, setCartedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sorted, setSorted] = useState(false);
  const [purchaseBtn, setPurchaseBtn] = useState(true);

  useEffect(() => {
    const filteredItems = data.filter((item) =>
      cartItems.includes(item.product_id)
    );
    setCartedItems(filteredItems);
  }, [cartItems, data, sorted]);

  useEffect(() => {
    let accTot = 0;
    cartedItems.map((item) => {
      accTot += item.price;
    });
    setTotalPrice(accTot.toFixed(2));
  }, [cartedItems]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setPurchaseBtn(false);
    }
  }, [purchaseBtn, cartItems]);

  const handleSort = () => {
    const sortedItems = [...cartedItems].sort((a, b) => b.price - a.price);
    setCartedItems(sortedItems);
    setSorted(true);
  };

  const handlePurchase = () => {
    document.getElementById("my_modal_1").showModal();
    setPurchaseBtn(true);
  };

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
          <button
            className="btn rounded-full border-[#9538E2] font-semibold text-lg text-[#9538E2]"
            onClick={handleSort}
          >
            Sort by price <i className="fa-solid fa-arrow-up-wide-short"></i>
          </button>
          <button
            className="btn rounded-full bg-[#9538E2] font-semibold text-lg text-white"
            onClick={handlePurchase}
            disabled={purchaseBtn}
          >
            Purchase
          </button>
        </div>
      </div>
      {cartedItems.map((item) => (
        <CartItem item={item} key={item.product_id} />
      ))}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col justify-center items-center gap-4">
          <img src={modal} alt="" />
          <p className="font-bold text-2xl">Payment Successful</p>
          <p className="h-2 border-t-2  w-full"></p>
          <p className="font-medium text-base text-[#09080F99]">
            Thanks for purchasing
          </p>
          <p className="font-medium text-base text-[#09080F99]">
            Total:{totalPrice}
          </p>
          <div className="w-full">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn w-full outline-none rounded-full"
                onClick={() => {
                  const newOrders = [...allOrders, ...cartedItems];
                  setAllOrders(newOrders);
                  setCartItems([]);
                  setPurchaseBtn(true);
                  navigate("/");
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CartBox;
