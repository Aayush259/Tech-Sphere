import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavigationLink({ linkIcon, linkText, linkTo, setHamActive }) {

    return (
        <NavLink
            to={linkTo}
            className={({ isActive }) => `${isActive ? "before:w-full before:left-0" : "before:left-1/2"} w-fit text-center relative py-3 xl:w-fit xl:py-0 before:block before:absolute before:h-[2px] before:w-0 before:bg-white before:rounded before:bottom-2 xl:before:-bottom-1 sm:hover:before:w-full sm:hover:before:left-0 before:duration-300 duration-300 flex flex-row items-center justify-center gap-2`}
            onClick={() => setHamActive(prevHamState => !prevHamState)}
        >
            <FontAwesomeIcon icon={linkIcon} />
            {linkText}
        </NavLink>
    );
};

NavigationLink.propTypes = {
    linkIcon: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    setHamActive: PropTypes.func.isRequired,
};
