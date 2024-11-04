import { NavLink, Outlet } from "react-router-dom";

function CategoryPage() {
  return (
    <div>
      <h2 className="font-bold text-4xl text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="w-60 rounded-box col-span-2">
          <div className="bg-white w-56 p-6 rounded-box space-y-4">
            <div className="grid place-items-center">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                All Product
              </NavLink>
            </div>
            <div className="grid place-items-center">
              <NavLink
                to={"/Laptop"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                Laptop
              </NavLink>
            </div>
            <div className="grid place-items-center">
              <NavLink
                to={"/Tablet"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                Tablet
              </NavLink>
            </div>
            <div className="grid place-items-center">
              <NavLink
                to={"/Smartphone"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                Smartphone
              </NavLink>
            </div>
            <div className="grid place-items-center">
              <NavLink
                to={"/Smartwatch"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                Smart Watch
              </NavLink>
            </div>
            <div className="grid place-items-center">
              <NavLink
                to={"/Macbook"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                Mackbook
              </NavLink>
            </div>
            <div className="grid place-items-center">
              <NavLink
                to={"/Ipad"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                Ipad
              </NavLink>
            </div>
          </div>
        </div>
        <div className="h-full w-full col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
