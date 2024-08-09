import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Search() {

    return (
        <div
            className="bg-white w-full sticky top-[72px] z-40 py-5"
        >
            <label htmlFor="search" className="flex flex-row items-center justify-center text-lg  text-indigo-950 mx-auto w-fit">
                <input
                    type="text"
                    id="search"
                    placeholder="Type here to search"
                    className="py-1 px-2 border border-indigo-800 rounded-l-lg max-w-[70vw]"
                />
                <button
                className="py-1 px-2 border border-l-0 border-indigo-950 rounded-r-lg bg-indigo-950 text-white hover:bg-indigo-700 duration-200"
                >
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
            </label>
        </div>
    );
};
