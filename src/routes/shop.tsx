import { fetchProducts, productsType } from "../shop-items";
import { fetchCart } from "../cart-items";
import { useEffect, useState } from "react";
import { useCart } from "../cartContext";

export const Shop = () => {
    const [products, setProducts] = useState<productsType>([]);
    const { updateCartCount } = useCart();

    useEffect(() => {
        fetchProducts().then((products) => setProducts(products));
    }, [products]);

    const addToCart = (id: number) => {
        const product = products.find((product) => product.id === id);
        if (product) {
            fetchCart().then((cart) => {
                const cartItem = cart.find((item) => item.id === id);
                if (!cartItem && product) {
                    cart.push({ ...product, quantity: 1 });
                } else if (cartItem && product) {
                    cartItem.quantity += 1;
                } else if (!product) {
                    throw new Error("Product not found");
                } else {
                throw new Error("Something went wrong");
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartCount();
            });
        }
    };

    return (
        <div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
            <li key={product.id}>
                <div className="bg-white p-4 shadow rounded">
                <h2 className="font-bold text-xl mb-2">{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <div className="font-bold mb-2">${product.price.toFixed(2)}</div>
                <button onClick={() => addToCart(product.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
}