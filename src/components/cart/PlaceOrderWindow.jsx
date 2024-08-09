import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OrderConfirmed from './OrderConfirmed.jsx';

export default function PlaceOrderWindow({ cartItems }) {

    // State for total price.
    const [totalPrice, setTotalPrice] = useState(0);

    // State to confirm order.
    const [confirmOrder, setConfirmOrder] = useState(false);

    // This function updates the total cart price.
    const updateTotalPrice = useCallback(() => {
        let price = 0;

        cartItems.forEach(item => {
            price += item['price'] * item['count'];
        });

        setTotalPrice(price);
    }, [cartItems, setTotalPrice]);

    // Update total cart price when cartItems changes.
    useEffect(() => {
        updateTotalPrice();
    }, [cartItems]);

    const placeOrder = () => { 
        setConfirmOrder(true);
     }

    return (
        <>
            <div
                className="fixed bottom-0 left-0 w-screen bg-indigo-950 pt-4 px-8 duration-200 text-white lg:static lg:flex-grow lg:max-w-[464px] lg:h-fit lg:rounded-[30px] lg:p-5 overflow-hidden lg:mt-10 lg:mr-8"
            >
                <p
                    className="text-lg md:text-2xl flex flex-row items-center justify-around font-semibold"
                >
                    <span>
                        Total Price:
                    </span>
                    <span>
                        &#8377; {totalPrice.toLocaleString()}
                    </span>
                </p>

                <button
                    className="text-lg w-[90%] block mx-auto my-3 font-semibold bg-indigo-500 rounded-3xl py-2 px-1 duration-200 hover:bg-white hover:text-indigo-900 lg:mt-5"
                    onClick={placeOrder}
                >
                    Place Order
                </button>

            </div>
            <div
                className={`${confirmOrder ? "block" : "hidden"} absolute top-0 left-0 z-20 w-screen min-h-screen bg-indigo-950 bg-opacity-45 flex items-center justify-center`}
            >
                <OrderConfirmed />
            </div>
        </>
    );
};

PlaceOrderWindow.propTypes = {
    cartItems: PropTypes.array.isRequired,
};
