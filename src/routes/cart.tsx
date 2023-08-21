import { cartType } from "../cart-items";
import { useCart } from "../cartContext";

export const Cart = () => {
    const { cart } = useCart();

    if (cart.length === 0) {
        return <div className="text-center">Your cart is empty</div>;
    }

    const clearCart = () => {
        localStorage.removeItem("cart");
        window.location.reload();
    };

    const removeFromCart = (id: number) => {
        return () => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const newCart = cart.filter((item: { id: number }) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(newCart));
            window.location.reload();
        };
    };

    const checkout = (cart: cartType) => {
        return () => {
            alert(`Checkout - Subtotal: $${cart.reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}`);
            localStorage.removeItem("cart");
            window.location.reload();
        };
    };


return (
  <div className="grid grid-cols-3">
    <div className="col-span-2">
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {cart.map((cartItem) => (
        <li key={cartItem.id}>
            <div className="bg-white p-4 shadow rounded">
            <h2 className="font-bold text-xl mb-2">{cartItem.title}</h2>
            <img src={cartItem.image} alt={cartItem.title} />
            <div className="font-bold mb-2">${cartItem.price.toFixed(2)}</div>
            <div className="font-bold mb-2">Quantity: {cartItem.quantity}</div>
            <button onClick={removeFromCart(cartItem.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Remove
            </button>
            </div>
        </li>
        ))}
    </ul>
    </div>
    <div className="">
        <div className="bg-white p-4 shadow rounded">
            <h2 className="font-bold text-xl mb-2">Total</h2>
            <div className="font-bold mb-2">Items: {cart.length}</div>
            <div className="font-bold mb-2">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}</div>

            <button onClick={checkout(cart)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Checkout
            </button>

            <button onClick={clearCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Clear Cart
            </button>

    </div>
  </div>
  </div>
);

}