import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { ItemsContext } from "../ItemContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function OrderHistory() {
  const {
    cartItems,
    wishlistItems,
    addToCart,
    addToWishlist,
    setCartItems,
    allOrders,
    setAllOrders,
  } = useContext(ItemsContext);

  const navigate = useNavigate();

  console.log(allOrders);
  return (
    <div className="max-w-[1600px] border-x-[30px] border-t-[30px]  border-transparent mx-auto">
      <Helmet>
        <title>Order history</title>
      </Helmet>
      <NavBar />
      <h1 className="bg-[#9538E2] font-bold text-5xl text-white text-center pt-10">
        Your Previous History
      </h1>
      <div className="min-h-[350px] bg-[#9538E2] grid grid-cols-3  py-20 px-10 gap-5">
        {allOrders.map((order, idx) => (
          <div className="card card-compact bg-base-100 shadow-xl" key={idx}>
            <figure className="p-6">
              <img
                src={order.product_image}
                className="rounded-box w-[425px] h-[340px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-semibold text-2xl text-[#09080F] pl-2">
                {order.product_title}
              </h2>
              <p className="font-medium text-xl text-[#09080F99] pl-2">
                Price: ${order.price}
              </p>
              <div className="card-actions pl-2">
                <button
                  className="btn border border-purple-600 rounded-full text-purple-600"
                  onClick={() => navigate(`/products/${order.product_id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default OrderHistory;
