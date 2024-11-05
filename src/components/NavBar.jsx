import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../ItemContext";
import toast, { Toaster } from "react-hot-toast";

// const notify = () => toast("Here is your toast.");

function NavBar() {
  const { pathname } = useLocation();
  const { cartItems, wishlistItems, addToCart, addToWishlist } =
    useContext(ItemsContext);
  // console.log(pathname);
  return (
    <>
      <div
        className={`navbar rounded-t-box px-32 ${
          pathname == "/" ? "bg-[#9538E2] text-white" : "text-black"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink
                to={"/statistics"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Statistics
              </NavLink>

              <NavLink
                to={"/dashboard"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Dashboard
              </NavLink>

              <NavLink
                to={"/myWish"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                My Wish
              </NavLink>
            </div>
          </div>
          <Link to={"/"} className={`btn btn-ghost text-xl font-bold`}>
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 text-base font-bold`}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "underline text-purple-900 " : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                className={({ isActive }) =>
                  isActive ? "underline text-purple-900" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive ? "underline text-purple-900" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/myWish"}
                className={({ isActive }) =>
                  isActive ? "underline text-purple-900" : ""
                }
              >
                My Wish
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <NavLink
            to={"/cart"}
            className="rounded-full bg-white px-2 py-2 flex justify-center items-center text-base relative"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <small
              className={`absolute bottom-4 left-6 bg-black text-white rounded-full px-[8px] py-0 text-[12px] font-bold ${
                cartItems.length < 1 ? "hidden" : ""
              }`}
            >
              {cartItems.length}
            </small>
          </NavLink>
          <NavLink
            to={"/wishlist"}
            className="rounded-full bg-white px-2 py-2 flex justify-center items-center text-base"
          >
            <i className="fa-regular fa-heart"></i>
          </NavLink>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default NavBar;
