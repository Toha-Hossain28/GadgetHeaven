import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import CategoryPage from "../Pages/CategoryPage";
import AllProduct from "../Pages/AllProduct";
import ProductDetails from "../Pages/ProductDetails";
import SmartPhone from "../Pages/SmartPhone";
import DashboardLayout from "../Layouts/DashboardLayout";
import CartBox from "../Pages/CartBox";
import WishList from "../Pages/WishList";
import Statistics from "../Pages/Statistics";
import OrderHistory from "../Layouts/OrderHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <CategoryPage />,
        loader: () => fetch("/menu.json"),
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
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
  {
    path: "/products/:product_id",
    element: <ProductDetails />,
    errorElement: <ErrorPage />,
    loader: () => fetch("/fakeData.json"),
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <CartBox />,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList />,
        loader: () => fetch("/fakeData.json"),
      },
    ],
  },
  {
    path: "/order_history",
    element: <OrderHistory />,
  },
]);

export default router;
