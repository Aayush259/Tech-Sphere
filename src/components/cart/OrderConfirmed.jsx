import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../app/features/cartSlice.js';

export default function OrderConfirmed() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to start new order.
    const startNewOrder = (e) => {
        e.preventDefault();
        dispatch(emptyCart());
        navigate('/Tech-Sphere/products');
    };

    return (
        <div
            className="bg-white py-4 px-6 rounded-3xl w-[640px] max-w-[95vw]"
        >
            <p className="text-3xl flex flex-row items-center justify-start gap-3 font-semibold text-indigo-900">
                <FontAwesomeIcon
                    icon="fa-regular fa-circle-check"
                    className="h-10 text-green-600"
                />
                Order Confirmed
            </p>

            <p className="my-5 text-xl tracking-wide leading-8">
                Your order has been confirmed! Thanks for choosing us 😊
            </p>

            <button
                to={'/Tech-Sphere/products'}
                className="block m-3 mt-6 text-lg text-center text-white bg-indigo-900 p-3 rounded-3xl font-semibold hover:text-indigo-900 hover:bg-white border-2 border-indigo-900 duration-200"
                onClick={startNewOrder}
            >
                Start New Order
            </button>
        </div>
    );
};
