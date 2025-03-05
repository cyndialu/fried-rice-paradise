import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage
        const getCartItems = localStorage.getItem('cart');
        return getCartItems ? JSON.parse(getCartItems) : [];
    });

    // Save cart items to localStorage when cart state changed
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        console.log('Adding item to cart: ', item);
        const existingItem = cartItems.find(
            (cartItem) => cartItem.itemId === item.itemId
        );

        if (existingItem) {
            const updatedCart = cartItems.map((cartItem) =>
                cartItem.itemId === item.itemId ?
                    {
                        ...cartItem,
                        itemQuantity: cartItem.itemQuantity + item.itemQuantity,
                        itemPrices: cartItem.itemPrices + item.itemPrices
                    }
                    : cartItem
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, item]);
        }
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) return;
        const setQuantity = cartItems.map((cartItem) =>
            cartItem.itemId === itemId ?
                {
                    ...cartItem,
                    itemQuantity: newQuantity,
                    itemPrices: (newQuantity * (cartItem.itemPrices / cartItem.itemQuantity))
                }
                : cartItem
        );
        setCartItems(setQuantity);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.itemId !== itemId);
        setCartItems(updatedCart);
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };


    const value = {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

