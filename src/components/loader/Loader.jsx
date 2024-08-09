import React from 'react';

export default function Loader() {

    return (
        <div className="w-full my-10 bg-transparent flex flex-row items-center justify-center">
            <div className="w-3 h-3 bg-indigo-950 m-[5px] rounded-full animate-load-1 scale-0"></div>
            <div className="w-3 h-3 bg-indigo-950 m-[5px] rounded-full animate-load-2 scale-0"></div>
            <div className="w-3 h-3 bg-indigo-950 m-[5px] rounded-full animate-load-3 scale-0"></div>
        </div>
    );
};
