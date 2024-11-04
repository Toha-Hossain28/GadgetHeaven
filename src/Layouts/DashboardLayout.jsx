import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function DashboardLayout() {
  const { pathname } = useLocation();
  // console.log(location);
  return (
    <div className="max-w-[1600px] border-x-[30px] border-t-[30px]  border-transparent mx-auto">
      <NavBar />
      <div className="bg-[#9538E2] text-white text-center pt-10">
        <h3 className="font-bold text-3xl">Dashboard</h3>
        <p className="font-normal text-base w-3/5 mx-auto mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-6 justify-center mt-8 pb-8">
          <NavLink
            to="/dashboard"
            className={
              pathname === "/dashboard"
                ? "bg-white text-[#9538E2] px-4 py-2 rounded-full w-40 btn outline-none"
                : "bg-[#9538E2] text-white px-4 py-2 rounded-full w-40 btn outline-none"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={
              pathname === "/dashboard/wishlist"
                ? "bg-white text-[#9538E2] px-4 py-2 rounded-full w-40 btn outline-none"
                : "bg-[#9538E2] text-white px-4 py-2 rounded-full w-40 btn outline-none"
            }
          >
            WishList
          </NavLink>
        </div>
      </div>
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
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
