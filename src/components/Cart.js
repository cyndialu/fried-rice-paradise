import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            {cartItems.length > 0 ? (
                cartItems.map((cartItem) => (
                    <div key={cartItem.itemId}>
                        {cartItem.itemQuantity} - {cartItem.itemName} - {cartItem.instruction} - {cartItem.itemPrices}
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;