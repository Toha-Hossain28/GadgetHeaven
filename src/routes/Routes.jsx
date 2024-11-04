import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import CategoryPage from "../Pages/CategoryPage";
import AllProduct from "../Pages/AllProduct";
import ProductDetails from "../Pages/ProductDetails";
import SmartPhone from "../Pages/SmartPhone";
import DashboardLayout from "../Layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <CategoryPage />,
        children: [
          {
            path: "/",
            element: <AllProduct />,
            loader: () => fetch("/fakeData.json"),
          },
          {
            path: "categories/:category",
            element: <SmartPhone />,
            loader: () => fetch("/fakeData.json"),
          },
        ],
      },
    ],
  },
  {
    path: "/products/:product_id",
    element: <ProductDetails />,
    loader: () => fetch("/fakeData.json"),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <p>cart</p>,
      },
      {
        path: "/dashboard/wishlist",
        element: <p>wish</p>,
      },
    ],
  },
  {
    path: "/statistics",
    element: <>hello</>,
  },
  {
    path: "/myWish",
    element: <>hello</>,
  },
]);

export default router;
