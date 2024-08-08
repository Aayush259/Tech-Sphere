import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem.jsx';
import PlaceOrderWindow from './PlaceOrderWindow.jsx';

export default function Cart() {

    // Getting cart items from store.
    const cartItems = useSelector(state => state.cart.value);

    return (
        <div
        className="lg:flex lg:flex-row lg:justify-center"
        >
            <div className="mb-40 lg:max-w-[60vw] lg:px-10">
                {
                    (cartItems.length > 0) ? (
                        cartItems.map(item => <CartItem key={item['id']} productDetails={item} />)
                    ) : (
                        <div
                            className="text-xl md:text-2xl font-semibold my-20 text-center text-indigo-900"
                        >
                            Your cart is empty.
                        </div>
                    )
                }
            </div>
            <PlaceOrderWindow cartItems={cartItems} />
        </div>
    );
};
