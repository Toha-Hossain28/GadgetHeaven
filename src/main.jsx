import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { ItemsProvider } from "./ItemContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemsProvider>
      <RouterProvider router={router} />
    </ItemsProvider>
  </StrictMode>
);
