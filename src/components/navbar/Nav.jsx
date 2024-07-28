import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../../images/logo.jpg';
import NavigationLink from './NavigationLink.jsx';

export default function Nav() {

    // Array of navigation links text and their links.
    const navigationLinks = [
        {
            linkText: 'Products',
            linkTo: '/Tech-Sphere/products',
        },
        {
            linkText: 'Wishlist',
            linkTo: '/Tech-Sphere/wishlist',
        },
        {
            linkText: 'Cart',
            linkTo: '/Tech-Sphere/cart',
        },
    ];

    // State for hamburger button.
    const [hamActive, setHamActive] = useState(false);

    // This function handles the hamburger button's state.
    const handleHamburgerClick = (e) => {
        e.stopPropagation();
        setHamActive(prevHamState => !prevHamState);
    };

    // Hides nav link when document is clicked or scrolled except nav.
    useEffect(() => {

        // This function hides the nav links if hamburger is active.
        const handleDocumentClick = () => {
            if (hamActive) {
                setHamActive(false);
            };
        };

        // Adding event listeners to document for click or scroll events to hide navlinks if hamburger is active.
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('scroll', handleDocumentClick);

        // Cleanup functions for event listeners on document.
        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.removeEventListener('scroll', handleDocumentClick);
        };
    });

    return (
        <nav
            className="bg-indigo-950 sticky top-0 z-30 flex flex-row items-center justify-between px-3"
        >
            <Link
                to={'/Tech-Sphere/'}
                className="flex flex-row items-center gap-3 relative z-30"
            >
                <img src={appLogo} alt="Tech Sphere" className="w-12 rounded-full m-3 mx-0" />

                <p
                    className="text-md sm:text-2xl font-semibold text-white"
                >
                    Tech Sphere
                </p>
            </Link>

            <button
                className="absolute top-0 right-6 z-30 h-full flex flex-col gap-1 items-center justify-center sm:hover:opacity-75 xl:hidden duration-300"
                onClick={handleHamburgerClick}
            >
                {
                    ['rotate-45 translate-y-2', 'opacity-0', '-rotate-45 -translate-y-[4px]'].map(twClassName => (
                        <div
                        key={twClassName}
                        className={`w-6 h-[2px] bg-white rounded duration-300 ${hamActive ? twClassName : ''}`}
                        ></div>
                    ))
                }
            </button>

            <div
                className={`text-white bg-indigo-950 text-lg font-medium sm:text-xl mr-4 flex flex-col items-center xl:flex-row gap-0 xl:gap-8 absolute z-10 left-0 xl:static w-screen xl:w-fit px-0 xl:py-0 duration-700 py-0 ${hamActive ? 'py-4 top-[72px]' : 'top-[-100vh]'}`}
            >
                {
                    navigationLinks.map(link => (
                        <NavigationLink key={link['linkText']} linkText={link['linkText']} linkTo={link['linkTo']} setHamActive={setHamActive} />
                    ))
                }
            </div>
        </nav>
    );
};
