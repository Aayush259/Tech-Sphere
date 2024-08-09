import React from 'react';
import errorImg from '../../images/error.png';

export default function Error() {

    return (
        <div>
            <img src={errorImg} alt="Error" className="text-center mx-auto" />
            <p className="text-indigo-700 text-2xl md:text-3xl font-semibold text-center">
                Something went wrong 😕
            </p>
            <p className="text-indigo-700 text-2xl md:text-3xl font-semibold text-center my-3">
                Try refreshing the page
                </p>
        </div>
    );
};
