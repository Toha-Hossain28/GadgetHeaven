import { Link, NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <div
      className={`navbar
      ${pathname == "/" ? "bg-[#9538E2]" : "text-black"}
      }
      rounded-t-box px-32`}
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
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "underline text-purple-400" : ""
              }
            >
              Home
            </NavLink>
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
        <Link
          to={"/"}
          className={`${
            pathname == "/"
              ? "btn btn-ghost text-xl font-bold text-white"
              : "text-black btn btn-ghost text-xl font-bold"
          }`}
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 text-base font-medium ${
            pathname == "/" ? "text-white" : "text-black"
          }`}
        >
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/myWish"}>My Wish</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <NavLink
          to={"/cart"}
          className="rounded-full bg-white px-2 py-2 flex justify-center items-center text-sm"
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
        <NavLink
          to={"/wishlist"}
          className="rounded-full bg-white px-2 py-2 flex justify-center items-center text-sm"
        >
          <i className="fa-regular fa-heart"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
