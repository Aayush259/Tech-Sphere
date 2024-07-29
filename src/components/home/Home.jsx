import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel.jsx';
import HomeProducts from './HomeProducts.jsx';

export default function Home() {

    return (
        <div>
            <Carousel />
            <HomeProducts />

            <Link
            to={'products'}
                className="block m-12 text-center text-white bg-indigo-900 p-3 rounded-3xl font-semibold hover:text-indigo-900 hover:bg-white border-2 border-indigo-900 duration-200"
            >
                View More
            </Link>
        </div>
    );
};
