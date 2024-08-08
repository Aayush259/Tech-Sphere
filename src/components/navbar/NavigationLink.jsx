import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavigationLink({ linkText, linkTo, setHamActive }) {

    return (
        <NavLink
            to={linkTo}
            className={({ isActive }) => `${isActive ? "before:w-full before:left-0" : ""} w-fit text-center relative py-3 xl:w-fit xl:py-0 before:block before:absolute before:h-[2px] before:w-0 before:bg-white before:rounded before:bottom-2 xl:before:-bottom-1 before:left-1/2 sm:hover:before:w-full sm:hover:before:left-0 before:duration-300 duration-300`}
            onClick={() => setHamActive(prevHamState => !prevHamState)}
        >
            {linkText}
        </NavLink>
    );
};

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    setHamActive: PropTypes.func.isRequired,
};
