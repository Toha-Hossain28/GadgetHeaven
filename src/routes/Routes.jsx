import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import CategoryPage from "../Pages/CategoryPage";
import AllProduct from "../Pages/AllProduct";
import ProductDetails from "../Pages/ProductDetails";
import SmartPhone from "../Pages/SmartPhone";

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
            path: "/:category",
            element: <SmartPhone />,
            loader: () => fetch("/fakeData.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <>hello</>,
      },
      {
        path: "/dashboard",
        element: <>hello</>,
      },
      {
        path: "/myWish",
        element: <>hello</>,
      },
    ],
  },
  {
    path: "/products/:product_id",
    element: <ProductDetails />,
    loader: () => fetch("/fakeData.json"),
  },
]);

export default router;
