import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProductCard() {

    const product = {
        "_id": "66a14841d291bb42dec80c4f",
        "name": "Noise Pulse 4 Max Smart Watch",
        "description": "AI Create (India'a 1st Ever with Unlimited Watch Faces), AI Search, 1.96\" AMOLED Display, Functional Crown, Premium Metallic Finish, Health Suite (Jet Black)",
        "price": 2499,
        "image": "https://res.cloudinary.com/surbhisinghal/image/upload/v1721845496/61Iw0g8zYYL._SX679__fwfghz.jpg",
        "__v": 0
    }

    const productName = product.name;
    const productPrice = product.price;
    const productImage = product.image;

    return (
        <div className="relative w-64 max-w-[80vw] p-4 rounded-2xl shadow-product-card-shadow overflow-hidden duration-300">

            <button className="absolute top-3 right-3 hover:opacity-70">
                <FontAwesomeIcon
                icon="fa-solid fa-heart"
                className={`text-slate-400 h-6`}
                />
            </button>
            
            <img
                src={productImage}
                alt={productName}
                className="block m-auto h-60 max-w-full"
            />

            <div
                className="my-4 tracking-wider"
            >
                <div
                    className="px-3"
                >
                    <p
                        className="font-bold text-xl text-indigo-900"
                    >
                        {productName}
                    </p>

                    <p
                        className="my-2 text-lg font-bold text-indigo-900"
                    >
                        &#8377; {productPrice}
                    </p>
                </div>

                <button
                    className="bg-indigo-900 p-2 my-3 w-full block text-center text-white font-semibold rounded-3xl hover:bg-white hover:text-indigo-900 border-2 border-indigo-900 duration-200"
                >
                    Add To Cart
                </button>

                <Link
                className="bg-indigo-900 p-2 my-3 block text-center text-white font-semibold rounded-3xl hover:bg-white hover:text-indigo-900 border-2 border-indigo-900 duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

