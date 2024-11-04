import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-[#9538E2] rounded-t-box px-32">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
        <a className="btn btn-ghost text-xl font-bold text-white">
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-base font-medium">
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
