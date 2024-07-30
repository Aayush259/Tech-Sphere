import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {

    // Getting pathname.
    const { pathname } = useLocation();

    // Scroll to top when pathname changes.
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [pathname]);
};

export default useScrollToTop;
