import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import CategoryPage from "../Pages/CategoryPage";
import AllProduct from "../Pages/AllProduct";
import ProductDetails from "../Layouts/ProductDetails";

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
  },
]);

export default router;
