import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./routes/index";
import { Root } from "./routes/root";
import { NotFound } from "./not-found";
import { Shop } from "./routes/shop";
import { Cart } from "./routes/cart";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Index /> },
        { path: "/shop", element: <Shop /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
