/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";
import { fetchCart, cartType } from "./cart-items";


export type CartContextType = {
    cart: cartType;
    cartCount: number;
    updateCartCount: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<cartType>([]);
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        fetchCart().then((cart) => setCart(cart));
    }, [cart]);

    const updateCartCount = async () => {
        const fetchedCart = await fetchCart();
        setCartCount(fetchedCart.length);
    };

    useEffect(() => {
        updateCartCount();
    }, []);


    return (
        <CartContext.Provider value={{ cart, cartCount, updateCartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

