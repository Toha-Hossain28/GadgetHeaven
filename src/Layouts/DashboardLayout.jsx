import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function DashboardLayout() {
  const { pathname } = useLocation();
  // console.log(location);
  return (
    <div className="max-w-[1600px] border-x-[30px] border-t-[30px]  border-transparent mx-auto">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
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

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
