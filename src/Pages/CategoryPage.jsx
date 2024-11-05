import { NavLink, Outlet, useLoaderData } from "react-router-dom";

function CategoryPage() {
  const data = useLoaderData();
  const menus = data.menuItems;
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
            {menus.map((menu) => (
              <div className="grid place-items-center" key={menu.id}>
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                      : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                  }
                >
                  {menu.name}
                </NavLink>
              </div>
            ))}

            {/* <div className="grid place-items-center">
              <NavLink
                to={"categories/Tablet"}
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
                to={"categories/Smartphone"}
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
                to={"categories/Smartwatch"}
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
                to={"categories/Macbook"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                Mac Book
              </NavLink>
            </div>
            <div className="grid place-items-center">
              <NavLink
                to={"categories/Ipad"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#9538E2] rounded-full py-3 px-6 text-center w-full text-white"
                    : "rounded-full bg-[#09080F0D] py-3 px-6 text-center w-full"
                }
              >
                Ipad
              </NavLink>
            </div> */}
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
