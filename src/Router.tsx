import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Shop } from "./pages/Shop"
import { Cart } from "./pages/Cart"


export const Router = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Home />, errorElement: <NotFound /> },
        { path: "/shop", element: <Shop />, errorElement: <NotFound /> },
        { path: "/cart", element: <Cart />, errorElement: <NotFound /> },

    ])

return <RouterProvider router={router} />
}